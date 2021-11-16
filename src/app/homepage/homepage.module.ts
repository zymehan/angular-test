import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatNativeDateModule } from '@angular/material/core';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage.component';
import { LogoComponent } from './header/logo.component';
import { HfooterComponent } from './carPerformance/hfooter.component';
import { CarDetailComponent } from './carDetail/carDetail.component';
import { IconModule } from '../ui-kit/icon/icon.module';
import { PipesModule } from '../ui-kit/pipes/pipes.module';
import { CommonUiKitModule } from '../ui-kit/common-ui-kit/common-ui-kit.module';
import { NgImageSliderModule } from 'ng-image-slider';
import {IvyCarouselModule} from 'angular-responsive-carousel';

@NgModule({
  declarations: [HomepageComponent, LogoComponent, HfooterComponent,CarDetailComponent],
  imports: [
    NgImageSliderModule,
    IvyCarouselModule,
    CommonModule,
    MatDialogModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatRadioModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatFormFieldModule,
    HomepageRoutingModule,
    IconModule,
    PipesModule,
    FormsModule,
    ReactiveFormsModule,
    CommonUiKitModule,
  ],
  providers: [],
  bootstrap: [HomepageComponent]
})
export class HomepageModule { }
