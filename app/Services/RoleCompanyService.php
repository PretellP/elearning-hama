<?php

namespace App\Services;

use App\Models\{ User};
use Yajra\DataTables\Facades\DataTables;
use Auth;


class RoleCompanyService
{
    public function UserCompanyDataTable()
    {
        $userSession = Auth::user();

        $users= DataTables::of(User::whereHas('company', function($query) use ($userSession){
            $query->where('description', $userSession->company->description);
            })->where('role','!=', 'companies')->get())
            ->editColumn('company.description', function($userSession){
                $company= $userSession->company->description ?? '-';
                return $company;
            }) ->editColumn('role', function ($userSession) {
                return config('parameters.roles')[$userSession->role] ?? '-';
            })
            ->addColumn('status-btn', function ($userSession) {
                $status = $userSession->active == 'S' ? 'active' : 'inactive';
                $txtBtn = $status == 'active' ? 'Activo' : 'Inactivo';
                $statusBtn = '<span class="status ' . $status . '">' . $txtBtn . '</span>';

                return $statusBtn;
            })
            ->rawColumns(['status-btn'])
            ->make(true);

        return $users;
    }

    
}