import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListarRubrosComponent } from './rubro/listar-rubros/listar-rubros.component';
import { AgregarRubroComponent } from './rubro/agregar-rubro/agregar-rubro.component';
import { AgregarProductoComponent } from './producto/agregar-producto/agregar-producto.component';
import { ListarProductoComponent } from './producto/listar-producto/listar-producto.component';
import { RubroService } from './service/rubro.service';
import { ProductoService } from './service/producto.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditarRubroComponent } from './rubro/editar-rubro/editar-rubro.component';
import { EditarProductoComponent } from './producto/editar-producto/editar-producto.component';
import { LoginComponent } from './auth/login.component';
import { RegistroComponent } from './auth/registro.component';
import { IndexComponent } from './index/index.component';  
import { interceptorProvider } from './interceptors/prod-interceptor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListarRubrosComponent,
    AgregarRubroComponent,
    AgregarProductoComponent,
    ListarProductoComponent,
    EditarRubroComponent,
    EditarProductoComponent,
    LoginComponent,
    RegistroComponent,
    IndexComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [RubroService, ProductoService, interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
