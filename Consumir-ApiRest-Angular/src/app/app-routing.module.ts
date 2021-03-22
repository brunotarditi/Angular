import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarProductoComponent } from './producto/agregar-producto/agregar-producto.component';
import { EditarProductoComponent } from './producto/editar-producto/editar-producto.component';
import { ListarProductoComponent } from './producto/listar-producto/listar-producto.component';
import { AgregarRubroComponent } from './rubro/agregar-rubro/agregar-rubro.component';
import { EditarRubroComponent } from './rubro/editar-rubro/editar-rubro.component';
import { ListarRubrosComponent } from './rubro/listar-rubros/listar-rubros.component';

const routes: Routes = [
  {path: '', component: ListarRubrosComponent},
  {path: 'producto/:id', component: ListarProductoComponent},
  {path: 'nuevo/rubro', component: AgregarRubroComponent},
  {path: 'editar-rubro/:id', component: EditarRubroComponent},
  {path: 'nuevo/producto', component: AgregarProductoComponent},
  {path: 'editar-producto/:id', component: EditarProductoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
