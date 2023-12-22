<?php

namespace App\Http\Controllers\Aula\Company;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Auth;
class AulaDocCompanyController extends Controller
{
    //

    public function index()
    {
    
        
        return view('aula.company.docCompany.index');
    }
}
