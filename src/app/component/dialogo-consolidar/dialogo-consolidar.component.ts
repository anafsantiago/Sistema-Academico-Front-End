import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {MatButton} from '@angular/material/button';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from '@angular/material/dialog';

@Component({
  selector: 'app-dialogo-consolidar',
  standalone: true,
  imports: [
    MatButton,
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatDialogTitle
  ],
  templateUrl: './dialogo-consolidar.component.html',
  styleUrl: './dialogo-consolidar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogoConsolidarComponent {
  readonly dialogRef = inject(MatDialogRef<DialogoConsolidarComponent>);

  closeDialog(): void {
    this.dialogRef.close(true);


  }
}
