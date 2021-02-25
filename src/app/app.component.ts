import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: 'home',
      icon: 'home'
    },
    {
      title: 'Navegação',
      url: 'navegacao',
      icon: 'paper-plane'
    },
    {
      title: 'Botões',
      url: 'buttons',
      icon: 'construct'
    },
    {
      title: 'Alert',
      url: 'alert',
      icon: 'warning'
    },
    {
      title: 'Action Sheet',
      url: 'action-sheet',
      icon: 'logo-microsoft'
    },
    {
      title: 'Badge',
      url: 'badge',
      icon: 'medal'
    },
    {
      title: 'Card',
      url: 'card',
      icon: 'card'
    }
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
