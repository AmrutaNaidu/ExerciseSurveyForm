import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-survey-form-reactive',
  templateUrl: 'survey-form-reactive.component.html',
  styles: []
})
export class SurveyFormReactiveComponent implements OnInit {
  constructor() { }

  localStorageData: any = []
  selectedForm = [];
  submitted = false;
  selectedState;
  masterList = [];
  theName = ""
  theEmail = ""
  theAge = ""
  date = ""
  states = [
    {name: "New Jersey", abb: "NJ"},
    {name: "New York", abb: "NY"}, 
    {name: "Delaware", abb: "DE"}, 
    {name: "Penslyvania", abb: "PA"} 
  ];
  surveyForm = new FormGroup ({
    theName: new FormControl('', Validators.required),
    theEmail: new FormControl('', Validators.required),
    theAge: new FormControl('', Validators.required),
    selectedState: new FormControl(this.states[2])
  })

  ngOnInit(): void {
    this.localStorageData = JSON.parse(localStorage.getItem("userdata"))
    if(this.localStorageData != null) {
      this.masterList = JSON.parse(localStorage.getItem("userdata"))
    }
  }  

  submitForm() {
    this.submitted = true;
    let requestData = this.surveyForm.value

    alert(JSON.stringify(requestData))

    this.masterList.push(JSON.stringify(requestData));

    if(this.localStorageData && this.localStorageData.length != 0) {
      localStorage.setItem("userdata",JSON.stringify(this.masterList))
    } else { 
      localStorage.setItem("userdata",JSON.stringify(this.masterList))
    }
  } 
  saveForm() { 
    alert(this.masterList);
    if(this.submitted == true) {
      localStorage.setItem("userdata", JSON.stringify(this.masterList))
    }
  }
}
