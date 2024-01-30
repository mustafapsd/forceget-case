import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'new-offer',
    pathMatch: 'full',
    loadChildren: () =>
      import('./pages/offer/offer.module').then((m) => m.OfferModule),
  },
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () =>
      import('./pages/offer-list/offer-list.module').then(
        (m) => m.OfferListModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
