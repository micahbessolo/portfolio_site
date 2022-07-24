import { Component, ViewEncapsulation, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { FeedService } from '../feed.service';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: []
})
export class SharedModule { }

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ContactComponent {

  constructor(private feedService: FeedService, private router: Router) { }

  validate(name: string, email: string, message: string) {
    if (name != "" && email.match(/^(.+)@(.+)$/) && message != "") {
      this.feedService.createFeed(name, email, message).subscribe((response: any) => {
      });
      this.router.navigateByUrl('/contact-success');
    }
    else console.log("some sort of easter egg");
  };
}
