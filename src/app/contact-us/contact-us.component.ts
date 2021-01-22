import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit,ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactType, Feedback } from '../shared/feedback';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  feedbackForm: FormGroup;
  feedback: Feedback;
  contactType = ContactType;
  @ViewChild('fform') feedbackFormDirective;

  constructor(private fb: FormBuilder) { this.createForm(); }

  ngOnInit(): void {

  }

  contact = { username: '', number: '', message: '' };
  contactForm;

  getData(val) {
    console.log(val);
  }
  clearForm() {

  }
  createForm() {
    this.feedbackForm = this.fb.group({
      firstname: ['',Validators.required],
      lastname: ['',Validators.required],
      telnum: [0,Validators.required],
      email: ['',Validators.required],
      agree: [false,Validators.required],
      contacttype: ['None',Validators.required],
      message: ['',Validators.required]
    })
  }

  onSubmit() {
    this.feedback = this.feedbackForm.value;
    console.log(this.feedback);
    this.feedbackForm.reset({
      firstname: '',
      lastname: '',
      telnum: '',
      email: '',
      agree:false,
      contacttype: 'None',
      message: ''
    });
    this.feedbackFormDirective.resetForm();
  }


}
