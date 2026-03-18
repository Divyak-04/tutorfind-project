import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule, FormsModule], // <-- add these
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'] // <-- fixed typo
})
export class BookingComponent implements OnInit {
  tutorId!: number;
  step = 1;

  // Booking info
  selectedDate: string = '';
  selectedTime: string = '';
  duration: number = 60;
  subject: string = '';
  topic: string = '';
  notes: string = '';

  // Dummy tutor data for sidebar
  tutor = {
    name: 'Dr. Sarah Chen',
    rating: 4.98,
    hourlyRate: 50,
    avatar: 'https://i.pravatar.cc/100'
  };

  timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM',
    '05:00 PM', '06:00 PM', '07:00 PM', '08:00 PM'
  ];

  subjects = [
    'Mathematics', 'Physics', 'Chemistry', 'Computer Science',
    'Biology', 'English', 'Economics', 'Data Science'
  ];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.tutorId = Number(this.route.snapshot.paramMap.get('id'));
  }

  next() {
    if (this.step < 3) this.step++;
  }

  back() {
    if (this.step > 1) this.step--;
  }

  get totalPrice(): number {
    return (this.tutor.hourlyRate * (this.duration / 60));
  }
 goBackToProfile() {
  this.router.navigate(['/tutor', this.tutorId]);
}

goToDashboard() {
  this.router.navigate(['/dashboard']);
}

confirmBooking() {

  console.log({
    tutorId: this.tutorId,
    subject: this.subject,
    topic: this.topic,
    notes: this.notes,
    date: this.selectedDate,
    time: this.selectedTime,
    duration: this.duration,
    total: this.totalPrice
  });

  // ✅ SHOW confirmation page FIRST
  this.step = 3;

  // ⏳ THEN redirect after delay
  setTimeout(() => {
    this.router.navigate(['/dashboard']);
  }, 3500);
}

  
}
