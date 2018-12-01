import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/config.service';
@Component({
  selector: 'app-nh-slider-section',
  templateUrl: './nh-slider-section.component.html',
  styleUrls: ['./nh-slider-section.component.css']
})
export class NhSliderSectionComponent implements OnInit {
  flatsides ={};
  constructor(private config: ConfigService) { }

  ngOnInit() {
    this.flatsides = this.getflatsides();
  }
  getflatsides()
  {
    return this.config.getConfig().flatsides;
  }


}
