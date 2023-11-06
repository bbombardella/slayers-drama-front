import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-microsoft-social-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './microsoft-social-button.component.html',
  styleUrls: ['./microsoft-social-button.component.scss']
})
export class MicrosoftSocialButtonComponent {

  private readonly config: Record<MicrosoftSocialButtonType, string> = {
    'signin': 'Se connecter avec Microsoft',
    'signup': 'S\'inscrire avec Microsoft',
    'attach': 'Attacher son compte Microsoft',
    'detach': 'Détacher son compte Microsoft',
  }

  @Input() type: MicrosoftSocialButtonType = 'signin';

  get label() {
    return this.config[this.type];
  }
}

export type MicrosoftSocialButtonType = 'signin' | 'signup' | 'attach' | 'detach';
