import {
  AfterViewChecked,
  ApplicationRef,
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Hero } from './hero';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  imports: [FormsModule],
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent implements AfterViewChecked {
  @Input() hero!: Hero;

  ngAfterViewChecked(): void {
    console.count('update component details');
  }
}
