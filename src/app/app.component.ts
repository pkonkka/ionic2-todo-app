import { Component, ViewChild } from '@angular/core';
import { MenuController, NavController, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { MePage }  from '../pages/me/me';
import { SignupPage } from '../pages/signup/signup';
import { TabsPage } from '../pages/tabs/tabs';

import { UserService } from '../services/user';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = TabsPage;
  loginPage = LoginPage;
  signupPage = SignupPage;
  mePage = MePage;

  isAuthenticated = false;

  @ViewChild('nav') nav: NavController;

  // -------------------------------------------------------------------------------------
  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    private menuCtrl: MenuController,
    private userService: UserService) {

    if (userService.token) {
      this.isAuthenticated = true;
      this.rootPage = TabsPage;
    } else {
      this.isAuthenticated = false;
      this.rootPage = LoginPage;
    }     

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  // ---------------------------------------------------------------------------------------------
  onLoad(page: any) {
    this.nav.setRoot(page);
    this.menuCtrl.close();
  }

  // --------------------------------------------------------------------
  onLogout() {
    // this.userService.logout()
    //   .then(() => {
    //     this.menuCtrl.close();
    //     this.nav.setRoot(LoginPage);
    //   })
    //   .catch(error => console.log(error))

    this.userService.logout()
      .subscribe(() => 
      {
        this.menuCtrl.close();
        this.nav.setRoot(LoginPage);
      }, (errMsg) => {
        console.log(errMsg);
      });
  }
  
}

