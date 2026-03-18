import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  userName = '';
  menuOpen = false;
  role: string | null = null;

  constructor(private router: Router) {}

  ngOnInit(): void {

    // ✅ Get role
    this.role = localStorage.getItem('role');

    // ✅ Get name directly from localStorage
    const storedName = localStorage.getItem('name');

    if (storedName) {
      this.userName = storedName;
    } else {
      this.userName = 'User';
    }

  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  goToHowItWorks() {

    if (this.router.url !== '/home') {
      this.router.navigate(['/home']).then(() => {
        setTimeout(() => this.scrollToSection(), 100);
      });
    } else {
      this.scrollToSection();
    }

    this.menuOpen = false;
  }

  private scrollToSection() {
    const section = document.querySelector('.process-section');
    section?.scrollIntoView({ behavior: 'smooth' });
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
    this.menuOpen = false;
  }

}