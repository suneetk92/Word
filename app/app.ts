import {Component, ViewChild} from '@angular/core';
import {Platform, ionicBootstrap, MenuController, Nav} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {TabsPage} from './pages/tabs/tabs';
import {AboutPage} from './pages/about/about';


@Component({
  templateUrl: 'build/app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  private rootPage: any;
  private pages: Array<{title: string, component: any}>;

  constructor(private platform: Platform, private menu: MenuController) {
    this.rootPage = TabsPage;

    this.pages = [
      { title: 'Home Page', component: TabsPage },
      { title: 'About Me', component: AboutPage }
    ];

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page){
    this.menu.close();
    this.nav.setRoot(page.component);
  }
}

ionicBootstrap(MyApp);
