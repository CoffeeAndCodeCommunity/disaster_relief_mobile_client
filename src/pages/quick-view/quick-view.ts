import { EventProvider } from "../../providers/event-request/event-request";
import { Component, ViewChild, ViewChildren, QueryList } from "@angular/core";
import { NavController, NavParams, ModalController, App } from "ionic-angular";
import { EventShowPage } from './../event-show/event-show';

import {
  Direction,
  StackConfig,
  Stack,
  Card,
  ThrowEvent,
  DragEvent,
  SwingStackComponent,
  SwingCardComponent
} from "angular2-swing";
import * as _ from "lodash";

@Component({
  selector: 'page-quick-view',
  templateUrl: 'quick-view.html',
})
export class QuickViewPage {
  @ViewChild("cardStack")
  swingStack: SwingStackComponent;
  @ViewChildren("card")
  swingCards: QueryList<SwingCardComponent>;

  srpData: any[];
  stackConfig: StackConfig;
  events: any[];
  bgImage: string;
  isLoading: boolean = true;
  noCards: boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private eventProvider: EventProvider,
  ) {

    this.stackConfig = {
      // Default setting only allows UP, LEFT and RIGHT so you can override this as below
      allowedDirections: [Direction.LEFT, Direction.RIGHT],
      throwOutConfidence: (offsetX, offsetY, element) => {
        return Math.min(Math.abs(offsetX) / (element.offsetWidth / 2), 1);
      },
      transform: (element, x, y, r) => {
        this.onItemMove(element, x, y, r);
      },
      throwOutDistance: d => {
        return 800;
      }
    };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuickViewPage');
  }

  ngOnInit(): void {
    const data = this.eventProvider.all()
    this.srpData = data;
    console.log(this.srpData);
    this.populateCards();
    // this.eventProvider.all().subscribe(data => {
    //   this.srpData = data;
    //   this.populateCards();
    // });
  }

  ngAfterViewInit() {

    this.bgImage = 'https://www.worldvision.org/corporate/wp-content/uploads/sites/2/2017/05/Disaster-Relief-Mobile-reduced.jpg'

    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  }

  consoleLogMe() {
    console.log("1 cards", this.events);
    console.log("2 srpData", this.srpData);
  }

  launchEventShowPage(id) {
    this.navCtrl.push(EventShowPage, { event_id: id });
  }

  // Called whenever we drag an element
  onItemMove(element, x, y, r) {
    let nope = element.querySelector(".stamp-nope");
    let like = element.querySelector(".stamp-like");
    let calculatedValue = Math.min(100, Math.abs(x) - 20) / 100; // 0 - 1

    if (x < 0 && Math.abs(x) > 20) {
      nope.style.opacity = calculatedValue;
    } else {
      like.style.opacity = calculatedValue;
    }

    element.style[
      "transform"
    ] = `translate3d(0, 0, 0) translate(${x}px, ${y}px) rotate(${r}deg)`;

    // Zoom effect for the cards underneath
    if (this.swingCards.length > 1) {
      let cardBehind = this.swingCards.toArray()[1].getNativeElement();
      cardBehind.style["transform"] = `scale(${0.94 +
        0.06 * calculatedValue}, ${0.94 + 0.06 * calculatedValue})`;
    } else if (this.swingCards.length == 0) {
      this.noCards = true;
    }
  }

  // Add new cards to our array
  populateCards(): void {
    this.events = [];
    this.srpData.forEach(element => {
      this.events.push(element);
    });
    console.info("CURRENT STACK:", this.events.map(c => c.name));
    console.log(this.consoleLogMe())
  }

  trackByFn(index, item) {
    return item.id;
  }

  interested(): void {
    console.log("Interested");
  }

  declined(): void {
    console.log("Declined");
    let removedCard = this.events.shift();
  }
}
