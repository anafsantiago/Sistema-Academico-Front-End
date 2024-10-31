import { Component } from '@angular/core';
import {MatButton} from '@angular/material/button';
import {MatFormField, MatLabel} from '@angular/material/form-field';

@Component({
  selector: 'app-user-options',
  standalone: true,
  imports: [
    MatButton,
    MatLabel,
    MatFormField
  ],
  templateUrl: './user-options.component.html',
  styleUrl: './user-options.component.scss'
})
export class UserOptionsComponent {

}
