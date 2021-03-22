import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rubro } from '../model/rubro.model';

@Injectable()
export class RubroService {
  private url: string = 'http://localhost:8080/rubro';
  constructor(private http: HttpClient) {}

  //obtener todos los rubros
  getAll(): Observable<Rubro[]> {
    return this.http.get<Rubro[]>(this.url);
  }

  //Crear rubro
  create(rubro: Rubro): Observable<Rubro> {
    return this.http.post<Rubro>(this.url, rubro);
  }

  //obtener un rubro
  getRubroPorId(id: number): Observable<Rubro> {
    return this.http.get<Rubro>(this.url + '/' + id);
  }

  //actualizar rubro
  update(rubro: Rubro): Observable<Rubro> {
    return this.http.put<Rubro>(this.url + '/', rubro);
  }

  //eliminar un rubro
  delete(rubro: Rubro): Observable<Rubro> {
    return this.http.delete<Rubro>(this.url + '/' + rubro.id);
  }
}
