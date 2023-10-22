import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-credentials-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './credentials-container.component.html',
  styleUrls: ['./credentials-container.component.scss']
})
export class CredentialsContainerComponent {
  @Input({required: true}) label: string | undefined;
}
