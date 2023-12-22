<?php

namespace App\Http\Controllers\Aula\Company;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Auth;
class AulaKpisCompanyController extends Controller
{
    public function index()
    {
    
        return view('aula.company.kpisCompany.index');
    }
}
