import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Necessário para Angular Material
import { MatToolbarModule } from '@angular/material/toolbar'; // Importe o módulo

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // Importante para a animação do Angular Material
    MatToolbarModule, // Adicione o MatToolbarModule aqui
  ],
  providers: [],
  bootstrap: [],
})
export class AppModule {}
