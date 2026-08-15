import { environment } from '../../../../../environments/environment';
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface FormNotification {
  type: 'success' | 'error';
  message: string;
}

@Component({
  selector: 'app-contact-tab',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact-tab.html',
  styleUrl: './contact-tab.css',
})
export class ContactTab {
  isSubmitting = signal<boolean>(false);
  notification = signal<FormNotification | null>(null);
  private lastSubmissionTime = 0;

  async onSubmit(event: Event): Promise<void> {
    event.preventDefault();
    this.notification.set(null); // Clear previous feedback

    // Throttle submissions (10s delay)
    const now = Date.now();
    if (now - this.lastSubmissionTime < 10000) {
      this.showNotification('error', 'Please wait a few seconds before sending another message.');
      return;
    }

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    const email = (formData.get('email') as string || '').trim();
    if (!this.isValidEmail(email)) {
      this.showNotification('error', 'Please enter a valid email address.');
      return;
    }

    formData.append('access_key', environment.web3formsKey);
    this.isSubmitting.set(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        this.lastSubmissionTime = Date.now();
        this.showNotification('success', 'Thanks for reaching out! Your message has been sent successfully.');
        form.reset();
      } else {
        this.showNotification('error', data.message || 'Something went wrong while sending your message.');
      }
    } catch {
      this.showNotification('error', 'Network error. Please check your connection and try again.');
    } finally {
      this.isSubmitting.set(false);
    }
  }

  private showNotification(type: 'success' | 'error', message: string): void {
    this.notification.set({ type, message });
  }

  dismissNotification(): void {
    this.notification.set(null);
  }

  private isValidEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
}
