import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

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

  showEstimates = false;

  standardCost = 0;
  expeditedCost = 0;
  standardDelivery = '5–10 business days';
  expeditedDelivery = '3–5 business days';

  calculateEstimate() {
  const totalDimensions = this.length + this.width + this.height;

  if (this.declaredValue > 100) {
    // You can enforce a rule, log it, or just warn
    alert('Insurance is required for items valued over $100.');
    // Optionally prevent submission:
    // return;
  }

  if (
    !this.fromLocation || !this.toLocation ||
    this.length <= 0 || this.width <= 0 || this.height <= 0
  ) {
    alert('Please enter all valid shipping details.');
    return;
  }

  if (this.weight < 2 || this.weight > 50) {
    alert('Weight must be between 2 and 50 pounds.');
    return;
  }

  let baseStandard = 25;
  let baseExpedited = 75;

  // Conditional pricing based on locations
  if (this.fromLocation === 'Seattle' && this.toLocation === 'Democratic Republic of Congo') {
    baseStandard = 30;
    baseExpedited = 80;
  } else if (this.fromLocation === 'Seattle' && this.toLocation === 'Ivory Coast') {
    baseStandard = 28;
    baseExpedited = 78;
  } else if (this.fromLocation === 'Dallas-Fort Worth' && this.toLocation === 'Democratic Republic of Congo') {
    baseStandard = 26;
    baseExpedited = 76;
  } else if (this.fromLocation === 'Dallas-Fort Worth' && this.toLocation === 'Ivory Coast') {
    baseStandard = 25;
    baseExpedited = 75;
  }

  // Calculate surcharge
  const dimensionOverage = totalDimensions > 36
    ? Math.ceil((totalDimensions - 36) / 3)
    : 0;

  const weightOverage = this.weight > 10
    ? Math.ceil(this.weight - 10)
    : 0;

  const surcharge = dimensionOverage + weightOverage;

  this.standardCost = baseStandard + surcharge;
  this.expeditedCost = baseExpedited + surcharge;

  this.showEstimates = true;
}
}