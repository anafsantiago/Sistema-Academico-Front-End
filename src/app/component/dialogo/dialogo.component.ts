import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialog,
  MatDialogRef,
  MatDialogModule,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';


// Este é o conteúdo do diálogo
@Component({
  selector: 'app-dialog',
  templateUrl: './dialogo.component.html',
  styleUrls: ['./dialogo.component.scss'], // certifique-se de que existe este arquivo ou remova a linha se não precisar de estilo específico
  standalone: true,
  imports: [MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogoComponent {
  readonly dialogRef = inject(MatDialogRef<DialogoComponent>);

  closeDialog(): void {
    this.dialogRef.close(true);


  }
}


