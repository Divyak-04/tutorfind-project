import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tutor-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tutor-profile.component.html',
  styleUrls: ['./tutor-profile.component.scss']
})
export class TutorProfileComponent {
  tutorId!: number;

  // Declare tutor property
  tutor: any;  // <-- This tells Angular the property exists

  tutors = [
  {
    id: 1,
    name: 'Dr. Sarah Chen',
    subject: 'Mathematics',
    qualification: 'MIT PhD · Calculus & Linear Algebra',
    rating: 4.98,
    students: 450,
    sessions: 1200,
    price: 65,
    experience: 12,
    languages: ['English', 'Mandarin'],
    about: 'I’m a passionate mathematics educator with over 10 years of experience guiding students from high school to advanced university courses.',
    topics: [
      { name: 'Derivatives', success: '98%', helped: 247 },
      { name: 'Integrals', success: '96%', helped: 189 }
    ],
    teachingStyle: ['Patient', 'Visual Learning', 'Conceptual Focus']
  },
  {
    id: 2,
    name: 'Dr. Emily Watson',
    subject: 'Chemistry',
    qualification: 'Harvard PhD · Organic Chemistry',
    rating: 4.97,
    students: 320,
    sessions: 1100,
    price: 70,
    experience: 10,
    languages: ['English'],
    about: 'Specialist in Organic Chemistry with a focus on practical lab applications and theory understanding.',
    topics: [
      { name: 'Organic Reactions', success: '96%', helped: 203 },
      { name: 'Molecular Structures', success: '95%', helped: 167 }
    ],
    teachingStyle: ['Hands-on Practice', 'Visual Learning', 'Patient']
  },
  {
    id: 3,
    name: 'Rahul Verma',
    subject: 'Physics',
    qualification: 'IIT Delhi · NEET & JEE Expert',
    rating: 4.6,
    students: 380,
    sessions: 1000,
    price: 40,
    experience: 8,
    languages: ['English', 'Hindi'],
    about: 'Physics tutor with years of experience in helping students excel in JEE & NEET exams.',
    topics: [
      { name: 'Mechanics', success: '94%', helped: 210 },
      { name: 'Thermodynamics', success: '92%', helped: 180 }
    ],
    teachingStyle: ['Problem-Based', 'Interactive']
  },
  {
    id: 4,
    name: 'Anitha Sharma',
    subject: 'Mathematics',
    qualification: 'CBSE · Class 10 & 12',
    rating: 4.8,
    students: 290,
    sessions: 950,
    price: 30,
    experience: 6,
    languages: ['English', 'Hindi'],
    about: 'Focused on building strong fundamentals for high school students preparing for board exams.',
    topics: [
      { name: 'Algebra', success: '95%', helped: 160 },
      { name: 'Trigonometry', success: '93%', helped: 140 }
    ],
    teachingStyle: ['Beginner Friendly', 'Patient']
  },
  {
    id: 5,
    name: 'Divya Krishnan',
    subject: 'Computer Science',
    qualification: 'Software Engineer · Full Stack',
    rating: 4.9,
    students: 410,
    sessions: 1200,
    price: 55,
    experience: 7,
    languages: ['English'],
    about: 'I teach practical coding skills and real-world projects in Computer Science to make learning engaging and effective.',
    topics: [
      { name: 'Angular', success: '97%', helped: 230 },
      { name: 'JavaScript', success: '96%', helped: 200 }
    ],
    teachingStyle: ['Projects', 'Real-World Examples']
  },
  {
    id: 6,
    name: 'Karthik Iyer',
    subject: 'Data Science',
    qualification: 'AI Engineer · Python & ML',
    rating: 4.85,
    students: 360,
    sessions: 1100,
    price: 75,
    experience: 9,
    languages: ['English'],
    about: 'Data Science tutor focused on hands-on projects, career preparation, and machine learning concepts.',
    topics: [
      { name: 'Machine Learning', success: '96%', helped: 190 },
      { name: 'Python', success: '98%', helped: 240 }
    ],
    teachingStyle: ['Hands-on', 'Career Oriented']
  },
  {
    id: 7,
    name: 'Dr. Neha Kapoor',
    subject: 'Biology',
    qualification: 'AIIMS · NEET Biology',
    rating: 4.7,
    students: 300,
    sessions: 1000,
    price: 45,
    experience: 10,
    languages: ['English', 'Hindi'],
    about: 'Expert in NEET Biology, helping students understand concepts deeply and score high in exams.',
    topics: [
      { name: 'Genetics', success: '94%', helped: 170 },
      { name: 'Human Physiology', success: '93%', helped: 150 }
    ],
    teachingStyle: ['Conceptual', 'Exam Focused']
  },
  {
    id: 8,
    name: 'James Anderson',
    subject: 'English',
    qualification: 'Cambridge · IELTS Trainer',
    rating: 4.9,
    students: 500,
    sessions: 1300,
    price: 50,
    experience: 12,
    languages: ['English'],
    about: 'IELTS trainer helping students build fluency, confidence, and writing & speaking skills.',
    topics: [
      { name: 'Speaking', success: '98%', helped: 260 },
      { name: 'Writing', success: '97%', helped: 230 }
    ],
    teachingStyle: ['Fluency', 'Confidence Building']
  },
  {
    id: 9,
    name: 'Sneha Reddy',
    subject: 'Economics',
    qualification: 'Delhi University · Micro & Macro',
    rating: 4.6,
    students: 220,
    sessions: 800,
    price: 35,
    experience: 7,
    languages: ['English', 'Hindi'],
    about: 'Economics tutor with a focus on conceptual clarity, micro & macroeconomic understanding, and case studies.',
    topics: [
      { name: 'Microeconomics', success: '92%', helped: 120 },
      { name: 'Macroeconomics', success: '90%', helped: 100 }
    ],
    teachingStyle: ['Conceptual', 'Case Studies']
  },
  {
    id: 10,
    name: 'Arjun Mehta',
    subject: 'Computer Science',
    qualification: 'Backend Engineer · Java & Spring',
    rating: 4.75,
    students: 340,
    sessions: 1100,
    price: 60,
    experience: 8,
    languages: ['English'],
    about: 'Backend-focused tutor helping students master Java and Spring Boot for real-world projects.',
    topics: [
      { name: 'Java', success: '95%', helped: 200 },
      { name: 'Spring Boot', success: '94%', helped: 180 }
    ],
    teachingStyle: ['Backend', 'Projects']
  },
  {
    id: 11,
    name: 'Priya Malhotra',
    subject: 'English',
    qualification: 'Literature & Grammar Expert',
    rating: 4.65,
    students: 260,
    sessions: 900,
    price: 28,
    experience: 6,
    languages: ['English'],
    about: 'English tutor helping students improve grammar, reading comprehension, and literature knowledge.',
    topics: [
      { name: 'Grammar', success: '93%', helped: 140 },
      { name: 'Reading', success: '92%', helped: 120 }
    ],
    teachingStyle: ['Beginner Friendly']
  },
  {
    id: 12,
    name: 'Vikram Singh',
    subject: 'Physics',
    qualification: 'BITS Pilani · JEE Advanced',
    rating: 4.8,
    students: 390,
    sessions: 1050,
    price: 55,
    experience: 9,
    languages: ['English', 'Hindi'],
    about: 'Physics tutor specializing in JEE Advanced, focusing on problem-solving and exam strategies.',
    topics: [
      { name: 'Electromagnetism', success: '95%', helped: 210 },
      { name: 'Waves', success: '94%', helped: 190 }
    ],
    teachingStyle: ['Exam Strategy', 'Problem Solving']
  },
  {
    id: 13,
    name: 'Dr. Pooja Nair',
    subject: 'Chemistry',
    qualification: 'IISc · Physical Chemistry',
    rating: 4.85,
    students: 310,
    sessions: 1000,
    price: 65,
    experience: 11,
    languages: ['English'],
    about: 'Advanced chemistry tutor focusing on thermodynamics and electrochemistry for top students.',
    topics: [
      { name: 'Thermodynamics', success: '96%', helped: 180 },
      { name: 'Electrochemistry', success: '95%', helped: 160 }
    ],
    teachingStyle: ['Conceptual', 'Advanced']
  },
  {
    id: 14,
    name: 'Suresh Kumar',
    subject: 'Data Science',
    qualification: 'Analytics Lead · SQL & Power BI',
    rating: 4.7,
    students: 280,
    sessions: 950,
    price: 58,
    experience: 8,
    languages: ['English'],
    about: 'Data Science tutor with industry focus, teaching SQL, Power BI, and analytics concepts.',
    topics: [
      { name: 'SQL', success: '97%', helped: 190 },
      { name: 'Power BI', success: '96%', helped: 170 }
    ],
    teachingStyle: ['Industry Focused']
  },
  {
    id: 15,
    name: 'Meera Joshi',
    subject: 'Biology',
    qualification: 'MSC Biology · CBSE',
    rating: 4.6,
    students: 240,
    sessions: 850,
    price: 32,
    experience: 6,
    languages: ['English', 'Hindi'],
    about: 'Biology tutor helping students at school level with clear and easy explanations of key topics.',
    topics: [
      { name: 'Cell Biology', success: '91%', helped: 110 },
      { name: 'Ecology', success: '90%', helped: 100 }
    ],
    teachingStyle: ['School Level', 'Easy Explanation']
  }
];
constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.tutorId = Number(this.route.snapshot.paramMap.get('id'));
    this.tutor = this.tutors.find(t => t.id === this.tutorId);

    if (!this.tutor) {
      this.router.navigate(['/dashboard']); // fallback if tutor not found
    }
  }

  bookSession() {
    this.router.navigate(['/booking', this.tutorId]);
  }
}