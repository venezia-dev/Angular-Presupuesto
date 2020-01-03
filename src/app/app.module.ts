//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
//Components
import { AppComponent } from './app.component';
import { IngresoComponent } from './components/ingreso/ingreso.component';
import { FormComponent } from './components/form/form.component';
import { HeaderComponent } from './components/header/header.component';
import { EgresoComponent } from './components/egreso/egreso.component';
import { FooterComponent } from './components/footer/footer.component';
//Services
import { EgresoService } from './components/egreso/egreso.service';
import { IngresoService } from './components/ingreso/ingreso.service';

@NgModule({
  declarations: [
    AppComponent,
    IngresoComponent,
    EgresoComponent,
    FormComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule
  ],
  providers: [IngresoService,EgresoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
