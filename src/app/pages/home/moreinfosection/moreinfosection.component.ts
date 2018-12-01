import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/config.service';

@Component({
  selector: 'app-moreinfosection',
  templateUrl: './moreinfosection.component.html',
  styleUrls: ['./moreinfosection.component.css']
})
export class MoreinfosectionComponent implements OnInit {
feedbacks ={};
  constructor(private config: ConfigService) { }

  ngOnInit() {this.feedbacks = this.getFeeback();
  }
  getFeeback()
  {
    return this.config.getConfig().feedbacks;
  }

}
