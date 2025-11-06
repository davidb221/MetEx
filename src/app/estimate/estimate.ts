import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-estimate',
  imports: [CommonModule, FormsModule],
  templateUrl: './estimate.html',
  styleUrl: './estimate.css'
})

export class Estimate {
  fromLocation = '';
  toLocation = '';
  length = 0;
  width = 0;
  height = 0;
  weight = 0;
  declaredValue = 0;
  email = "";

  success = false;
  error = false;

  onSubmit(form: NgForm) {
    if (form.invalid) {
      alert('Please fill out all required fields.');
      return;
    }

    const formData = new FormData();
    formData.append('access_key', '1788301e-86ea-4937-8d7e-fda0abf9d77a');
    formData.append('from_name', 'MetEx Quote Request');
    formData.append('subject', 'New Quote Request from MetEx Website');

    formData.append('From Location', this.fromLocation);
    formData.append('To Location', this.toLocation);
    formData.append('Length (in)', this.length.toString());
    formData.append('Width (in)', this.width.toString());
    formData.append('Height (in)', this.height.toString());
    formData.append('Weight (lbs)', this.weight.toString());
    formData.append('Declared Value (USD)', this.declaredValue.toString());
    formData.append('Email', this.email);
    formData.append('replyto', this.email);

    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    })
      .then(response => {
        if (response.ok) {
          this.success = true;
          form.resetForm();
        } else {
          this.error = true;
        }
      })
      .catch(() => this.error = true)
      .finally(() => {
        setTimeout(() => {
          this.success = false;
          this.error = false;
        }, 4000);
      });
  }
}