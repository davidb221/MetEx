import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  private baseHref = inject(APP_BASE_HREF) || '';
  
  planeImage = this.baseHref + 'assets/plane.png';
  truckImage = this.baseHref + 'assets/truck.png';
  warehouseImage = this.baseHref + 'assets/warehouse.png';
  packageDeliveredImage = this.baseHref + 'assets/packageDelivered.png';
}
