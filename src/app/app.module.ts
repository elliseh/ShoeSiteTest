import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { PriceChangesComponent } from './price-changes/price-changes.component';
import { EventsTrainingComponent } from './events-training/events-training.component';
import { LocationsComponent } from './locations/locations.component';
import { ContactComponent } from './contact/contact.component';
import { ServiceToolsComponent } from './service-tools/service-tools.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatButtonModule, MatInputModule, MatMenuModule, MatExpansionModule, MatTabsModule } from '@angular/material';
import { SliderComponent } from './home/slider/slider.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    ProductsComponent,
    HomeComponent,
    PriceChangesComponent,
    EventsTrainingComponent,
    LocationsComponent,
    ContactComponent,
    ServiceToolsComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatMenuModule,
    MatExpansionModule,
    MatTabsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
