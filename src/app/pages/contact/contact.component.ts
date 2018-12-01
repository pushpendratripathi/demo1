import { Component} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
 
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
 
myform: FormGroup;
constructor() {
this.myform = new FormGroup({

username: new FormControl(),
phone: new FormControl(),
email: new FormControl(),
password: new FormControl(),
language: new FormControl()
});
}
}
