import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tutor-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tutor-dashboard.component.html',
  styleUrls: ['./tutor-dashboard.component.scss']
})
export class TutorDashboardComponent implements OnInit {

  stats = {
    pending: 3,
    upcoming: 4,
    completed: 12,
    students: 25
  };

  constructor(private router: Router) {}

  ngOnInit(): void {

    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');

    // 🚫 If not logged in
    if (!token) {
      this.router.navigate(['/login']);
      return;
    }

    // 🚫 If logged in but not tutor
    if (role !== 'tutor') {
      this.router.navigate(['/become-tutor']);
      return;
    }

    // ✅ If tutor → stay here
    console.log('Tutor Dashboard Loaded Successfully');
  }

}