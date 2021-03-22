import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Producto } from 'src/app/modelo/producto.model';
import { ProductoServicio } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
})
export class EditProductComponent implements OnInit {
  producto: Producto = {
    nombre: '',
    marca: '',
    cantidad: 0,
    precio: 0,
  };

  id: string;

  constructor(
    private productoServicio: ProductoServicio,
    private flashMessages: FlashMessagesService, 
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.productoServicio.getProducto(this.id).subscribe(
      producto => {
        this.producto = producto;
      }
    )
  }

  guardar(f:NgForm){
    if (!f.valid) {
      this.flashMessages.show('Por favor llena el formulario correctamente.',
      {
        cssClass: 'aler-danger', timeout: 4000
      });
    }else{
      f.value.id = this.id;
      //modificar el producto
      this.productoServicio.modificarProducto(f.value);
      this.router.navigate(['/']);
    }
  }

  eliminar(){
    if (confirm('¿Seguro que desea eliminar el producto?')) {
      this.productoServicio.eliminarProducto(this.producto);
      this.router.navigate(['/']);
    }
  }
}
