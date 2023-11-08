import {Component, Inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MAT_DIALOG_DATA, MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {ThemePalette} from "@angular/material/core";

@Component({
  selector: 'app-confirm-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public readonly data: ConfirmDialogConfig) {
  }

}

export interface ConfirmDialogConfig {
  title?: string;
  content?: string;
  cancelLabel?: string;
  cancelColor?: ThemePalette;
  confirmLabel?: string;
  confirmColor?: ThemePalette;
}
