import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tutor-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tutor-list.component.html',
  styleUrls: ['./tutor-list.component.scss']
})
export class TutorListComponent {

  searchText = '';
  selectedSubject = 'All';
  minRating = 0; // ⭐ REQUIRED for rating filter

  tutors = [
    {
      id: 1,
      name: 'Dr. Sarah Chen',
      qualification: 'MIT PhD · Mathematics',
      rating: 4.98,
      price: 65,
      subject: 'Mathematics',
      tags: ['Calculus', 'Linear Algebra'],
      image: 'https://i.pravatar.cc/150?img=32'
    },
    {
      id: 2,
      name: 'John Williams',
      qualification: 'MSc Physics',
      rating: 4.6,
      price: 50,
      subject: 'Physics',
      tags: ['Mechanics', 'Thermodynamics'],
      image: 'https://i.pravatar.cc/150?img=12'
    },
    {
      id: 3,
      name: 'Priya Sharma',
      qualification: 'M.Tech Computer Science',
      rating: 4.8,
      price: 55,
      subject: 'Computer Science',
      tags: ['Python', 'Data Structures'],
      image: 'https://i.pravatar.cc/150?img=47'
    }
  ];

  constructor(private router: Router) {}

  get filteredTutors() {
    return this.tutors.filter(tutor => {
      const matchesSearch =
        tutor.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
        tutor.tags.join(' ').toLowerCase().includes(this.searchText.toLowerCase());

      const matchesSubject =
        this.selectedSubject === 'All' || tutor.subject === this.selectedSubject;

      const matchesRating = tutor.rating >= this.minRating;

      return matchesSearch && matchesSubject && matchesRating;
    });
  }

  viewProfile(id: number) {
    this.router.navigate(['/tutor', id]);
  }

  bookSession(id: number) {
    this.router.navigate(['/booking', id]);
  }
}
