import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ContentfulService {
  private client = createClient({
    space: environment.contentful.spaceId,
    accessToken: environment.contentful.accessToken
  });

  constructor() { }

  //get all entires of a specific content type
  getEntries(contentType: string, query?: any) {
    return this.client.getEntries({
      content_type: contentType,
      ...query
    });
  }

  //Get a single entry by ID
  getEntry(entryId: string) {
    return this.client.getEntry(entryId);
  }

  //Get entries with specific filters
  getEntriesWithQuery(query: any) {
    return this.client.getEntries(query);
  }

}
