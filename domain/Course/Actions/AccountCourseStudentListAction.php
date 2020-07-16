<?php

namespace Domain\Course\Actions;

use Inertia\Inertia;
use Domain\Course\Models\Course;
use Domain\Account\Models\Account;
use App\Http\Controllers\Controller;

class AccountCourseStudentListAction extends Controller
{

    public function __construct()
    {
        $this->middleware('auth');
        $this->middleware('can:viewStudents,course');

    }

    public function __invoke(Account $account, Course $course)
    {
        $students = $course->students;

        return Inertia::render('Domain/Course/Pages/StudentList', compact('account', 'course', 'students'));
    }

}
