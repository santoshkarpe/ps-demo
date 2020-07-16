import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/user-setting';
import { NgForm, NgModel } from '@angular/forms';
import { DataService } from '../data/data.service';

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
  postError = false;
  postErrorMessage = '';
  
  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  onBlur(field : NgModel) {
    console.log('in onBlur: ', field.valid);
  }

  onSubmit(myForm: NgForm) {
    console.log('In onSubmit - '+ myForm.valid );
    if (myForm.valid) {
      this.dataService.postUserSettingsForm(this.userSettings).subscribe(
        result => console.log('success: ', result),
        //error => console.log('error: ', error),
        error => this.onHttpError(error)
      );
    }
    else {
      this.postError = true;
      this.postErrorMessage = "Please fix the above errors"
    }
  }

  onHttpError(errorResponse: any) {
    console.log('error: ', errorResponse);
    this.postError = true;
    this.postErrorMessage = errorResponse.error.errorMessage;
  }

}
