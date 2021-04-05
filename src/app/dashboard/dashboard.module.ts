import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RouterModule, Routes} from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';

const routes: Routes = [
 { path: '', pathMatch: 'full', component: DashboardComponent }
];

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    CarouselModule,
  ]
})
export class DashboardModule { }
