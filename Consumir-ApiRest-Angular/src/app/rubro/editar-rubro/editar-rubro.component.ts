import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Rubro } from 'src/app/model/rubro.model';
import { RubroService } from 'src/app/service/rubro.service';

@Component({
  selector: 'app-editar-rubro',
  templateUrl: './editar-rubro.component.html',
  styleUrls: ['./editar-rubro.component.css'],
})
export class EditarRubroComponent implements OnInit {
  titulo: string = 'Editar Rubro';
  id: number;
  rubro: Rubro;
  editarFormRubro = new FormGroup({
    idRubro: new FormControl(''),
    denominacion: new FormControl(''),
  });

  constructor(
    private rubroService: RubroService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.rubroService.getRubroPorId(this.id).subscribe((rubro) => {
      this.rubro = rubro;
      this.editarFormRubro.setValue({
        'idRubro': this.rubro.id,
        'denominacion': this.rubro.denominacion,
      });
    });
  }

  putForm(form: Rubro): void {
    this.rubroService.update(form).subscribe((data) => {
      this.rubro = data;
      this.router.navigate(['/']);
    });
  }
}
