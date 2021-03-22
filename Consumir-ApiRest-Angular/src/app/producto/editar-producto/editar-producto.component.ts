import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormProductos } from 'src/app/model/formProductos.model';
import { Producto } from 'src/app/model/producto.model';
import { Rubro } from 'src/app/model/rubro.model';
import { ProductoService } from 'src/app/service/producto.service';
import { RubroService } from 'src/app/service/rubro.service';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css'],
})
export class EditarProductoComponent implements OnInit {
  titulo: string = 'Editar Producto';
  producto: Producto;
  rubros: Rubro[];
  id: number;

  editarFormProducto = new FormGroup({
    codigo: new FormControl(''),
    denominacion: new FormControl(''),
    precio: new FormControl(''),
    idRubro: new FormControl(''),
  });

  constructor(
    private productoService: ProductoService,
    private rubroService: RubroService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    
    this.id = this.route.snapshot.params['id'];
    this.productoService.getProductoPorId(this.id).subscribe((data) => {
      this.producto = data; 
      this.editarFormProducto.setValue({
        'codigo': this.producto.codigo,
        'denominacion': this.producto.denominacion,
        'precio': this.producto.precio,
        'idRubro': this.producto.rubro.id,
      });
    });
    
    this.cargarRubros();
  }

  putForm(form: FormProductos): void {
    this.rubroService.getRubroPorId(form.idRubro).subscribe((data) => {
      let producto = {"id": this.producto.id, "codigo": form.codigo, "denominacion": form.denominacion, "precio": form.precio, "rubro": data,};
      this.productoService.update(producto).subscribe((data) => {
        if (data == null) {
          alert('No se actualizó el producto.');
        } else {
          alert('Producto actualizado.');
        }
        this.router.navigate(['/']);
      });
    });
  }

  cargarRubros(): void {
    
    this.rubroService.getAll().subscribe((rubro) => {
      this.rubros = rubro;
    });
  }

}
