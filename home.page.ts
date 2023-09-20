import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'WeatherStyle.html',
  styleUrls: ['WeatherStyle.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {
  constructor() {}
}
