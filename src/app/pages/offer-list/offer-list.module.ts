import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { OfferListComponent } from './offer-list.component';

@NgModule({
  declarations: [OfferListComponent],
  imports: [
    CommonModule,
    NzButtonModule,
    NzIconModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: OfferListComponent,
      },
    ]),
  ],
})
export class OfferListModule {}
