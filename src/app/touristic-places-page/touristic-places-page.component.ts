import { Component } from '@angular/core';

@Component({
  selector: 'app-touristic-places-page',
  standalone: true,
  imports: [],
  templateUrl: './touristic-places-page.component.html',
  styleUrl: './touristic-places-page.component.css'
})
export class TouristicPlacesPageComponent {
  imagenNantes: string = 'assets/images/Ile_de_Nantes.jfif';
  imagenParis: string = 'assets/images/paris_37bc088a.jpg';
  imagenBruselas: string = 'assets/images/Turismo-en-Bruselas-1030x687.jpg';
}
