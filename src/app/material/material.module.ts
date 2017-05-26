import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MdButtonModule, MdCheckboxModule, MdSliderModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MdButtonModule,
    MdCheckboxModule,
     MdSliderModule
  ],
  exports: [
    MdButtonModule,
    MdCheckboxModule,
     MdSliderModule
    ],
  declarations: []
})
export class MaterialModule { }
