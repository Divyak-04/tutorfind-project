import { Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

// Main Landing Page
import { MainDashboardComponent } from './components/main-dashboard/main-dashboard.component';

// Tutor Section
import { DashboardComponent } from './components/dashboard/dashboard.component'; // Tutor List Page
import { TutorProfileComponent } from './components/tutor-profile/tutor-profile.component';
import { BookingComponent } from './components/booking/booking.component';

// Become Tutor
import { BecomeTutorComponent } from './components/become-tutor/become-tutor.component';

// ✅ NEW Student & Tutor Dashboards
import { StudentDashboardComponent } from './components/student-dashboard/student-dashboard.component';
import { MySessionsComponent } from './components/my-sessions/my-sessions.component';
import { MyProgressComponent } from './components/my-progress/my-progress.component';
import { TutorDashboardComponent } from './components/tutor-dashboard/tutor-dashboard.component';

export const routes: Routes = [

  // ---------------- DEFAULT ----------------
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  // ---------------- AUTH ----------------
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  // ---------------- MAIN LANDING ----------------
  { path: 'home', component: MainDashboardComponent },

  // ---------------- TUTOR LIST SECTION ----------------
  { path: 'tutors', component: DashboardComponent },  
  { path: 'tutor/:id', component: TutorProfileComponent },

  // ---------------- BOOKING ----------------
  { path: 'booking/:id', component: BookingComponent },
  { path: 'dashboard', component: MainDashboardComponent },

  // ---------------- STUDENT SECTION ----------------
  { path: 'student-dashboard', component: StudentDashboardComponent },
  { path: 'student-sessions', component: MySessionsComponent },
  { path: 'student-progress', component: MyProgressComponent },

  // ---------------- TUTOR SECTION (ROLE BASED) ----------------
  { path: 'tutor-dashboard', component: TutorDashboardComponent },

  // ---------------- BECOME A TUTOR ----------------
  { path: 'become-tutor', component: BecomeTutorComponent },

  // ---------------- FALLBACK ----------------
  { path: '**', redirectTo: 'login' }

];