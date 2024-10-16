import { Component } from '@angular/core';

import { HeroListComponent } from './hero-list.component';
import { SalesTaxComponent } from './sales-tax.component';

@Component({
  standalone: true,
  selector: 'app-root',
  template: `
    <h1>Architecture Example</h1>
    <app-hero-list></app-hero-list>
    <app-sales-tax></app-sales-tax>
  `,
  imports: [HeroListComponent, SalesTaxComponent]
})
export class AppComponent { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/