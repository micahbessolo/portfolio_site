import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class FeedService {
  navigate(arg0: string[]) {
    throw new Error('Method not implemented.');
  }

  constructor(private webReqService: WebRequestService) { }

  createFeed(name: string, email: string, message: string) {
    // to send a web request to create a feed
    return this.webReqService.post('feeds', { name, email, message });
  }
}
