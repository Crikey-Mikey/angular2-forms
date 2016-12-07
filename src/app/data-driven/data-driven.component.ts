import { Component } from '@angular/core';
import { 
	FormGroup, 
	FormControl, 
	Validators, 
	FormBuilder,
	FormArray } from '@angular/forms';

import { Observable, Subscription } from 'rxjs/RX';

@Component({
    selector: 'data-driven',
    templateUrl: 'data-driven.component.html'
})
export class DataDrivenComponent {

	myForm: FormGroup;
	genders = ['male','female'];

	constructor(private formBuilder: FormBuilder) {

		// this method does require formbuilder import
		this.myForm = new FormGroup({
			'userData': new FormGroup({
				'username': new FormControl('Mike', [Validators.required, this.exampleValidator]),
				'email': new FormControl('', [
					Validators.required,
					Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
				])
			}),
			'password': new FormControl('', Validators.required),
			'gender': new FormControl('male'),
			'hobbies': new FormArray([
				new FormControl('Cooking', Validators.required, this.asyncExampleValidator)
				])
		});

		// this.myForm.valueChanges.subscribe(
		// 	(data: any) => console.log(data)
		// );

		this.myForm.statusChanges.subscribe(
			(data: any) => console.log(data)
		);

		// formbuilder method

		// this.myForm = formBuilder.group({
		// 	'userData': formBuilder.group({
		// 		'username': ['Mike', Validators.required],
		// 		'email': ['', [
		// 			Validators.required,
		// 			Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
		// 		]]
		// 	}),
		// 	'password': ['', Validators.required],
		// 	'gender': ['male'],
		// 	'hobbies': formBuilder.array([
		// 		['Cooking', Validators.required]
		// 		])
		// });
	}
    
    onSubmit() {
    	console.log(this.myForm);
    }

    onAddHobby() {
    	(<FormArray>this.myForm.get('hobbies')).push(new FormControl('', Validators.required, this.asyncExampleValidator));
    }

    exampleValidator(control: FormControl): {[s: string]: boolean} {
    	if (control.value === 'Example') {
    		return {example: true};
    	}
    	return null;
    }

    asyncExampleValidator(control: FormControl): Promise<any> | Observable<any> {
    	const promise = new Promise<any>(
    		(resolve, reject) => {
    			setTimeout( () => {
    				if (control.value === 'Example') {
    					resolve({'invalid': true});
    				} else {
    					resolve(null);
    				}
    			},1500);
    		}
		);

		return promise;
    }
}
