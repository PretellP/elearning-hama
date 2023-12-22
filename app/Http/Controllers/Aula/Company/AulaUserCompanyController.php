<?php

namespace App\Http\Controllers\Aula\Company;

use App\Http\Controllers\Controller;
use App\Services\RoleCompanyService;
use Illuminate\Http\Request;
use Auth;
class AulaUserCompanyController extends Controller
{
    private $usersCompany;
    public function __construct(RoleCompanyService $service)
    {
        $this->usersCompany = $service;
    }

    public function index(Request $request)
    {     
     
        if( $request->ajax() ) {
            return $this->usersCompany->UserCompanyDataTable();
        }
        return view('aula.company.userCompany.index');

    }
}
