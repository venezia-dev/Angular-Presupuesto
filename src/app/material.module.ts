import { NgModule } from '@angular/core'; 

import {
  MatButtonModule, 
  MatCheckboxModule,
  MatCardModule,
  MatSelectModule,
  MatInputModule,
  MatIconModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule, 
    MatCheckboxModule,
    MatCardModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule
  ],
  exports: [
    MatButtonModule, 
    MatCheckboxModule,
    MatCardModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule
  ]
  
})

export class MaterialModule { }
