import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {environment} from '../environments/environment';
import { AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule, SETTINGS} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {FlashMessagesModule} from 'angular2-flash-messages';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { BoardComponent } from './componentes/board/board.component';
import { ProductsComponent } from './componentes/products/products.component';
import { EditProductComponent } from './componentes/edit-product/edit-product.component';
import { RegisterComponent } from './componentes/register/register.component';
import { SettingComponent } from './componentes/setting/setting.component';
import { NotFoundComponent } from './componentes/not-found/not-found.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { LoginComponent } from './componentes/login/login.component';
import { ProductoServicio } from './servicios/producto.service';
import { LoginService } from './servicios/login.service';
import { AuthGuard } from './guardianes/auth.guard';
import { ConfiguracionServicio } from './servicios/configuracion.service';
import { ConfiguracionGuard } from './guardianes/configuracion.guard';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BoardComponent,
    ProductsComponent,
    EditProductComponent,
    RegisterComponent,
    SettingComponent,
    NotFoundComponent,
    FooterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firestore, 'control-productos'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
    FlashMessagesModule.forRoot()
  ],
  providers: [ProductoServicio, LoginService, AuthGuard, ConfiguracionServicio, {provide: SETTINGS, useValue:[]}, ConfiguracionGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
