import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';

@NgModule({
  	imports: [
	    CommonModule,
	    BrowserAnimationsModule,
	    NoopAnimationsModule
  	],
  	exports: [
	  	MatButtonModule, 
	 	MatCheckboxModule
 	],
  declarations: []
})
export class MaterialModule { }
