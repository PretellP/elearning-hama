<?php

namespace App\Providers;

use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        // 'App\Model' => 'App\Policies\ModelPolicy',
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();
        //

        Gate::define('allowAdmin', function ($user) {
            return in_array($user->role, ['admin', 'super_admin']);
        });

        Gate::define('allowSupport', function ($user) {
            return in_array($user->role, ['technical_support']);
        });

        Gate::define('allowSupervisor', function ($user) {
            return in_array($user->role, ['supervisor']);
        });

        Gate::define('allowInstructor', function ($user) {
            return in_array($user->role, ['instructor']);
        });

        Gate::define('denyInstructor', function ($user) {
            return !in_array($user->role, ['instructor']);
        });

        Gate::define('denySupervisor', function ($user) {
            return !in_array($user->role, ['supervisor']);
        });
    }
}
