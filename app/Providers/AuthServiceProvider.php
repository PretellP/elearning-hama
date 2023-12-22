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

        Gate::define('allowSecurity', function ($user) {
            return in_array($user->role, ['security_manager', 'security_manager_admin']);
        });

        Gate::define('allowInstructor', function ($user) {
            return in_array($user->role, ['instructor']);
        });

        Gate::define('denyInstructor', function ($user) {
            return !in_array($user->role, ['instructor']);
        });

        Gate::define('denySecurity', function ($user) {
            return !in_array($user->role, ['security_manager', 'security_manager_admin']);
        });

        Gate::define('allCompany', function ($user) {
            return in_array($user->role, ['companies']);
        });
        Gate::define('denyCompany', function ($user) {
            return !in_array($user->role, ['companies']);
        });
    }
}
