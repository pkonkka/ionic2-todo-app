import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { MePage } from '../me/me';


@Component({
    selector: 'page-tabs',
    template: `
        <ion-tabs>
            <ion-tab [root]="homePage" tabIcon="home"></ion-tab>                    
            <ion-tab [root]="mePage" tabTitle="Me" tabIcon="person"></ion-tab>            
        </ion-tabs>
    `
})
export class TabsPage {
    homePage = HomePage;
    mePage = MePage;

}