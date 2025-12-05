import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  private location = inject(Location);
  baseHref = this.location.prepareExternalUrl('');
  
  planeImage = this.baseHref + 'assets/plane.png';
  warehouseImage = this.baseHref + 'assets/warehouse.png';
  packageDeliveredImage = this.baseHref + 'assets/packageDelivered.png';
}
