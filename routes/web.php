<?php

use App\Http\Controllers\Admin\{
    AdminController,
    AdminCourseController,
    FolderController,
    AdminAnnouncementsController,
    AdminCertificationsController,
    AdminCompaniesController,
    AdminCourseCategoriesController,
    AdminCourseSectionsController,
    AdminDynamicQuestionsController,
    AdminDynamicAlternativeController,
    AdminEventsController,
    AdminExamsController,
    AdminFreeCoursesController,
    AdminRoomsController,
    AdminUsersController,
    AdminOwnerCompaniesController,
    AdminMiningUnitsController,
    AdminSectionChaptersController,
    AdminSurveyController,
    AdminSurveyGroupController,
    AdminSurveyOptionController,
    AdminSurveyStatementController,
    CourseTypeController
};
use App\Http\Controllers\Aula\Common\{
    AulaHomeController,
    AulaCourseController,
    AulaFolderController,
    AulaProfileController
};
use App\Http\Controllers\Aula\Participant\{
    AulaCoursePartController,
    QuizController,
    AulaEvaluationController,
    AulaOnlineLessonController,
    AulaFreeCourseController,
    AulaMyProgressController,
    AulaSurveysController
};
use App\Http\Controllers\Aula\Instructor\{
    AulaCourseInstController,
};

// use App\Http\Controllers\Home\{HomeAboutController, HomeController, HomeCourseController, HomeCertificationController, HomeFreeCourseController};

use App\Http\Controllers\Auth\{LoginController};
use App\Http\Controllers\Common\Certificate\{CertificateController};
use App\Http\Controllers\Pdf\{
    PdfCertificationController
};
use App\Http\Controllers\Reports\ProfileSurveyReportController;
use App\Http\Controllers\Reports\SurveysReportController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;


// Route::controller(HomeController::class)->group(function () {
//     Route::get('/', 'index')->name('home.index');
//     Route::get('/obtener-contenido-de-registro', 'getRegisterModalContent')->name('home.getRegisterModalContent');
// });


Route::controller(LoginController::class)->group(function () {

    Route::get('/', 'showLoginForm')->name('login');
    // Route::post('/login/validate-attempt', 'validateAttempt')->name('login.validateAttempt');
});


// Route::controller(RegisterController::class)->group(function () {

//     Route::get('/registro/validate-dni', 'validateDni')->name('register.validateDni');
//     Route::get('/registro/{location?}/{redirect?}', 'showRegistrationForm')->name('register.show');
//     Route::post('/registrar-usuario/{location?}/{redirect?}', 'register')->name('home.user.register');
// });

// Route::controller(HomeCourseController::class)->group(function () {

//     Route::get('/cursos', 'index')->name('home.courses.index');
//     Route::get('/cursos/{course}', 'show')->name('home.courses.show');
// });

// Route::controller(HomeFreeCourseController::class)->group(function () {

//     Route::get('/cursos-libres/categorías', 'index')->name('home.freecourses.categories.index');
//     Route::get('/cursos-libres/categoría/{category}', 'show')->name('home.freecourses.show');
// });

// Route::controller(HomeAboutController::class)->group(function () {

//     Route::get('/nosotros', 'index')->name('home.about.index');
// });

// Route::controller(HomeCertificationController::class)->group(function () {

//     Route::post('/incribir-evento/{event}', 'UserCertificationSelfRegister')->name('home.certifications.userSelfRegister');
// });

Auth::routes(['register' => false]);


// --------------- CERTIFICATION -----------------

Route::group(['prefix' => 'certificados', 'as' => 'certifications.'], function () {
    
    Route::controller(CertificateController::class)->group(function () {

        Route::get('/', 'index')->name('index');
    });
});

