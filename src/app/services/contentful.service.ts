import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {
  private client = createClient({
    space: 'your_space_id',
    accessToken: 'your_access_token'
  });

  getEntries(contentType: string): Promise<Entry<any>[]> {
    return this.client.getEntries({ content_type: contentType })
      .then(response => response.items);
  }

  constructor() { }
}
