import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardComponent } from './componentes/board/board.component';
import { EditProductComponent } from './componentes/edit-product/edit-product.component';
import { LoginComponent } from './componentes/login/login.component';
import { NotFoundComponent } from './componentes/not-found/not-found.component';
import { RegisterComponent } from './componentes/register/register.component';
import { SettingComponent } from './componentes/setting/setting.component';
import { AuthGuard } from './guardianes/auth.guard';
import { ConfiguracionGuard } from './guardianes/configuracion.guard';

const routes: Routes = [
  {path: '', component: BoardComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent, canActivate: [ConfiguracionGuard]},
  {path: 'setting', component: SettingComponent, canActivate: [AuthGuard]},
  {path: 'product/edit/:id', component: EditProductComponent, canActivate: [AuthGuard]},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
