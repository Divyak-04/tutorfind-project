import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth';

import { firebaseConfig } from '../../firebase.config';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  email = '';
  password = '';

  app = initializeApp(firebaseConfig);
  auth = getAuth(this.app);
  provider = new GoogleAuthProvider();

  constructor(private router: Router) {}

  // ---------------- NORMAL LOGIN ----------------
  login() {

    if (!this.email || !this.password) {
      alert('Please enter email and password');
      return;
    }

    const fakeToken = 'user-token-123';
    const role = 'student';

    // ✅ Extract name from email
    const nameFromEmail = this.email.split('@')[0];

    localStorage.setItem('token', fakeToken);
    localStorage.setItem('role', role);
    localStorage.setItem('email', this.email);
    localStorage.setItem('name', nameFromEmail);

    console.log('User Logged In');
    console.log('Name:', nameFromEmail);
    console.log('Role:', role);

    this.router.navigate(['/home']);
  }

  // ---------------- GOOGLE LOGIN ----------------
  loginWithGoogle() {

    signInWithPopup(this.auth, this.provider)
      .then((result) => {

        const user = result.user;

        localStorage.setItem('token', user.uid);
        localStorage.setItem('role', 'student');
        localStorage.setItem('email', user.email || '');

        // ✅ Store display name from Google
        localStorage.setItem('name', user.displayName || 'Student');

        console.log('Google Login Success');
        console.log('Name:', user.displayName);
        console.log('Role: student');

        this.router.navigate(['/home']);
      })
      .catch((error) => {
        console.error('Google Login Error:', error);
        alert('Google login failed');
      });
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }
}