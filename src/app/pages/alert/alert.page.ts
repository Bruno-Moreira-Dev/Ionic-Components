import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async onAlert(): Promise<void> {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'this is an alert message.',
      buttons: ['OK']
    });

    alert.present();
  }

  async multipleAlert(): Promise<void> {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      message: 'this is multiple alert messages',
      buttons: ['OK', 'DELETE', 'CANCEL']
    });

    await alert.present();
  }

  async confirm(): Promise<void> {
    const alert = await this.alertCtrl.create({
      header: 'Confirm',
      message: 'Message <strong>text</strong>',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => { console.log('Confirm Cancel: blah'); }
        },
        {
          text: 'Okay',
          handler: () => { console.log('Confirm okay'); }
        }
      ]
    });

    await alert.present();
  }

  async prompt(): Promise<void> {
    const alert = await this.alertCtrl.create({
      header: 'Acesso Restrito!',
      inputs: [
        {
          name: 'email',
          type: 'text',
          placeholder: 'Informe seu email',
        },
        {
          name: 'senha',
          type: 'password',
          placeholder: 'Informe sua senha',
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => { console.log('Confirm Cancel'); }
        },
        {
          text: 'OK',
          handler: (form) => {
            console.log(form);
          }
        }
      ]
    });

    await alert.present();
  }
}
