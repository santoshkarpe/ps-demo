import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/user-setting';

@Component({
  selector: 'app-user-seting-form',
  templateUrl: './user-seting-form.component.html',
  styleUrls: ['./user-seting-form.component.css']
})
export class UserSetingFormComponent implements OnInit {

  originalUserSettings : UserSettings = {
    name: 'Santosh',
    emailOffers: true,
    interfaceStyle: 'dark',
    subscriptionType: 'Annual',
    notes: 'here are some notes...'
  };
  
  userSettings : UserSettings = { ...this.originalUserSettings };
  
  constructor() { }

  ngOnInit() {
  }

}
