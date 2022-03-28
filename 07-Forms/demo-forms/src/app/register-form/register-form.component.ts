import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit, AfterViewInit {

  buildings: string[] = [
    'Designer',
    'Developer',
    'QA'
  ]

  @ViewChild('registration') registration!: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // console.log(this.registration.value);
  }

  onSubmit(): void{
    console.log(this.registration.value);

  }
}
