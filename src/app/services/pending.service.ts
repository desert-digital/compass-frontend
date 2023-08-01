// Core

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

// Amplify 

import { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';

import { GraphQLQuery } from '@aws-amplify/api';
import { ListPendingEventsQuery, ListPendingEventsQueryVariables, GetPendingEventQuery, DeletePendingEventMutation } from '../API.service';

// Local

import { PendingEvent } from '../API.service';

@Injectable({
  providedIn: 'root'
})
export class PendingService {
  constructor() { }

  public numberOfPendingEvents$ = new Subject();

  async getPendingItems(): Promise<PendingEvent[]> {
    const today = new Date().toISOString();

    const variables: ListPendingEventsQueryVariables = {
      filter: {
        and: [{start: { ge: today }}, {status: { ne: 'cancelled' }}]
      }
    };
    const events = await API.graphql<GraphQLQuery<ListPendingEventsQuery>>(
      graphqlOperation(queries.listPendingEvents, variables)
    );
    const pendingEvents = events.data.listPendingEvents.items;

    this.numberOfPendingEvents$.next(pendingEvents.length) //events.length);
    return pendingEvents as PendingEvent[];
  }

  async getPendingItem(id: string): Promise<PendingEvent> {
    const events = await API.graphql<GraphQLQuery<GetPendingEventQuery>>(
      graphqlOperation(queries.getPendingEvent, id)
    );
    const eventById = events.data.getPendingEvent;

    return eventById as PendingEvent;
  }

  async deleteItem(item: PendingEvent) {
    const events = await API.graphql<GraphQLQuery<DeletePendingEventMutation>>(
      graphqlOperation(mutations.deletePendingEvent, item.id)
    );
  }

  createSubscription() {
    // const sub = this.api.OnCreatePendingEventListener().subscribe({
    //   next: (value  => console.log(value))
    // });
  }

  async deleteSubscription() {
    // const sub = this.api.OnDeletePendingEventListener().subscribe({
    //   next: (value  => {
    //     console.log(value); this.getPendingItems();
    //   })
    // });
  }
}
