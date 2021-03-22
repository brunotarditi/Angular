import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormProductos } from 'src/app/model/formProductos.model';
import { Producto } from 'src/app/model/producto.model';
import { Rubro } from 'src/app/model/rubro.model';
import { ProductoService } from 'src/app/service/producto.service';
import { RubroService } from 'src/app/service/rubro.service';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css'],
})
export class AgregarProductoComponent implements OnInit {
  titulo: string = 'Nuevo Producto';
  rubros: Rubro[];

  guardarFormProducto = new FormGroup({
    idProducto: new FormControl(''),
    codigo: new FormControl(''),
    denominacion: new FormControl(''),
    precio: new FormControl(''),
    idRubro: new FormControl(''),
  });

  constructor(
    private productoService: ProductoService,
    private rubroService: RubroService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.cargarRubros();
  }

  guardarProducto(form: FormProductos): void {
    this.rubroService.getRubroPorId(form.idRubro).subscribe((data) => {
      let producto = {"id": 0, "codigo": form.codigo, "denominacion": form.denominacion, "precio": form.precio, "rubro": data,};
      this.productoService.create(producto).subscribe((data) => {
        if (data == null) {
          alert('No se guardó el producto.');
        } else {
          alert('Producto guardado.');
        }
        this.router.navigate(['/']);
      });
    });
  }

  cargarRubros(): void {
    this.rubroService.getAll().subscribe((rubro) => {
      this.rubros = rubro;
      console.log(rubro);
    });
  }
}
