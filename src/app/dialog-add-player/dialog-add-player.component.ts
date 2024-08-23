import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogModule,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-dialog-add-player',
  standalone: true,
  imports: [FormsModule, MatButtonModule, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogModule, MatDialogTitle, MatInputModule],
  templateUrl: './dialog-add-player.component.html',
  styleUrl: './dialog-add-player.component.scss'
})
export class DialogAddPlayerComponent {
  name: string = '';

  constructor(
    public dialogRef: MatDialogRef<DialogAddPlayerComponent>,
  ) { };

  onNoClick() {
    this.dialogRef.close();
  };
}
