import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/model/producto.model';
import { Rubro } from 'src/app/model/rubro.model';
import { ProductoService } from 'src/app/service/producto.service';
import { RubroService } from 'src/app/service/rubro.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  styleUrls: ['./listar-producto.component.css'],
})
export class ListarProductoComponent implements OnInit {
  titulo: string = 'Lista de productos';
  productos: Producto[];
  rubro: Rubro;
  id: number;
  isAdmin = false;
  constructor(
    private productoService: ProductoService,
    private route: ActivatedRoute,
    private rubroService: RubroService,
    private router: Router,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    this.cargarRubro();
    this.cargarProductos();
    this.isAdmin = this.tokenService.isAdmin();
  }

  delete(producto: Producto): void {
    this.id = this.route.snapshot.params['id'];
    this.productoService
      .delete(producto)
      .subscribe(
        (data) =>
          (this.productos = this.productos.filter((p) => p !== producto))
      );
    this.router.navigate(['/producto/' + this.id]);
  }

  cargarProductos(): void {
    
    this.productoService
      .getRubroPorId(this.id)
      .subscribe((producto) => (this.productos = producto));
  }

  cargarRubro(): void {
    this.id = this.route.snapshot.params['id'];
    this.rubroService.getRubroPorId(this.id).subscribe((rubro) => {
      this.rubro = rubro;
    });
  }

}
