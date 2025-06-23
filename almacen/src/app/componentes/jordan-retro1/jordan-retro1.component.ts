import { Component } from '@angular/core';

@Component({
  selector: 'app-jordan-retro1',
  templateUrl: './jordan-retro1.component.html',
  standalone: true,
  imports: [ThumbnailsComponent]
})
export class JordanRetro1Component {
  imagenesJordan = [
    'asset/img/Jordan retro 1 negro.jpeg',
    'asset/img/Jordan retro 1 azul.jpeg',
    'asset/img/Jordan retro 1 verde.jpeg'
  ];

  imagenSeleccionada = this.imagenesJordan[0];

  cambiarImagen(imagen: string): void {
    this.imagenSeleccionada = imagen;
  }
}
