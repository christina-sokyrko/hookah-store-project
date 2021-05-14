import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {ModalModule} from "ngx-bootstrap/modal";


@NgModule({
    declarations: [DashboardComponent],
    imports: [
        CommonModule,
        CarouselModule,
        DashboardRoutingModule,
        ModalModule,
    ]
})
export class DashboardModule {
}
