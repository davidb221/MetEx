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

  showEstimates = false;

  standardCost = 0;
  expeditedCost = 0;
  standardDelivery = '10–14 business days';
  expeditedDelivery = '5–7 business days';

  calculateEstimate() {
    const totalDimensions = this.length + this.width + this.height;

    if (
      !this.fromLocation || !this.toLocation ||
      this.length <= 0 || this.width <= 0 || this.height <= 0 || this.weight <= 0
    ) {
      alert('Please enter all valid shipping details.');
      return;
    }

    // Base prices
    const baseStandard = 25;
    const baseExpedited = 75;

    // Surcharge Logic (dimension/weight)
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