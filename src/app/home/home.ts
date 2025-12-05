import { Component, inject } from '@angular/core';
import { RouterModule} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  private location = inject(Location);
  
  planeImage = this.getAssetPath('assets/plane.png');
  truckImage = this.getAssetPath('assets/truck.png');
  warehouseImage = this.getAssetPath('assets/warehouse.png');
  packageDeliveredImage = this.getAssetPath('assets/packageDelivered.png');
  
  private getAssetPath(path: string): string {
    return this.location.prepareExternalUrl(path);
  }
}
