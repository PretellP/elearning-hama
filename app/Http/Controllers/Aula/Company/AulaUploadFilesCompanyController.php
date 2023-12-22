<?php
namespace App\Http\Controllers\Aula\Company;

use App\Http\Controllers\Controller;
use App\Models\Company;

use App\Services\{RoleCompanyService};

use Auth;
use Illuminate\Http\Request; // Asegúrate de importar la clase Request desde Illuminate\Http

class AulaUploadFilesCompanyController extends Controller
{
 

    public function index()
    {
     
        
        return view('aula.company.upFilesCompany.index');
    }
    
    
    

}
