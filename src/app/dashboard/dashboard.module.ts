import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {DashboardRoutingModule} from './dashboard-routing.module';


@NgModule({
    declarations: [DashboardComponent],
    imports: [
        CommonModule,
        CarouselModule,
        DashboardRoutingModule,
    ]
})
export class DashboardModule {
}
