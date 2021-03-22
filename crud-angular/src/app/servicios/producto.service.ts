import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Producto } from '../modelo/producto.model';
import { map } from 'rxjs/operators';

@Injectable()
export class ProductoServicio {
  productosColeccion: AngularFirestoreCollection<Producto>;
  productoDoc: AngularFirestoreDocument<Producto>;
  productos: Observable<Producto[]>;
  producto!: Observable<Producto>;

  constructor(private db: AngularFirestore) {
    this.productosColeccion = db.collection('productos', (ref) =>
      ref.orderBy('nombre', 'asc')
    );
  }

  getProductos(): Observable<Producto[]> {
    //Obtener los productos
    this.productos = this.productosColeccion.snapshotChanges().pipe(
      map((cambios) => {
        return cambios.map((accion) => {
          const datos = accion.payload.doc.data() as Producto;
          datos.id = accion.payload.doc.id;
          return datos;
        });
      })
    );
    return this.productos;
  }

  agregarProducto(producto: Producto) {
    this.productosColeccion.add(producto);
  }

  getProducto(id: string): Observable<Producto> {
    this.productoDoc = this.db.doc<Producto>(`productos/${id}`);
    this.producto = this.productoDoc.snapshotChanges().pipe(
      map((accion) => {
        if (accion.payload.exists === false) {
          return null;
        } else {
          const datos = accion.payload.data() as Producto;
          datos.id = accion.payload.id;
          return datos as any;
        }
      })
    );
    return this.producto;
  }

  modificarProducto(producto: Producto){
    this.productoDoc = this.db.doc(`productos/${producto.id}`);
    this.productoDoc.update(producto);
  }
  eliminarProducto(producto: Producto){
    this.productoDoc = this.db.doc(`productos/${producto.id}`);
    this.productoDoc.delete();
  }
}
