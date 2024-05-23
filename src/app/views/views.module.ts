import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ViewsRoutingModule } from './views-routing.module';
import { ViewsHomeComponentComponent } from './views-home-component/views-home-component.component';
import { StatisticsComponent } from './statistics/statistics.component';


@NgModule({
  declarations: [
    ViewsHomeComponentComponent,
    StatisticsComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    ViewsRoutingModule
  ]
})
export class ViewsModule { }
