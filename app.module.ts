import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// http interceptor
import { httpInterceptorProviders  } from './http-interceptors/http-interceptors/index';
// MenunavComponent
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './components/input/input.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenunavComponent } from './components/menunav/menunav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { LoginpageComponent } from './loginpage/loginpage.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    MenunavComponent,
    LoginpageComponent,
  ],
  imports: [
    BrowserModule,
AppRoutingModule,
FormsModule,
BrowserAnimationsModule,
LayoutModule,
MatToolbarModule,
MatButtonModule,
MatSidenavModule,
MatIconModule,
MatListModule,
HttpClientModule
  ],
  providers: [
httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
