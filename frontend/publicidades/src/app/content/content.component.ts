import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {
    @Output() componentSelected = new EventEmitter<string>();
  
    selectComponent(componentName: string) {
      this.componentSelected.emit(componentName);
    }

  menuAberto = false;

  editar() {
    console.log('Editar clicado');
    this.menuAberto = false;
  }

  encerrar() {
    console.log('Encerrar clicado');
    this.menuAberto = false;
  }

}
