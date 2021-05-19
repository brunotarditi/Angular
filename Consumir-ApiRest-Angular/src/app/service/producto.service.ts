import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../model/producto.model';
import { environment } from '../../environments/environment';
@Injectable()
export class ProductoService {
  private productoUrl = environment.productoUrl;
  private header: HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) {}

  //petición para obtener todos los productos
  getAll(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.productoUrl, { headers: this.header });
  }

  //petición para obtener mediante un id rubro los productos asociados
  getRubroPorId(id: number): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.productoUrl + '/id?rubro=' + id, { headers: this.header });
  }

  //petición para crear producto
  create(producto: Producto): Observable<Producto> {
    return this.http.post<Producto>(this.productoUrl, producto, { headers: this.header });
  }

  //petición para obtener un producto
  getProductoPorId(id: number): Observable<Producto> {
    return this.http.get<Producto>(this.productoUrl +"/"+ id, { headers: this.header });
  }

  //petición para actualizar producto
  update(producto:Producto): Observable<Producto> {
    return this.http.put<Producto>(this.productoUrl + '/', producto, { headers: this.header });
  }

  //petición para eliminar un producto
  delete(producto: Producto): Observable<Producto> {
    return this.http.delete<Producto>(this.productoUrl + '/' + producto.id, { headers: this.header });
  }
}
