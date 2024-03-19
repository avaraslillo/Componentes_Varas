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
  imagenAmsterdam: string = 'assets/images/amsterdam.jpg';
  imagenLondres: string = 'assets/images/52372-londres-tower-bridge.jpeg';
  imagenEdimburgo: string = 'assets/images/edimburgo.jpg';
  imagenDublin: string = 'assets/images/dublin.jpeg';
  imagenRoma: string = 'assets/images/roma.jpeg';
  imagenFlorencia: string = 'assets/images/que-ver-florencia-lugares-imprescindibles.jpg';
  imagenMilan: string = 'assets/images/que-ver-en-milan.jpeg';
  imagenVenecia: string = 'assets/images/Historia-de-Venecia-scaled.jpg';
  imagenCalgary: string = 'assets/images/Calgary.jpeg';
  imagenToronto: string = 'assets/images/HEADER-TORONTO_2.jpg';
}
