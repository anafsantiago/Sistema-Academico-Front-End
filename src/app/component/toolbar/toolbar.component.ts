import { Component, computed, signal } from '@angular/core';
import { Router } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [MatToolbarModule, CommonModule, MatButtonModule, MatIconModule, MatSidenavModule, MatListModule, FormsModule, RouterModule],
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  collapsed = signal(false);

  private hoveredElement: string | null = null; // Armazena qual botão está hover

  constructor(private router: Router) {}

  sidenavWidth = computed(() => this.collapsed() ? '138px' : '320px');

  // Metodo para controlar o hover
  onHover(isHovering: boolean, element: string) {
    this.hoveredElement = isHovering ? element : null;
  }

  isHovered(element: string): boolean {
    return this.hoveredElement === element;
  }

  // Método para logout e redirecionamento
  sair(): void {
    localStorage.clear();
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }
}
