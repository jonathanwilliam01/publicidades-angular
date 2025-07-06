import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from "./content/content.component";
import { NovaPublicidadeComponent } from './nova-publicidade/nova-publicidade.component';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { EditarPublicidadeComponent } from './editar-publicidade/editar-publicidade.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, ContentComponent, NovaPublicidadeComponent, EditarPublicidadeComponent, ButtonModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'publicidades';

  currentComponent: string = '';

  setComponent(componentName: string) {
    this.currentComponent = componentName;
  }
}
