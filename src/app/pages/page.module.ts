import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule } from '@angular/router';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { SociallinksComponent } from './navmenu/sociallinks/sociallinks.component';
import { MoreinfosectionComponent } from './home/moreinfosection/moreinfosection.component';
import { NhSliderSectionComponent } from './home/nh-slider-section/nh-slider-section.component';
import { NhBottomSectionComponent } from './home/nh-bottom-section/nh-bottom-section.component';
import { FooterComponent } from './footer/footer.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { QuickLinksComponent } from './quick-links/quick-links.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [ServicesComponent, FooterComponent, NhSliderSectionComponent, AboutComponent,PortfolioComponent, ContactComponent, HomeComponent, SociallinksComponent, MoreinfosectionComponent, NhBottomSectionComponent, NotfoundComponent, QuickLinksComponent],
  imports: [
    CommonModule,CarouselModule.forRoot(), FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],

  exports: [RouterModule,FooterComponent,QuickLinksComponent,NhBottomSectionComponent,SociallinksComponent,MoreinfosectionComponent,NhSliderSectionComponent
   
  ],
})
export class PageModule { }
