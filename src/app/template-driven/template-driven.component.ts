import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'template-driven',
  templateUrl: 'template-driven.component.html',
  styles: [`
  	input.ng-invalid {
  		border: 1px solid red;
  	}
  `]
})
export class TemplateDrivenComponent {
  user = {
    username: 'mike',
    email: '',
    password: 'adfsdf',
    gender: 'male'
  };

  genders = ['male','female'];

	onSubmit(form: NgForm) {
		console.log(form.value);
	}
}
