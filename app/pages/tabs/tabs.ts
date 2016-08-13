import { Component, ViewChild } from '@angular/core';
import { NavController, Tabs, Slides } from 'ionic-angular';

import {HomePage} from '../home/home';
import {TwoLetterWordsPage} from '../two-letter-words/two-letter-words';
import {ThreeLetterWordsPage} from '../three-letter-words/three-letter-words';
import {FourLetterWordsPage} from '../four-letter-words/four-letter-words';
import {FiveLetterWordsPage} from '../five-letter-words/five-letter-words';
import {SixLetterWordsPage} from '../six-letter-words/six-letter-words';
import {SevenLetterWordsPage} from '../seven-letter-words/seven-letter-words';
import {EightLetterWordsPage} from '../eight-letter-words/eight-letter-words';
import {NineLetterWordsPage} from '../nine-letter-words/nine-letter-words';
import {TenLetterWordsPage} from '../ten-letter-words/ten-letter-words';
import {ElevenLetterWordsPage} from '../eleven-letter-words/eleven-letter-words';
import {TwelveLetterWordsPage} from '../twelve-letter-words/twelve-letter-words';
import {ThirteenLetterWordsPage} from '../thirteen-letter-words/thirteen-letter-words';
import {FourteenLetterWordsPage} from '../fourteen-letter-words/fourteen-letter-words';
import {FifteenLetterWordsPage} from '../fifteen-letter-words/fifteen-letter-words';
/*
  Generated class for the TabsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/tabs/tabs.html',
})
export class TabsPage {
  @ViewChild('mainTabs') tabsRef: Tabs;
  @ViewChild('mainSlider') slider: Slides;

  private home: any;
  private twoLetterWords: any;
  private threeLetterWords: any;
  private fourLetterWords: any;
  private fiveLetterWords: any;
  private sixLetterWords: any;
  private sevenLetterWords: any;
  private eightLetterWords: any;
  private nineLetterWords: any;
  private tenLetterWords: any;
  private elevenLetterWords: any;
  private twelveLetterWords: any;
  private thirteenLetterWords: any;
  private fourteenLetterWords: any;
  private fifteenLetterWords: any;
  private pageShow: boolean[];

  constructor() {
    this.home = HomePage;
    this.twoLetterWords = TwoLetterWordsPage;
    this.threeLetterWords = ThreeLetterWordsPage;
    this.fourLetterWords = FourLetterWordsPage;
    this.fiveLetterWords = FiveLetterWordsPage;
    this.sixLetterWords = SixLetterWordsPage;
    this.sevenLetterWords = SevenLetterWordsPage;
    this.eightLetterWords = EightLetterWordsPage;
    this.nineLetterWords = NineLetterWordsPage;
    this.tenLetterWords = TenLetterWordsPage;
    this.elevenLetterWords = ElevenLetterWordsPage;
    this.twelveLetterWords = TwelveLetterWordsPage;
    this.thirteenLetterWords = ThirteenLetterWordsPage;
    this.fourteenLetterWords = FourteenLetterWordsPage;
    this.fifteenLetterWords = FifteenLetterWordsPage;
    this.pageShow = [true, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
  }

  ionViewDidEnter() {
    this.tabsRef.select(0);
    this.slider.slideTo(0);
  }

  onSlideChanged() {
    let currentIndex = this.slider.getActiveIndex();
    console.log("Current index is", currentIndex);
    this.tabsRef.select(currentIndex);
  }

  onSelectionChanged(currentIndex: any){
    console.log("Current tab index is", currentIndex);
    console.log("Current slider index is", this.slider.getActiveIndex());
    this.slider.slideTo(currentIndex);
    if(currentIndex >= 1 && currentIndex <= 13){
      for(var i = 0; i < 15; ++i){
        this.pageShow[i] = !!(i == currentIndex || i == currentIndex + 1 || i == currentIndex - 1);
      }
    }else if(currentIndex == 0){
      for(var i = 0; i < 15; ++i){
        this.pageShow[i] = i == currentIndex;
      }
    }else{
      for(var i = 0; i < 15; ++i){
        this.pageShow[i] = !!(i == currentIndex || i == currentIndex - 1 || i == currentIndex - 2);
      }
    }
  }
}
