<?php

namespace App\Services;

use App\Models\File;
use App\Models\User;
use Exception;
use Storage;

class FileService
{
    public function store($model, $file_type, $category, $file, $storage, $belongsTo, $relation)
    {
        $directory = $this->makeDirectory($model, $file_type, $category, $belongsTo);
        $filename = $this->getFileName($directory, $file, $storage);

        $file_data = $this->storeInStorage($directory, $filename, $file, $storage);

        $stored_file = $this->getStoredFile($file_data[0], $file_data[1], $file_type, $category);

        if ($relation == 'one_one') {
            return $model->file()->save($stored_file);
        } elseif ($relation == 'one_many') {
            return $model->files()->save($stored_file);
        }

        throw new Exception(config('parameters.exception_message'));
    }

    public function destroy($file = null, $storage)
    {
        if ($file) {
            if (Storage::disk($storage)->exists($file->file_path)) {
                Storage::disk($storage)->delete($file->file_path);
            }
            return $file->delete();
        }

        return false;
    }

    public function makeDirectory($model, $file_type, $category, $belongsTo)
    {
        $directory = $file_type . '/' . $category;
        if ($belongsTo == 'folder') {
            $directory = $model->folder_path;
        }

        return $directory;
    }

    public function destroyDirectory($directory, $storage)
    {
        return Storage::disk($storage)->deleteDirectory($directory);
    }

    public function storeDirectory($directory, $storage)
    {
        $stored = Storage::disk($storage)->makeDirectory($directory);

        return $stored;
    }

    private function getFileName($directory, $file, $storage)
    {
        $filename = preg_replace('/\s+/', '-', $file->getClientOriginalName());
        $name_array = explode('.', $filename);
        $origin_filename = $name_array[0];
        $extension = $name_array[1];

        $count = 1;
        while (Storage::disk($storage)->exists($directory . '/' . $filename)) {
            $filename = $origin_filename . ' (' . $count++ . ').' . $extension;
        }

        return $filename;
    }

    private function storeInStorage($directory, $filename, $file, $storage)
    {
        $file_path = Storage::disk($storage)->putFileAs($directory, $file, $filename);
        $file_url = Storage::disk($storage)->url($file_path);

        return array($file_path, $file_url);
    }

    private function getStoredFile($file_path, $file_url, $file_type, $category)
    {
        $stored_file = new File([
            "file_path" => $file_path,
            "file_url" => $file_url,
            "file_type" => $file_type,
            "category" => $category,
        ]);

        return $stored_file;
    }

    public function download($file, $storage)
    {
        if (Storage::disk($storage)->exists($file->file_path)) {
            return Storage::disk($storage)->download($file->file_path);
        }

        return false;
    }

    public function storeSignature(User $user, $imgBase64, $file_type, $category, $belongsTo, $storage)
    {
        $directory = $this->makeDirectory($user, $file_type, $category, $belongsTo);
        $image = str_replace('data:image/png;base64,', '', $imgBase64);
        $image = str_replace(' ', '+', $image);
        $image_name = $user->dni . '_' . time() . '.png';
        $full_path = $directory . '/' . $image_name;

        if (Storage::disk($storage)->put($full_path, base64_decode($image))) {

            $files = $user->files()->where('category', 'firmas')->get();

            if ($files->isNotEmpty()) {
                foreach ($files as $file) {
                    $this->destroy($file, $storage);
                }
            }

            $file_url = Storage::disk($storage)->url($full_path);
            $file = $this->getStoredFile($full_path, $file_url, $file_type, $category);

            if($user->file()->save($file)){
                return $user->update(['signature' => 'S']);
            };
        }

        return false;
    }   
}
