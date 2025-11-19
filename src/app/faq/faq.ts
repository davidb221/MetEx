import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-faq',
  imports: [CommonModule, FormsModule],
  templateUrl: './faq.html',
  styleUrl: './faq.css'
})

export class Faq {
  faqs = [
    {
      question: 'What areas in Africa do you ship to?',
      answer: 'We currently ship to the Democratic Republic of Congo and Ivory Coast. We intend to expand to more countries.',
      open: false
    },
    {
      question: 'How long does shipping take?',
      answer: 'Shipping typically takes 5–10 business days depending on destination and customs clearance.',
      open: false
    },
    {
      question: 'Do you offer pickup services in Dallas-Fort Worth?',
      answer: 'Absolutely. We provide pickup across the DFW metroplex for an additional charge. You can schedule a pickup by contacting customer service through phone or email.',
      open: false
    },
    {
      question: 'What items are prohibited from being shipped?',
      answer: 'We do not allow the shipment of firearms, hazardous materials, perishables, or restricted items as defined by international customs regulations.',
      open: false
    },
    {
      question: 'Do you offer insurance on shipments?',
      answer: 'Yes, you can purchase optional insurance during checkout to protect your package in case of loss or damage. Items with a declared value of $100 or more will be required to purchase insurance.',
      open: false
    },
    {
      question: 'How can I contact customer support?',
      answer: 'You can reach us via phone, email, or by using the contact form on our website. Our support team is available Monday through Saturday.',
      open: false
    }
  ];

  toggleFaq(index: number) {
    this.faqs[index].open = !this.faqs[index].open;
  }

  success = false;
  error = false;

  onSubmit(form: NgForm) {
    if (form.invalid) return;

    const formData = new FormData();
    for (const key in form.value) {
      formData.append(key, form.value[key]);
    }
    formData.append('access_key', '1788301e-86ea-4937-8d7e-fda0abf9d77a');
    formData.append('from_name', 'MetEx Contact Form');

    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    })
    .then(response => {
      if (response.ok) {
        this.success = true;
        this.error = false;
        form.reset();
      } else {
        throw new Error('Submission failed');
      }
    })
    .catch(() => {
      this.success = false;
      this.error = true;
    });

    // Hide message after 5s
    setTimeout(() => {
      this.success = false;
      this.error = false;
    }, 5000);
  }
}
