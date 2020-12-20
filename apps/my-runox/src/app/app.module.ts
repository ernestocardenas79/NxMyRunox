import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {LobbyModule } from './lobby/lobby.module';
import { TestModule } from './test/test.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, LobbyModule, TestModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
