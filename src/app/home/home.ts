import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import planeImage from '../../assets/plane.png';
import warehouseImage from '../../assets/warehouse.png';
import packageDeliveredImage from '../../assets/packageDelivered.png';

@Component({
  selector: 'app-home',
  imports: [RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  planeImage = planeImage;
  warehouseImage = warehouseImage;
  packageDeliveredImage = packageDeliveredImage;
}
