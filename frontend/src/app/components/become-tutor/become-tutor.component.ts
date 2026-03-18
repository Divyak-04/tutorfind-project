import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-become-tutor',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent],
  templateUrl: './become-tutor.component.html',
  styleUrls: ['./become-tutor.component.scss']
})
export class BecomeTutorComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {

    const token = localStorage.getItem('token');

    // 🚫 If not logged in → go to login
    if (!token) {
      this.router.navigate(['/login']);
    }
  }

  // ---------------- STEP CONTROL ----------------
  step: number = 1;

  nextStep() {
    this.step = 2;
  }

  prevStep() {
    this.step = 1;
  }

  // ---------------- TUTOR MODEL ----------------
  tutor: any = {
    name: '',
    headline: '',
    bio: '',
    experience: '',
    rate: '',
    subject: '',
    topic: '',
    level: 'Beginner',
    teachingStyles: [] as string[]
  };

  // ---------------- TEACHING STYLE OPTIONS ----------------
  teachingStyleOptions: string[] = [
    'Patient & Thorough',
    'Interactive',
    'Visual Learning',
    'Problem-Based',
    'Conceptual Focus',
    'Exam Preparation',
    'Hands-on Practice',
    'Discussion-Based'
  ];

  toggleStyle(style: string) {
    const index = this.tutor.teachingStyles.indexOf(style);

    if (index > -1) {
      this.tutor.teachingStyles.splice(index, 1);
    } else {
      this.tutor.teachingStyles.push(style);
    }
  }

  isSelected(style: string): boolean {
    return this.tutor.teachingStyles.includes(style);
  }

  // ---------------- SUBMIT ----------------
  submitApplication() {

    console.log('Tutor Application:', this.tutor);

    // 🔥 Convert student → tutor
    localStorage.setItem('role', 'tutor');

    alert('Congratulations! You are now a Tutor 🎉');

    // Redirect to Tutor Dashboard
    this.router.navigate(['/tutor-dashboard']);
  }

}