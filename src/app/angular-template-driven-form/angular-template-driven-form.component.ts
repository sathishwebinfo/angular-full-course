import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-angular-template-driven-form',
  templateUrl: './angular-template-driven-form.component.html',
  styleUrls: ['./angular-template-driven-form.component.scss']
})
export class AngularTemplateDrivenFormComponent implements OnInit {

  constructor() {

  }
  ngOnInit(): void {

  }
  onSubmit(appForm: NgForm) {
    console.log(appForm.value);

  }

  getValue(appForm: FormControl){
    console.log(appForm);
    
  }

}
