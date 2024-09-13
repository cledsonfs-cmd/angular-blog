import { Component } from '@angular/core';
import { dataFake } from '../../data/dataFAke';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  photoCover: string = dataFake[0].photoCover;
  title: string = dataFake[0].title;
  description: string = dataFake[0].description;

  data: any[] = dataFake;
}
