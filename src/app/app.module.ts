import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TaskModuleComponent } from './task-module/task-module.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TaskModuleComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Ng2SearchPipeModule,
    Ng2OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
