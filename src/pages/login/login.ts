import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlertController, LoadingController, NavController } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';
import { UserService } from '../../services/user';

@Component({
  selector: 'page-signin',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(
    private userService: UserService,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private navCtrl: NavController) {}

  // -------------------------------------------------------------
  onLogin(form: NgForm) {

    const loading = this.loadingCtrl.create({
      content: 'Logging in...'
    });
    loading.present();

    this.userService.login(form.value.email, form.value.password)
      .take(1)
      .toPromise()
      .then(data => {
        loading.dismiss();
        this.navCtrl.push(TabsPage);
      })
      .catch(error => {
        loading.dismiss();
        const alert = this.alertCtrl.create({
          title: 'Login failed!',
          message: error.message,
          buttons: ['Ok']
        });
        alert.present();
      });
    
  }

}
