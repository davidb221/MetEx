import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  imports: [CommonModule],
  templateUrl: './faq.html',
  styleUrl: './faq.css'
})
export class Faq {
  faqs = [
    {
      question: 'What areas in Africa do you ship to?',
      answer: 'We currently ship to several major cities across West and East Africa including Lagos, Accra, Nairobi, and more. Reach out for specific destinations.',
      open: false
    },
    {
      question: 'How long does shipping take?',
      answer: 'Shipping typically takes 7–14 business days depending on destination and customs clearance.',
      open: false
    },
    {
      question: 'Can I track my package?',
      answer: 'Yes! Every package is assigned a tracking number once shipped. You can track it via our website or by contacting customer service.',
      open: false
    },
    {
      question: 'Do you offer pickup services in Dallas-Fort Worth?',
      answer: 'Absolutely. We provide pickup across the DFW metroplex. You can schedule a pickup during checkout.',
      open: false
    },
    {
      question: 'What items are prohibited from being shipped?',
      answer: 'We do not allow the shipment of firearms, hazardous materials, perishables, or restricted items as defined by international customs regulations.',
      open: false
    },
    {
      question: 'Do you offer insurance on shipments?',
      answer: 'Yes, you can purchase optional insurance during checkout to protect your package in case of loss or damage.',
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
}
