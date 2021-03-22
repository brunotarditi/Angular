import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../model/producto.model';
@Injectable()
export class ProductoService {
  private url: string = 'http://localhost:8080/producto';

  constructor(private http: HttpClient) {}

  //petición para obtener todos los productos
  getAll(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.url);
  }

  //petición para obtener mediante un id rubro los productos asociados
  getRubroPorId(id: number): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.url + '/id?rubro=' + id);
  }

  //petición para crear producto
  create(producto: Producto): Observable<Producto> {
    return this.http.post<Producto>(this.url, producto);
  }

  //petición para obtener un producto
  getProductoPorId(id: number): Observable<Producto> {
    let cadena = this.url +"/"+ id;
    return this.http.get<Producto>(cadena);
  }

  //petición para actualizar producto
  update(producto:Producto): Observable<Producto> {
    return this.http.put<Producto>(this.url + '/', producto);
  }

  //petición para eliminar un producto
  delete(producto: Producto): Observable<Producto> {
    return this.http.delete<Producto>(this.url + '/' + producto.id);
  }
}
