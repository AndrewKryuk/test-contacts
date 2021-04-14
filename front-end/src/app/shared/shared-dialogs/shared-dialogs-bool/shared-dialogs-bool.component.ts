import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

export interface DialogData {
  text: string;
  id: string;
}

@Component({
  selector: 'app-shared-dialogs-bool',
  templateUrl: './shared-dialogs-bool.component.html',
  styleUrls: ['./shared-dialogs-bool.component.scss']
})
export class SharedDialogsBoolComponent {

  constructor(
    public dialogRef: MatDialogRef<SharedDialogsBoolComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
