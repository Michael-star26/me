import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-contact-tab',
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './contact-tab.html',
  styleUrl: './contact-tab.css',
})
export class ContactTab {
  onSubmit(event: Event): void {
    event.preventDefault();

    // Grab form data or integrate your backend service here
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');

    console.log('Form Submitted:', { name, email, subject, message });

    // Optional: Reset form after submission
    alert('Thank you for reaching out! Your message has been noted.');
    form.reset();
  }
}
