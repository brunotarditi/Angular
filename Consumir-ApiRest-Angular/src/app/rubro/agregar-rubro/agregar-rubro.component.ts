import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Rubro } from 'src/app/model/rubro.model';
import { RubroService } from 'src/app/service/rubro.service';

@Component({
  selector: 'app-agregar-rubro',
  templateUrl: './agregar-rubro.component.html',
  styleUrls: ['./agregar-rubro.component.css'],
})
export class AgregarRubroComponent implements OnInit {
  titulo: string = 'Nuevo Rubro';

  guardarFormRubro = new FormGroup({
    idRubro: new FormControl(''),
    denominacion: new FormControl(''),
  });

  constructor(private rubroService: RubroService, private router: Router) {}

  ngOnInit(): void {}

  postForm(form: Rubro): void {
    this.rubroService
      .create(form)
      .subscribe((data) => this.router.navigate(['/']));
  }
}
