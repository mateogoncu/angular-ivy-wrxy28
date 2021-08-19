import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObserverConsumerComponent } from './observer-consumer/observer-consumer.component';

const routes: Routes = [{ path: '**', component: ObserverConsumerComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
