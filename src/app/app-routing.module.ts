import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicesComponent } from './pages/services/services.component';
import { AboutComponent } from './pages/about/about.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  {path:'Home',component:HomeComponent},
  {path:'About',component:AboutComponent},
  {path:'Services',component:ServicesComponent},
  {path:'Portifolio',component:PortfolioComponent},
  {path:'Contact',component:ContactComponent},
  { path: '404', component:NotfoundComponent },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
