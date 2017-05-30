import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MdInputModule } from '@angular/material';

const materialrModules = [ MdInputModule ];

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    materialrModules],
  exports: materialrModules,
  declarations: []
})
export class MaterialModule { }
