import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicesComponent } from './services.module';

const servicesRoutes: Routes = [
	{
	path: 'services',
    component: ServicesComponent,
	}
];

@NgModule({
  imports: [RouterModule.forChild(servicesRoutes)],
  exports: [RouterModule],
  providers: []
})
export class ServicesModule { }
