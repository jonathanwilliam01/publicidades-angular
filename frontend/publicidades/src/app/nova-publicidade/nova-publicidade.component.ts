import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nova-publicidade',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nova-publicidade.component.html',
  styleUrl: './nova-publicidade.component.scss'
})
export class NovaPublicidadeComponent {
  currentComponent = 'NovaPubli';

}
