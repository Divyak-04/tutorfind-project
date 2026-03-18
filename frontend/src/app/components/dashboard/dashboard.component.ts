import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  constructor(private router: Router) {}

  searchText = '';
  selectedSubject = 'All';
  minRating = 0;

  subjects = [
    'All',
    'Mathematics',
    'Physics',
    'Chemistry',
    'Computer Science',
    'Biology',
    'English',
    'Economics',
    'Data Science'
  ];

  tutors = [
    {
      id: 1,
      name: 'Dr. Sarah Chen',
      subject: 'Mathematics',
      qualification: 'MIT PhD · Calculus & Linear Algebra',
      rating: 4.98,
      students: 450,
      price: 65,
      topics: [
        { name: 'Derivatives', success: '98%', helped: 247 },
        { name: 'Integrals', success: '96%', helped: 189 }
      ],
      tags: ['Patient & Thorough', 'Visual Learning', 'Conceptual Focus']
    },
    {
        id: 2,
      name: 'Dr. Emily Watson',
      subject: 'Chemistry',
      qualification: 'Harvard PhD · Organic Chemistry',
      rating: 4.97,
      students: 320,
      price: 70,
      topics: [
        { name: 'Organic Reactions', success: '96%', helped: 203 },
        { name: 'Molecular Structures', success: '95%', helped: 167 }
      ],
      tags: ['Hands-on Practice', 'Visual Learning', 'Patient']
    },
    {
        id: 3,
      name: 'Rahul Verma',
      subject: 'Physics',
      qualification: 'IIT Delhi · NEET & JEE Expert',
      rating: 4.6,
      students: 380,
      price: 40,
      topics: [
        { name: 'Mechanics', success: '94%', helped: 210 },
        { name: 'Thermodynamics', success: '92%', helped: 180 }
      ],
      tags: ['Problem-Based', 'Interactive']
    },
    {
        id: 4,
      name: 'Anitha Sharma',
      subject: 'Mathematics',
      qualification: 'CBSE · Class 10 & 12',
      rating: 4.8,
      students: 290,
      price: 30,
      topics: [
        { name: 'Algebra', success: '95%', helped: 160 },
        { name: 'Trigonometry', success: '93%', helped: 140 }
      ],
      tags: ['Beginner Friendly', 'Patient']
    },
    {
        id: 5,
      name: 'Divya Krishnan',
      subject: 'Computer Science',
      qualification: 'Software Engineer · Full Stack',
      rating: 4.9,
      students: 410,
      price: 55,
      topics: [
        { name: 'Angular', success: '97%', helped: 230 },
        { name: 'JavaScript', success: '96%', helped: 200 }
      ],
      tags: ['Projects', 'Real-World Examples']
    },
    {
        id: 6,
      name: 'Karthik Iyer',
      subject: 'Data Science',
      qualification: 'AI Engineer · Python & ML',
      rating: 4.85,
      students: 360,
      price: 75,
      topics: [
        { name: 'Machine Learning', success: '96%', helped: 190 },
        { name: 'Python', success: '98%', helped: 240 }
      ],
      tags: ['Hands-on', 'Career Oriented']
    },
    {
        id: 7,
      name: 'Dr. Neha Kapoor',
      subject: 'Biology',
      qualification: 'AIIMS · NEET Biology',
      rating: 4.7,
      students: 300,
      price: 45,
      topics: [
        { name: 'Genetics', success: '94%', helped: 170 },
        { name: 'Human Physiology', success: '93%', helped: 150 }
      ],
      tags: ['Conceptual', 'Exam Focused']
    },
    {
        id: 8,
      name: 'James Anderson',
      subject: 'English',
      qualification: 'Cambridge · IELTS Trainer',
      rating: 4.9,
      students: 500,
      price: 50,
      topics: [
        { name: 'Speaking', success: '98%', helped: 260 },
        { name: 'Writing', success: '97%', helped: 230 }
      ],
      tags: ['Fluency', 'Confidence Building']
    },
    {
        id: 9,
      name: 'Sneha Reddy',
      subject: 'Economics',
      qualification: 'Delhi University · Micro & Macro',
      rating: 4.6,
      students: 220,
      price: 35,
      topics: [
        { name: 'Microeconomics', success: '92%', helped: 120 },
        { name: 'Macroeconomics', success: '90%', helped: 100 }
      ],
      tags: ['Conceptual', 'Case Studies']
    },
    {
        id: 10,
      name: 'Arjun Mehta',
      subject: 'Computer Science',
      qualification: 'Backend Engineer · Java & Spring',
      rating: 4.75,
      students: 340,
      price: 60,
      topics: [
        { name: 'Java', success: '95%', helped: 200 },
        { name: 'Spring Boot', success: '94%', helped: 180 }
      ],
      tags: ['Backend', 'Projects']
    },
    {
        id: 11,
      name: 'Priya Malhotra',
      subject: 'English',
      qualification: 'Literature & Grammar Expert',
      rating: 4.65,
      students: 260,
      price: 28,
      topics: [
        { name: 'Grammar', success: '93%', helped: 140 },
        { name: 'Reading', success: '92%', helped: 120 }
      ],
      tags: ['Beginner Friendly']
    },
    {
        id: 12,
      name: 'Vikram Singh',
      subject: 'Physics',
      qualification: 'BITS Pilani · JEE Advanced',
      rating: 4.8,
      students: 390,
      price: 55,
      topics: [
        { name: 'Electromagnetism', success: '95%', helped: 210 },
        { name: 'Waves', success: '94%', helped: 190 }
      ],
      tags: ['Exam Strategy', 'Problem Solving']
    },
    {
        id: 13,
      name: 'Dr. Pooja Nair',
      subject: 'Chemistry',
      qualification: 'IISc · Physical Chemistry',
      rating: 4.85,
      students: 310,
      price: 65,
      topics: [
        { name: 'Thermodynamics', success: '96%', helped: 180 },
        { name: 'Electrochemistry', success: '95%', helped: 160 }
      ],
      tags: ['Conceptual', 'Advanced']
    },
    {
        id: 14,
      name: 'Suresh Kumar',
      subject: 'Data Science',
      qualification: 'Analytics Lead · SQL & Power BI',
      rating: 4.7,
      students: 280,
      price: 58,
      topics: [
        { name: 'SQL', success: '97%', helped: 190 },
        { name: 'Power BI', success: '96%', helped: 170 }
      ],
      tags: ['Industry Focused']
    },
    {
        id: 15,
      name: 'Meera Joshi',
      subject: 'Biology',
      qualification: 'MSC Biology · CBSE',
      rating: 4.6,
      students: 240,
      price: 32,
      topics: [
        { name: 'Cell Biology', success: '91%', helped: 110 },
        { name: 'Ecology', success: '90%', helped: 100 }
      ],
      tags: ['School Level', 'Easy Explanation']
    }
  ];
get filteredTutors() {
    return this.tutors.filter(tutor => {

      const matchesSubject =
        this.selectedSubject === 'All' ||
        tutor.subject === this.selectedSubject;

      const matchesSearch =
        tutor.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
        tutor.subject.toLowerCase().includes(this.searchText.toLowerCase());

      const matchesRating =
        tutor.rating >= this.minRating;

      return matchesSubject && matchesSearch && matchesRating;
    });
  }

  viewProfile(tutorId: number) {
    this.router.navigate(['/tutor', tutorId]);
  }

  bookSession(tutorId: number) {
    this.router.navigate(['/booking', tutorId]);
  }
}
