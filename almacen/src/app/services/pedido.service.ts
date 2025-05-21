import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PedidoService {
  private apiUrl = 'http://localhost/empleado/api/detalle_pedidos.php';

  constructor(private http: HttpClient) {}

  guardarDetalle(pedidoData: any): Observable<{ mensaje: string }> {
    return this.http.post<{ mensaje: string }>(this.apiUrl, pedidoData);
  }
}
