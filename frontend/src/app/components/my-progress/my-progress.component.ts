import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-progress',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-progress.component.html',
  styleUrls: ['./my-progress.component.scss']
})
export class MyProgressComponent implements OnInit {

  userName: string = '';

  progress = {
    topicsTracked: 8,
    topicsMastered: 4,
    inProgress: 3,
    avgMastery: 78
  };

  subjects = [
    { name: 'Mathematics', mastery: 85 },
    { name: 'Physics', mastery: 70 },
    { name: 'Chemistry', mastery: 60 },
    { name: 'Biology', mastery: 90 }
  ];

  ngOnInit(): void {
    const storedName = localStorage.getItem('name');
    this.userName = storedName ? storedName : 'Student';
  }

  get level(): string {
    if (this.progress.avgMastery >= 85) return '🏆 Expert';
    if (this.progress.avgMastery >= 70) return '🔥 Advanced';
    if (this.progress.avgMastery >= 50) return '📘 Intermediate';
    return '🚀 Beginner';
  }

}