import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from '../material-module';
import { GameDetailsComponent } from './game-details/game-details.component';
import { GameComponent } from './game/game.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ScrollingModule } from '@angular/cdk/scrolling';


@NgModule({
  declarations: [
    AppComponent,
    GameDetailsComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ScrollingModule,
    BrowserAnimationsModule,
    DemoMaterialModule
  ],
  providers: [],
  entryComponents: [GameDetailsComponent, GameComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
