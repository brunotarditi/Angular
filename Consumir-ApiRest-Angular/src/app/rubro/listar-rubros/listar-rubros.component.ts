import { Component, OnInit } from '@angular/core';
import { Rubro } from 'src/app/model/rubro.model';
import { RubroService } from 'src/app/service/rubro.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-listar-rubros',
  templateUrl: './listar-rubros.component.html',
  styleUrls: ['./listar-rubros.component.css'],
})
export class ListarRubrosComponent implements OnInit {
  titulo: string = 'Lista de rubros';
  rubros: Rubro[];
  isAdmin = false;

  constructor(private rubroService: RubroService, private tokenService: TokenService) {}
  ngOnInit(): void {
    this.cargarRubros();
    this.isAdmin = this.tokenService.isAdmin();
  }

  delete(rubro: Rubro): void {
    this.rubroService
      .delete(rubro)
      .subscribe(
        (data) => (this.rubros = this.rubros.filter((r) => r !== rubro))
      );
  }

  cargarRubros(): void {
    this.rubroService.getAll().subscribe((rubro) => {
      (this.rubros = rubro);
    });
  }
}
