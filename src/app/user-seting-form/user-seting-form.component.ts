import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/user-setting';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-seting-form',
  templateUrl: './user-seting-form.component.html',
  styleUrls: ['./user-seting-form.component.css']
})
export class UserSetingFormComponent implements OnInit {

  originalUserSettings : UserSettings = {
    name: null,
    emailOffers: null,
    interfaceStyle: null,
    subscriptionType: null,
    notes: null
  };
  
  userSettings : UserSettings = { ...this.originalUserSettings };
  
  constructor() { }

  ngOnInit() {
  }

  onSubmit(myForm: NgForm) {
    console.log('In onSubmit - '+ myForm.valid )

  }

}
