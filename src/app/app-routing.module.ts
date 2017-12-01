import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { EventsTrainingComponent } from './events-training/events-training.component';
import { ContactComponent } from './contact/contact.component';
import { LocationsComponent } from './locations/locations.component';
import { PriceChangesComponent } from './price-changes/price-changes.component';
import { ServiceToolsComponent } from './service-tools/service-tools.component';
const routes: Routes = [
    { path: 'aboutus', component: AboutUsComponent },
    { path: 'products', component: ProductsComponent},
    { path: 'eventstraining', component: EventsTrainingComponent},
    { path: 'contact', component: ContactComponent},
    { path: 'locations', component: LocationsComponent},
    { path: 'pricechanges', component: PriceChangesComponent},
    { path: 'servicetools', component: ServiceToolsComponent},
    { path: '', component: HomeComponent}
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],

    exports: [RouterModule]
})
export class AppRoutingModule { }