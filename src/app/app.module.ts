import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {TableModule} from 'primeng/table';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { SlideMenuModule } from 'primeng/slidemenu';
import { SliderModule } from 'primeng/slider';
@NgModule({
  imports: 
  [ 
    BrowserModule, 
    FormsModule,
    TableModule, 
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  declarations: 
  [ 
    AppComponent
  ],
  bootstrap:    
  [ 
    AppComponent 
  ]
})
export class AppModule { }
