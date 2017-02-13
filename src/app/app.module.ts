import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JsonpModule } from '@angular/http';
import { NgbdAlertBasic } from './alert-basic';
import { NgbdAlertSelfclosing } from './alert-selfclosing';
import { AmchartComponent } from './components-composite/amcharts/barchart/amchart.component';
import { PiechartComponent } from './piechart.component';
import { AmChartsDirective } from "amcharts3-angular2/amcharts.directive";
import { Observable } from  "rxjs/Rx";

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { NgbdModalComponent, NgbdModalContent } from './components-composite/bootstrap/modal/modal.component';
import { NgbdDropdownBasic } from './components-composite/bootstrap/dropdown/dropdown.component';
import { TabsComponent } from './components-composite/bootstrap/tabs/tabs.component';
import { CarouselComponent } from './components-composite/bootstrap/carousel/carousel.component';
import { ThreeBounceComponent } from './components-composite/spinner/three-bounce';
import { AboutUsComponent } from './components-composite/about-us/about-us.component';

// import { LoadingContainer } from './components-composite/loading-container';
// import {SpinnerComponent} from './components-composite/spinner/spinner'; 
// import * as spinner from 'ng2-spin-kit/app/spinner/three-bounce';

const appRoutes: Routes = [
    { path: 'about-us', component: AboutUsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NgbdAlertBasic,
    NgbdAlertSelfclosing,
    AmChartsDirective,
    AmchartComponent,
    PiechartComponent,
    NgbdModalComponent,
    NgbdModalContent,
    NgbdDropdownBasic,
    TabsComponent,
    CarouselComponent,
    ThreeBounceComponent,
    AboutUsComponent
  ],

  entryComponents: [
    NgbdModalContent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    JsonpModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
