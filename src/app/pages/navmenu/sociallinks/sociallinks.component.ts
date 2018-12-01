import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/config.service';
@Component({
  selector: 'app-sociallinks',
  templateUrl: './sociallinks.component.html',
  styleUrls: ['./sociallinks.component.css']
})
export class SociallinksComponent implements OnInit {
  socialsites ={};
  constructor(private config: ConfigService) { }

  ngOnInit() {
    this.socialsites = this.getSocialsites();
  }

  getSocialsites()
  {
    return this.config.getConfig().social;
  }

}
