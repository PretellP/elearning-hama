<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            "dni" => ['required', 'max:11', 'unique:users'],
            "name" => ['required'],
            "paternal" => ['required'],
            "maternal" => ['required'],
            "email" => ['required'],
            "password" => ['required'],
            "company_id" => ['required'],
            "id_mining_units" => ['required'],
            "role" => ['required'],
            "active" => ['nullable']
        ];
    }
}
