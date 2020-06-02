<?php

namespace Domain\Course\Actions;

use Inertia\Inertia;
use Domain\Course\Models\Course;
use Domain\Account\Models\Account;
use App\Http\Controllers\Controller;

class AccountCourseEnrollAction extends Controller
{
    
    public function __construct()
    {

    }


    public function __invoke(Account $account, Course $course)
    {
        return Inertia::render('Domain/Course/Pages/CourseEnroll', compact('account', 'course'));
    }

}
