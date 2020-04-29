import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SurveyFormComponent } from './survey-form/survey-form.component';
import { DisplayResultsComponent } from './display-results/display-results.component';
import { SurveyFormReactiveComponent } from './survey-form-reactive/survey-form-reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    SurveyFormComponent,
    DisplayResultsComponent,
    SurveyFormReactiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
