<?php

namespace Domain\Account\Actions;

use Inertia\Inertia;
use Illuminate\Http\Request;
use Domain\Account\Models\Account;
use App\Http\Controllers\Controller;

class AccountShowAction extends Controller
{

    public function __construct()
    {

    }

    public function __invoke(Request $request, Account $account)
    {
        $courses = $account->courses()->with('users.profile');

        $current_courses = $account->courses()->with('users.profile')->latest()->paginate(10);
        $past_courses =  $account->courses()->with('users.profile')->whereDate('end_at', '<', now())->latest()->get();
        $instructors = $account->instructors;

        return Inertia::render('Domain/Account/Pages/AccountShow', compact('account', 'current_courses',  'past_courses', 'instructors'));
    }

}
