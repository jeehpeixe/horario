import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HorarioComponent } from './horario/horario.component';
import { HoraFormatadaPipe } from './hora-formatada.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HorarioComponent,
    HoraFormatadaPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
