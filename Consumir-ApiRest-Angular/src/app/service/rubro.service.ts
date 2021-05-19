import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rubro } from '../model/rubro.model';
import { environment } from '../../environments/environment';
@Injectable()
export class RubroService {
  private rubroUrl = environment.rubroUrl;
  private header: HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) {}

  //obtener todos los rubros
  getAll(): Observable<Rubro[]> {
    return this.http.get<Rubro[]>(this.rubroUrl, { headers: this.header });
  }

  //Crear rubro
  create(rubro: Rubro): Observable<Rubro> {
    return this.http.post<Rubro>(this.rubroUrl, rubro, { headers: this.header });
  }

  //obtener un rubro
  getRubroPorId(id: number): Observable<Rubro> {
    return this.http.get<Rubro>(this.rubroUrl + '/' + id, { headers: this.header });
  }

  //actualizar rubro
  update(rubro: Rubro): Observable<Rubro> {
    return this.http.put<Rubro>(this.rubroUrl + '/', rubro, { headers: this.header });
  }

  //eliminar un rubro
  delete(rubro: Rubro): Observable<Rubro> {
    return this.http.delete<Rubro>(this.rubroUrl + '/' + rubro.id, { headers: this.header });
  }
}
