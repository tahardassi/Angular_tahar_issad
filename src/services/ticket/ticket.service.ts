import { Injectable } from '@angular/core';
import { Ticket } from '../../models/ticket';
import { TICKETS_MOCKED } from '../../mocks/tickets.mock';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  /**
   * Services Documentation:
   * https://angular.io/docs/ts/latest/tutorial/toh-pt4.html
   */

  private ticketList: Ticket[] = TICKETS_MOCKED;

  /**
   * Observable which contains the list of the tickets.
   * Naming convention: Add '$' at the end of the variable name to highlight it as an Observable.
   */
  public tickets$: BehaviorSubject<Ticket[]> = new BehaviorSubject(this.ticketList);

  constructor() {
  }

  addTicket(ticket: Ticket) {
    // You need here to update the list of ticket and then update our observable (Subject) with the new list
    // More info: https://angular.io/tutorial/toh-pt6#the-searchterms-rxjs-subject
    //Ajout de nouvel ticket dans ticketList
    this.ticketList.push(ticket);
    //Mise à jour de l’observable
    this.tickets$.next(this.ticketList);
  }

  /*
  La méthode deleteTicket(ticket: Ticket) prend un objet Ticket comme argument 
  et utilise la méthode findIndex pour trouver l'indice de l'objet Ticket correspondant dans le tableau ticketList.
  Si l'objet Ticket est trouvé, la méthode splice est utilisée pour le supprimer du tableau ticketList,
  puis la méthode next de l'observable tickets$ est appelée pour émettre la nouvelle liste de tickets.
  */
  deleteTicket(ticket: Ticket) {
    const index = this.ticketList.findIndex(t => t === ticket);
    if (index !== -1) {
      this.ticketList.splice(index, 1);
      this.tickets$.next(this.ticketList);
    }
  }
}
