import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { lowercaseValidator } from '@app/shared/validators/uppercase';

@Component({
  selector: 'app-todo-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  public form: FormGroup = this.formBuilder.group({ 
    task: ['', [
      Validators.required,
      Validators.minLength(15),
      Validators.maxLength(120),
      lowercaseValidator()
    ]],
  });;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  public submitForm(): void {
    if (this.form.valid) {
      console.log('Form is valid')
    } else {
      console.error('Form is not valid');
    }
  }

}

