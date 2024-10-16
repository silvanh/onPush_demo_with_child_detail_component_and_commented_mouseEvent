import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Hero } from './hero';
import { HeroComponent } from './hero.component';

@Component({
  standalone: true,
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  imports: [HeroComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroDetailComponent {
  @Input() hero!: Hero;
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