Route::group(['prefix' => 'pdf', 'as' => 'pdf.'], function () {

    // ------ pdf.*
    Route::controller(PdfCertificationController::class)->group(function () {

        Route::get('/exportar-certificado/{certification}', 'certificationPdf')->name('export.certification');

        Route::get('/exportar-compromiso/{certification}/unidad-minera/{miningUnit}', 'commitmentPdf')->name('export.commitment');

        Route::get('/exportar-certificado-externo/{certification}', 'extCertificationPdf')->name('export.ext_certification');
        Route::get('/exportar-certificado-webinar/{certification}', 'webCertificationPdf')->name('export.web_certification');
        Route::get('/descargar-archivo/{file}', 'downloadFile')->name('download.file');
    });
});

Route::group(['middleware' => ['auth', 'check.valid.user']], function () {

    // RUTAS DE LA INTERFAZ ADMINISTRADOR ------------------

    Route::group(['middleware' => 'check.role:admin,super_admin', 'prefix' => 'admin', 'as' => 'admin.'], function () {

        // ---- ADMIN DASHBOARD PRINCIPAL VIEW --------

        Route::get('/inicio', [AdminController::class, 'index'])->name('home.index');

        // --------------- USERS -------------------------

        Route::group(['prefix' => 'usuarios'], function () {

            Route::controller(AdminUsersController::class)->group(function () {

                Route::get('/', 'index')->name('users.index');
                Route::get('/registrar/obtener-empresas', 'registerGetCompanies')->name('users.registerGetCompanies');
                Route::get('/editar/{user}', 'edit')->name('user.edit');
                Route::post('/registrar/validar-dni', 'registerValidateDni')->name('users.validateDni');
                Route::post('/editar/validar-dni', 'editValidateDni')->name('user.editValidateDni');
                Route::post('/registrar', 'store')->name('user.store');
                Route::post('/actualizar/{user}', 'update')->name('user.update');
                Route::delete('/eliminar/{user}', 'destroy')->name('user.delete');

                Route::get('/descargar-plantilla-registro-masivo', 'downloadImportTemplate')->name('user.download.register.template');
                Route::post('/registro-masivo', 'massiveStore')->name('users.massive.store');
            });
        });

        // --------------  COMPANIES --------------------

        Route::group(['prefix' => 'empresas'], function () {

            Route::controller(AdminCompaniesController::class)->group(function () {

                Route::get('/', 'index')->name('companies.index');
                Route::get('/editar/{company}', 'edit')->name('companies.edit');
                Route::post('/registrar', 'store')->name('companies.store');
                Route::post('/editar/validar-ruc', 'EditvalidateRuc')->name('companies.validateRuc');
                Route::post('/actualizar/{company}', 'update')->name('companies.update');
                Route::delete('/eliminar/{company}', 'destroy')->name('companies.delete');
            });
        });

        // ---------------- OWNER COMPANIES ---------------

        Route::group(['prefix' => 'empresas-titulares'], function () {

            Route::controller(AdminOwnerCompaniesController::class)->group(function () {

                Route::get('/', 'index')->name('ownerCompanies.index');
                Route::get('/editar/{company}', 'edit')->name('ownerCompany.edit');
                Route::post('/validar-registro', 'registerValidate')->name('ownerCompany.registerValidate');
                Route::post('/validar-edición', 'editValidate')->name('ownerCompanies.editValidate');
                Route::post('/registrar', 'store')->name('ownerCompanies.store');
                Route::post('/actualizar/{company}', 'update')->name('ownerCompany.update');
                Route::delete('/eliminar/{company}', 'destroy')->name('ownerCompany.delete');
            });
        });

        /* ---------------- MINING UNITS ----------------------*/

        Route::group(['prefix' => 'unidades-mineras'], function () {

            Route::controller(AdminMiningUnitsController::class)->group(function () {

                Route::get('/', 'index')->name('miningUnits.index');
                Route::get('/editar/{miningUnit}', 'getDataEdit')->name('miningUnits.getDataEdit');
                Route::post('/registrar', 'store')->name('miningUnits.store');
                Route::post('/actualizar/{miningUnit}', 'update')->name('mininUnits.update');
                Route::delete('/eliminar/{miningUnit}', 'destroy')->name('miningUnits.delete');
            });
        });

        // --------------- ROOMS -------------------------

        Route::group(['prefix' => 'salas'], function () {

            Route::controller(AdminRoomsController::class)->group(function () {

                Route::get('/', 'index')->name('rooms.index');
                Route::get('/editar/{room}', 'edit')->name('room.edit');
                Route::post('/registrar', 'store')->name('rooms.store');
                Route::post('/registrar/validar-nombre', 'registerValidateName')->name('rooms.registerValidateName');
                Route::post('/editar/validar-nombre', 'editValidateName')->name('rooms.editValidateName');
                Route::post('/actualizar/{room}', 'update')->name('room.update');
                Route::delete('/eliminar/{room}', 'destroy')->name('rooms.delete');
            });
        });

        // -------------- COURSE TYPES -----------------
        //--- admin.coursetypes.*

        Route::group(['prefix' => 'tipos-de-cursos', 'as' => 'coursetypes.'], function (){

            Route::controller(CourseTypeController::class)->group(function () {

                Route::get('/', 'index')->name('index');
                Route::get('/editar/{coursetype}', 'edit')->name('edit');
                Route::post('/registrar', 'store')->name('store');
                Route::post('/actualizar/{coursetype}', 'update')->name('update');
                Route::delete('/eliminar/{coursetype}', 'destroy')->name('destroy');
            });
        });

        // --------------- COURSES ----------------------

        Route::group(['prefix' => 'cursos'], function () {

            Route::controller(AdminCourseController::class)->group(function () {

                Route::get('/', 'index')->name('courses.index');
                Route::get('/editar/{course}', 'edit')->name('courses.edit');
                Route::get('/ver/{course}', 'show')->name('courses.show');
                Route::post('/registrar', 'store')->name('courses.store');
                Route::post('/actualizar/{course}', 'update')->name('courses.update');
                Route::delete('/eliminar/{course}', 'destroy')->name('courses.delete');
            });


            Route::group(['prefix' => 'carpetas'], function () {

                Route::controller(FolderController::class)->group(function () {

                    Route::get('/ver-carpeta/{folder}', 'show')->name('courses.folder.view');
                    Route::post('/ccrear-carpeta/{course}', 'store')->name('folder.create');
                    Route::post('/subfolder/{folder}', 'storeSubfolder')->name('subfolder.create');
                    Route::patch('/{folder}/actualizar', 'update')->name('folder.update');
                    Route::delete('/{folder}/eliminar', 'destroy')->name('folder.destroy');

                    // ------FOLDER FILES --------------

                    Route::get('/{folder}/archivos', 'showFiles')->name('files.index');
                    Route::get('/archivo/{file}/descargar', 'downloadFile')->name('folders.file.download');
                    Route::post('/{folder}/añadirArchivo', 'storeFile')->name('folders.file.store');
                    Route::delete('/archivo/{file}/eliminar', 'destroyFile')->name('folders.file.destroy');
                });
            });
        });

        // --------------- FREE COURSES -----------------

        Route::group(['prefix' => 'cursos-libres'], function () {

            Route::controller(AdminFreeCoursesController::class)->group(function () {

                Route::get('/', 'index')->name('freeCourses.index');
                Route::get('/obtener-categorias', 'getCategoriesRegisterCourse')->name('freecourses.getCategoriesRegister');
                Route::get('/curso/{course}', 'show')->name('freeCourses.courses.index');
                Route::get('/editar/{course}', 'edit')->name('freecourse.courses.edit');
                Route::post('/registrar', 'store')->name('freecourses.courses.store');
                Route::post('/actualizar/{course}', 'update')->name('freeCourses.courses.update');
                Route::post('/curso/eliminar/{course}', 'destroy')->name('freecourses.courses.delete');
            });

            Route::group(['prefix' => 'categorías'], function () {

                Route::controller(AdminCourseCategoriesController::class)->group(function () {

                    Route::get('/{category}', 'index')->name('freeCourses.categories.index');
                    Route::get('/editar/{category}', 'edit')->name('freecourses.categories.edit');
                    Route::post('/registrar', 'store')->name('freeCourses.categories.store');
                    Route::post('/actualizar/{category}', 'update')->name('freecourses.categories.update');
                    Route::post('/eliminar/{category}', 'destroy')->name('freecourses.categories.delete');
                });
            });

            Route::group(['prefix' => 'secciones'], function () {

                Route::controller(AdminCourseSectionsController::class)->group(function () {

                    Route::get('/editar/{section}', 'edit')->name('freeCourses.sections.edit');
                    Route::post('/curso/{course}/secciones/registrar', 'store')->name('freeCourses.sections.store');
                    Route::post('/actualizar-orden/{section}', 'updateOrder')->name('freecourses.sections.updateOrder');
                    Route::post('/actualizar/{section}', 'update')->name('freeCourses.sections.update');
                    Route::post('/eliminar/{section}', 'destroy')->name('freeCourses.sections.delete');
                });
            });

            Route::group(['prefix' => 'capítulos'], function () {

                Route::controller(AdminSectionChaptersController::class)->group(function () {

                    Route::get('/obtener-capítulos/{section}', 'getDataTable')->name('freeCourses.chapters.getDataTable');
                    Route::get('/editar/{chapter}', 'edit')->name('freeCourses.chapters.edit');
                    Route::get('/obtener-video/{chapter}', 'getVideoData')->name('freeCourses.chapters.getVideoData');
                    Route::post('/sección/{section}/registrar-capítulo', 'store')->name('freeCourses.chapters.store');
                    Route::post('/actualizar/{chapter}', 'update')->name('freeCourses.chapters.update');
                    Route::post('/capítulos/eliminar/{chapter}', 'destroy')->name('freeCourses.chapters.delete');
                });
            });
        });

        // -------------------- EXAMS ---------------------

        Route::group(['prefix' => 'examenes'], function () {

            Route::controller(AdminExamsController::class)->group(function () {

                Route::get('/', 'index')->name('exams.index');
                Route::get('/editar/{exam}', 'edit')->name('exams.edit');
                Route::post('/registrar', 'store')->name('exams.store');
                Route::post('/actualizar/{exam}', 'update')->name('exams.update');
                Route::post('/eliminar/{exam}', 'destroy')->name('exams.destroy');
            });

            Route::controller(AdminDynamicQuestionsController::class)->group(function () {

                Route::get('/ver/{exam}', 'index')->name('exams.showQuestions');
                Route::get('/ver-enunciado/{question}', 'show')->name('exams.questions.show');
                Route::get('/obtener-tipo-de-enunciado', 'getQuestionType')->name('exams.questions.getType');
                Route::post('/registrar-enunciado/{exam}', 'store')->name('exams.questions.store');
                Route::post('/actualizar-enunciado/{question}', 'update')->name('exams.questions.update');
                Route::post('/eliminar-enunciado/{question}', 'destroy')->name('exams.questions.destroy');
            });

            Route::controller(AdminDynamicAlternativeController::class)->group(function () {

                Route::post('/alternativa/{alternative}/eliminar', 'destroy')->name('exams.alternatives.destroy');
                Route::post('/alternativa/{alternative}/eliminar-archivo', 'destroyFile')->name('exams.alternatives.deleteFile');
            });
        });

        // --------------- EVENTS ------------------------

        Route::group(['prefix' => 'eventos'], function () {

            Route::controller(AdminEventsController::class)->group(function () {

                Route::get('/', 'index')->name('events.index');
                Route::get('/ver/{event}', 'show')->name('events.show');
                Route::get('/crear/obtener-data', 'create')->name('events.create');
                Route::get('/validar-enunciados-puntuación/', 'validateQuestionsScore')->name('events.validateQuestionsScore');
                Route::get('/editar-evento/{event}/obtener-data', 'edit')->name('events.edit');
                Route::get('/obtener-usuarios/{event}', 'getUsersTable')->name('events.getUsersTable');
                Route::post('/registrar', 'store')->name('events.store');
                Route::post('/actualizar/{event}', 'update')->name('events.update');
                Route::delete('/eliminar/{event}', 'destroy')->name('events.destroy');
            });

            Route::controller(AdminCertificationsController::class)->group(function () {

                Route::get('/ver-certificado/{certification}', 'show')->name('events.certifications.show');
                Route::get('/editar-certificado/{certification}', 'edit')->name('events.certifications.edit');
                Route::post('/registrar-participantes/{event}', 'store')->name('events.certifications.store');
                Route::post('/actualizar-asistencia/{certification}', 'updateAssist')->name('events.certification.updateAssist');
                Route::post('/actualizar-certificado/{certification}', 'update')->name('events.certifications.update');
                Route::delete('/eliminar-certificado/{certification}', 'destroy')->name('events.certifications.destroy');

                // --------- IMPORT PARTICIPANTS -------------
                Route::get('/descargar-plantilla-registro-masivo-participantes', 'downloadImportTemplate')->name('events.certifications.download.participants.template');
                Route::post('/registro-masivo-de-participantes/{event}', 'storeMassive')->name('events.certifications.store.massive');

                // ---------- IMPORT SCORES -------------
                Route::get('/descargar-plantilla-registro-de-notas-masivo', 'downloadImportScoreTemplate')->name('events.certifications.download.participants_score.template');
                Route::post('/registro-masivo-de-notas/{event}', 'storeScoresMasive')->name('events.certifications.store.score_massive');

                // ---------- IMPORT AREA ---------------

                Route::get('/descargar-plantilla-registro-de-area-obervacion', 'downloadImportAreaTemplate')->name('events.certifications.download.participants_area.template');
                Route::post('/registro-masivo-de-area-observacion/{event}', 'updateAreaMassive')->name('events.certifications.store.area_massive');

                // ----------- RESET -----------------
                Route::post('/reiniciar-certificado/{certification}', 'reset')->name('events.certifications.reset');
            });
        });

        // --------------- ANNOUNCEMENTS ----------------

        Route::group(['prefix' => 'anuncios'], function () {

            Route::controller(AdminAnnouncementsController::class)->group(function () {

                Route::get('/', 'index')->name('announcements.index');
                Route::get('/editar-banner/{banner}', 'editBanner')->name('announcements.banner.edit');
                Route::post('/registrar-banner', 'storeBanner')->name('announcements.banner.store');
                Route::post('/actualizar-banner/{banner}', 'updateBanner')->name('announcements.banner.update');
                Route::delete('/banner/eliminar/{banner}', 'destroyBanner')->name('announcements.banner.delete');

                Route::get('/editar-publicación/{card}', 'editCard')->name('announcements.card.edit');
                Route::post('/registrar-publicación', 'storeCard')->name('announcements.card.store');
                Route::post('/actualizar-publicación/{card}', 'updateCard')->name('announcements.card.update');
                Route::delete('/publicación/eliminar/{card}', 'destroyCard')->name('announcements.card.delete');
            });
        });

        // --------------- SURVEYS ----------------

        Route::group(['prefix' => 'encuestas'], function () {

            Route::controller(AdminSurveyController::class)->group(function () {

                Route::get('/', 'index')->name('surveys.all.index');
                Route::get('/editar/{survey}', 'edit')->name('surveys.all.edit');
                Route::get('/ver/{survey}', 'show')->name('surveys.all.show');
                Route::post('/registrar', 'store')->name('surveys.all.store');
                Route::post('/actualizar/{survey}', 'update')->name('surveys.all.update');
                Route::delete('/eliminar/{survey}', 'destroy')->name('surveys.all.destroy');
            });

            Route::group(['prefix' => 'grupos'], function () {

                Route::controller(AdminSurveyGroupController::class)->group(function () {

                    Route::get('/{survey}', 'index')->name('surveys.all.groups.index');
                    Route::get('/ver/{group}', 'show')->name('surveys.all.groups.show');
                    Route::get('/editar/{group}', 'edit')->name('surveys.all.groups.edit');
                    Route::post('/{survey}/registrar', 'store')->name('surveys.all.groups.store');
                    Route::post('/actualizar/{group}', 'update')->name('surveys.all.groups.update');
                    Route::delete('/eliminar/{group}', 'destroy')->name('surveys.all.groups.desrtoy');
                });

                Route::group(['prefix' => 'preguntas'], function () {

                    Route::controller(AdminSurveyStatementController::class)->group(function () {

                        Route::get('/{group}', 'index')->name('surveys.all.groups.statements.index');
                        Route::get('/obtener-tipo-de-pregunta/{group}', 'getStatementType')->name('surveys.all.groups.statements.getType');
                        Route::get('/ver-pregunta/{statement}', 'show')->name('surveys.all.groups.statements.show');
                        Route::post('/{group}/registrar', 'store')->name('surveys.all.groups.statement.store');
                        Route::post('/actualizar/{statement}', 'update')->name('surveys.all.groups.statements.update');
                        Route::delete('/eliminar/{statement}', 'destroy')->name('surveys.all.groups.statement.destroy');
                    });

                    Route::group(['prefix' => 'opciones'], function () {

                        Route::controller(AdminSurveyOptionController::class)->group(function () {
                            Route::delete('/eliminar/{option}', 'destroy')->name('surveys.all.groups.statement.options.destroy');
                        });
                    });
                });
            });

            Route::group(['prefix' => 'reporte-perfil-de-usuario'], function () {

                Route::controller(ProfileSurveyReportController::class)->group(function () {

                    Route::get('/', 'index')->name('surveys.reports.profile.index');
                    Route::get('/descargar-excel-perfil-de-usuario', 'downloadExcelProfile')->name('download.excel.profile');
                });
            });

            Route::group(['prefix' => 'reporte-encuestados'], function () {

                Route::controller(SurveysReportController::class)->group(function () {

                    Route::get('/', 'index')->name('surveys.reports.index');
                    Route::get('/descargar-excel-encuestas-usuario', 'downloadExcelUserSurveys')->name('download.excel.user.surveys');
                    Route::delete('/eliminar-encuesta-de-usuario/{userSurvey}', 'destroy')->name('surveys.reports.delete');
                });
            });
        });

        // ----------- CERTIFICATIONS MODULE ------------

        Route::group(['prefix' => 'certificados'], function () {

            Route::controller(AdminCertificationsController::class)->group(function () {

                Route::get('/', 'index')->name('certifications.index');
            });


            // ----------------- PDFS ------------------

            // ------ certifications ------------

            Route::get('/generar-pdf-evaluación-de-participante/{certification}', [PdfCertificationController::class, 'examPdf'])->name('pdf.certification.exam');
        });
    });

    // -------  RUTAS DE LA INTERFAZ AULA ---------------

    Route::group(['middleware' => 'aula', 'prefix' => 'aula'], function () {

        Route::get('/inicio', [AulaHomeController::class, 'index'])->name('aula.index');

        Route::controller(AulaProfileController::class)->group(function () {

            Route::group(['prefix' => 'perfil'], function () {

                Route::get('/', 'index')->name('aula.profile.index');
                Route::get('/editar-avatar/{user}', 'editUserAvatar')->name('aula.userAvatar.edit');
                Route::post('/actualizar-avatar/{user}', 'updateUserAvatar')->name('aula.profile.updateUserAvatar');
                // Route::post('/actualizar-contraseña/{user}', 'updatePassword')->name('aula.profile.updatePassword');
            });
        });


        Route::get('/e-learning', [AulaCourseController::class, 'index'])->name('aula.course.index');

        Route::group(['middleware' => 'check.role:participants'], function () {

            Route::get('/e-learning/Alumno/{course}', [AulaCoursePartController::class, 'show'])->name('aula.course.participant.show');
            Route::get('/e-learning/Alumno/{course}/evaluaciones', [AulaEvaluationController::class, 'index'])->name('aula.course.evaluation.index');
            Route::get('/e-learning/Alumno/{certification}/pregunta/{num_question}', [QuizController::class, 'show'])->name('aula.course.quiz.show');
            Route::get('/e-learning/Alumno/{course}/curso-online', [AulaOnlineLessonController::class, 'index'])->name('aula.course.onlinelesson.index');
            Route::get('/e-learning/Alumno/clase-online/{event}', [AulaOnlineLessonController::class, 'show'])->name('aula.course.onlinelesson.show');


            Route::get('/cursos-libres', [AulaFreeCourseController::class, 'index'])->name('aula.freecourse.index');
            Route::get('/cursos-libres/categoria/{category}', [AulaFreeCourseController::class, 'showCategory'])->name('aula.freecourse.showCategory');
            Route::get('/cursos-libres/curso/{course}/{current_chapter}', [AulaFreeCourseController::class, 'showChapter'])->name('aula.freecourse.showChapter');
            Route::post('/cursos-libres/iniciar/{course}', [AulaFreeCourseController::class, 'start'])->name('aula.freecourse.start');
            Route::post('/cursos-libres/AjaxSavetime/{current_chapter}', [AulaFreeCourseController::class, 'updateProgressTime'])->name('aula.freecourse.saveTime');
            Route::patch('/cursos-libres/actualizar/{current_chapter}/{new_chapter}/{course}', [AulaFreeCourseController::class, 'updateChapter'])->name('aula.freecourse.update');


            Route::get('/mi-progreso', [AulaMyProgressController::class, 'index'])->name('aula.myprogress.index');

            Route::group(['prefix' => 'encuestas'], function () {

                Route::controller(AulaSurveysController::class)->group(function () {

                    Route::get('/', 'index')->name('aula.surveys.index');
                    Route::get('/iniciar/{userSurvey}', 'start')->name('aula.surveys.start');
                    Route::get('/{user_survey}/{num_question}', 'show')->name('aula.surveys.show');
                    Route::patch('/actualizar/{user_survey}/{group_id}', 'update')->name('aula.surveys.update');
                });
            });
        });

        Route::group(['middleware' => 'check.role:instructor'], function () {
            Route::get('/e-learning/Instructor/{course}', [AulaCourseInstController::class, 'show'])->name('aula.course.instructor.show');
        });


        Route::get('/e-learning/{course}/carpetas', [AulaFolderController::class, 'index'])->name('aula.course.folder.index');
        Route::get('/e-learning/{course}/carpeta/{folder}', [AulaFolderController::class, 'show'])->name('aula.course.folder.show');

        Route::get('/e-learning/Carpeta/descargar/{file}', [AulaFolderController::class, 'downloadFile'])->name('aula.file.download');

        Route::get('/e-learning/ajax-certification/{certification}', [AulaEvaluationController::class, 'getAjaxCertification'])->name('aula.course.ajax.certification');

        Route::post('/e-learning/{certification}', [QuizController::class, 'start'])->name('aula.course.quiz.start');
        Route::patch('/e-learning/{certification}/{exam}/pregunta/{num_question}/{key}/{evaluation}', [QuizController::class, 'update'])->name('aula.course.quiz.update');
    });
});
