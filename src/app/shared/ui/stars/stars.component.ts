import {Component, Input} from '@angular/core';
import {CommonModule} from "@angular/common";
import {MatTooltipModule} from "@angular/material/tooltip";

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss'],
  standalone: true,
  imports: [CommonModule, MatTooltipModule],
})
export class StarsComponent {

  @Input()
  public count: number = 0;

  public get countIterator() {
    let value: number[] = Array(Math.floor(this.count)).fill(1);
    if (this.count % 1 >= 0.25 && this.count % 1 <= 0.75) value.push(0.5);
    return value;
  }

  get numeric(): string {
    return this.countIterator.map((value) => {
      return value as number
    }).reduce(
      (previousValue, currentValue) => {
        return previousValue + currentValue
      }
    ).toString(10);
  }

}
