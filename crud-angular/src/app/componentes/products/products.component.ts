import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Producto } from 'src/app/modelo/producto.model';
import { ProductoServicio } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  productos: Producto[];
  producto: Producto = {
    nombre: '',
    marca: '',
    cantidad: 0,
    precio: 0,
  };

  @ViewChild("f") f: NgForm;
  @ViewChild('botonCerrar') botonCerrar: ElementRef

  constructor(
    private productoServicio: ProductoServicio,
    private flashMessages: FlashMessagesService
  ) {}

  ngOnInit(): void {
    this.productoServicio.getProductos().subscribe((productos) => {
      this.productos = productos;
    });
  }
  getSaldoTotal() {
    let saldoTotal: number = 0;

    if (this.productos) {
      this.productos.forEach((producto) => {
        saldoTotal += producto.cantidad * producto.precio;
      });
    }

    return saldoTotal;
  }

  agregar(f:NgForm) {
      if (!f.valid) {
        this.flashMessages.show('Por favor llena el formulario correctamente', {
          cssClass: 'alert-danger',
          timeout: 4000,
        });
      }else{
        this.productoServicio.agregarProducto(f.value);
        this.f.resetForm();
        this.cerrarModal();
      }
  }

  private cerrarModal(){
    this.botonCerrar.nativeElement.click();
  }
}
