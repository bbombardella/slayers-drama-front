import {Component, Input, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class StarsComponent {

  @Input()
  public count: number = 0;

  public get countIterator(){
    let value: number[] = Array(Math.floor(this.count)).fill(1);
    if(this.count %1 > 0) value.push(0.5);
    return value;
  }

}
