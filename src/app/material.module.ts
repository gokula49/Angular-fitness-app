import { NgModule } from '@angular/core'; 
import { FlexLayoutModule } from '@angular/flex-layout';


import {MatInputModule} from '@angular/material/input'; 
import {MatButtonModule} from '@angular/material/button'; 
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';

import { ReactiveFormsModule } from '@angular/forms'; 
import {MatSelectModule} from '@angular/material/select'; 
import {MatSidenavModule} from '@angular/material/sidenav'; 
import {MatCheckboxModule} from '@angular/material/checkbox'; 
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';


import {MatTableModule} from '@angular/material/table'; 
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'; 
import {MatPaginatorModule} from '@angular/material/paginator';

import {MatSortModule} from '@angular/material/sort';
import {MatToolbarModule} from '@angular/material/toolbar'; 
@NgModule({
  imports: [ MatButtonModule,MatProgressSpinnerModule,
    MatIconModule,MatTabsModule,MatDialogModule,MatTableModule,
    MatFormFieldModule,MatListModule,MatCardModule,
    MatInputModule,MatSelectModule,MatToolbarModule,MatSortModule,
    MatDatepickerModule,AppRoutingModule,ReactiveFormsModule,MatPaginatorModule,
    MatNativeDateModule,FormsModule,FlexLayoutModule,MatSidenavModule,
    MatCheckboxModule],
  exports: [ MatButtonModule,MatProgressSpinnerModule,MatSortModule,
    MatIconModule,MatListModule,MatTabsModule,MatDialogModule,
    MatFormFieldModule,MatSidenavModule,MatCardModule,MatPaginatorModule,
    MatInputModule,MatSelectModule,MatToolbarModule,MatTableModule,
    MatDatepickerModule,AppRoutingModule,ReactiveFormsModule,
    MatNativeDateModule,FormsModule,FlexLayoutModule,
    MatCheckboxModule]
})
export class MaterialModule {}