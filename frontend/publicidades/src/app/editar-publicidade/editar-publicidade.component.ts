import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-editar-publicidade',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './editar-publicidade.component.html',
  styleUrl: './editar-publicidade.component.scss'
})
export class EditarPublicidadeComponent {
    currentComponent = 'EditPubli';
}
