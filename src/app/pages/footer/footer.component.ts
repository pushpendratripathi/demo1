import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/config.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  copyright = {

    "font-size" :"14px"
  }

  link =
  { "padding":"120"

  }
  footer = {};
  constructor(private config:ConfigService) { }

  ngOnInit() {
    this.footer = this.getFooter();
  }

  getFooter()
  {return this.config.getConfig().footer;

  }

}
