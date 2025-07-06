import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Output() componentSelected = new EventEmitter<string>();

  selectComponent(componentName: string) {
    this.componentSelected.emit(componentName);
  }
}
