import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Configuracion } from 'src/app/modelo/configuracion.model';
import { ConfiguracionServicio } from 'src/app/servicios/configuracion.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css'],
})
export class SettingComponent implements OnInit {
  permitirRegistro = false;

  constructor(
    private router: Router,
    private configuracionServicio: ConfiguracionServicio
  ) {}

  ngOnInit() {
    this.configuracionServicio
      .getConfiguracion()
      .subscribe((configuracion?: Configuracion) => {
        if (configuracion != undefined) {
          this.permitirRegistro = configuracion.permitirRegistro;
        }    
      });
      
  }

  guardar() {
    let configuracion = { permitirRegistro: this.permitirRegistro };
    this.configuracionServicio.modificarConfiguracion(configuracion);
    this.router.navigate(['/']);
  }
}
