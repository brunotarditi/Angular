import {
  AngularFirestoreDocument,
  AngularFirestore,
} from '@angular/fire/firestore';
import { Configuracion } from '../modelo/configuracion.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class ConfiguracionServicio {
  configuracionDoc: AngularFirestoreDocument<Configuracion>;
  configuracion: Observable<Configuracion | undefined>;
  //id unico de la coleccion de configuracion
  id = 'hIZTJjEcFW1mp0OzxjTy';

  constructor(private db: AngularFirestore) {}

  getConfiguracion(): Observable<Configuracion | undefined> {
    //Obtener la configuracion
    this.configuracionDoc = this.db.doc<Configuracion>(
      `configuracion/${this.id}`
    );
    this.configuracion = this.configuracionDoc.valueChanges();
    return this.configuracion as any;
  }

  modificarConfiguracion(configuracion: Configuracion) {
    this.configuracionDoc = this.db.doc<Configuracion>(
      `configuracion/${this.id}`
    );
    this.configuracionDoc.update(configuracion);
  }
}
