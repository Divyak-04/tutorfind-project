import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.scss']
})
export class StudentDashboardComponent implements OnInit {

  userName: string = '';

  stats = {
    totalSessions: 5,
    learningHours: 12,
    topicsMastered: 3,
    upcomingSessions: 2
  };

  ngOnInit(): void {

    const storedName = localStorage.getItem('name');

    if (storedName) {
      this.userName = storedName;
    } else {
      this.userName = 'Student';
    }

  }

}