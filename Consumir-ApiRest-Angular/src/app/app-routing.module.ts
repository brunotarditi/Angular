import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login.component';
import { RegistroComponent } from './auth/registro.component';
import { IndexComponent } from './index/index.component';
import { ProdGuardService } from './guard/prod-guard.service';
import { AgregarProductoComponent } from './producto/agregar-producto/agregar-producto.component';
import { EditarProductoComponent } from './producto/editar-producto/editar-producto.component';
import { ListarProductoComponent } from './producto/listar-producto/listar-producto.component';
import { AgregarRubroComponent } from './rubro/agregar-rubro/agregar-rubro.component';
import { EditarRubroComponent } from './rubro/editar-rubro/editar-rubro.component';
import { ListarRubrosComponent } from './rubro/listar-rubros/listar-rubros.component';
import { LoginGuard } from './guard/login.guard';

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'login', component: LoginComponent, canActivate: [LoginGuard]},
  {path: 'registro', component: RegistroComponent, canActivate: [LoginGuard]},
  {path: 'rubros', component: ListarRubrosComponent, canActivate: [ProdGuardService], data: { expectedRol: ['admin', 'user']}},
  {path: 'producto/:id', component: ListarProductoComponent, canActivate: [ProdGuardService], data: { expectedRol: ['admin', 'user']}},
  {path: 'nuevo/rubro', component: AgregarRubroComponent, canActivate: [ProdGuardService], data: { expectedRol: ['admin']}},
  {path: 'editar-rubro/:id', component: EditarRubroComponent, canActivate: [ProdGuardService], data: { expectedRol: ['admin']}},
  {path: 'nuevo/producto', component: AgregarProductoComponent, canActivate: [ProdGuardService], data: { expectedRol: ['admin']}},
  {path: 'editar-producto/:id', component: EditarProductoComponent, canActivate: [ProdGuardService], data: { expectedRol: ['admin']}},
  {path: '**', redirectTo:'', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
