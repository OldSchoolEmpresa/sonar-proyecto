import { Component } from '@angular/core';

@Component({
  selector: 'app-gorras-a',
  templateUrl: './gorras-a.component.html',
  styleUrls: ['./gorras-a.component.css']
})
export class GorrasAComponent {
  mainImage = 'asset/img/gorra-a1.png';

  cambiarImagen(nuevaImagen: string) {
    this.mainImage = nuevaImagen;
  }
}
