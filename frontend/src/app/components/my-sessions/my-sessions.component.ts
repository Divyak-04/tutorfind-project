import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-sessions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-sessions.component.html',
  styleUrls: ['./my-sessions.component.scss']
})
export class MySessionsComponent implements OnInit {

  userName: string = '';
  filter: string = 'all';

  sessions: any[] = [];

  ngOnInit(): void {

    const storedName = localStorage.getItem('name');
    this.userName = storedName ? storedName : 'Student';

    this.sessions = [
      {
        subject: 'Mathematics - Derivatives',
        tutor: 'DIVYA K',
        date: 'Sat, Feb 28',
        time: '12:00 PM',
        duration: '60 min',
        status: 'Pending',
        price: 50,
        progress: 0
      },
      {
        subject: 'Physics - Mechanics',
        tutor: 'Rahul Verma',
        date: '30 Jan 2026',
        time: '11:00 AM',
        duration: '45 min',
        status: 'Approved',
        price: 60,
        progress: 70
      },
      {
        subject: 'Chemistry - Organic Basics',
        tutor: 'Anita Rao',
        date: '15 Jan 2026',
        time: '02:00 PM',
        duration: '60 min',
        status: 'Completed',
        price: 55,
        progress: 100
      }
    ];
  }

  get filteredSessions() {
    if (this.filter === 'all') return this.sessions;
    return this.sessions.filter(
      session => session.status === this.filter
    );
  }

  get achievement() {
    const completed = this.sessions.filter(
      s => s.status === 'Completed'
    ).length;

    if (completed >= 5) return '🥇 Gold Master';
    if (completed >= 3) return '🥈 Silver Scholar';
    if (completed >= 1) return '🥉 Bronze Learner';
    return 'New Learner 🚀';
  }

  rebook(tutor: string) {
    alert(`Redirecting to book again with ${tutor}`);
  }

}