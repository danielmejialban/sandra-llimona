import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;

  constructor(private builder: FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.getForm(this.builder);
  }

  getForm(builder: FormBuilder) : FormGroup{
    return builder.group({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      comments: new FormControl('', Validators.required),
    })
  }

}
