import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageModule } from './pages/page.module';
import { NavmenuComponent } from './pages/navmenu/navmenu.component';
@NgModule({
  declarations: [
    AppComponent, NavmenuComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, PageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
