import { Component, OnInit } from '@angular/core';
import { TicketService } from '../../../services/ticket/ticket.service';
import { Ticket } from '../../../models/ticket';
import { getLocaleCurrencySymbol } from '@angular/common';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss']
})
export class TicketListComponent implements OnInit {

  public ticketList: Ticket[] = [];
  public displayTicketArchived: Boolean;


  constructor(public ticketService: TicketService) {
    this.ticketService.tickets$.subscribe((tickets) => this.ticketList = tickets);
    this.ticketService.tickets$.subscribe((tickets) => this.displayTicketArchived = false);
  }

  ngOnInit() {
  }

  ticketHasBeenSelected(hasBeenSelected: boolean) {
    console.log('event received from child:', hasBeenSelected);
  }

  /*
  la méthode deleteTicket utilise le service TicketService pour 
  supprimer le ticket sélectionné en appelant la méthode deleteTicket du service
  */
  archiveTicket(ticket: Ticket) {
    console.log("element archivé");
    console.log(ticket.archived);
    this.ticketService.archiveTicket(ticket);
  }

  showArchivedTickets(){
    this.displayTicketArchived = true;
    console.log(this.displayTicketArchived);
  }
  hideArchivedTickets(){
    this.displayTicketArchived = false;
    console.log(this.displayTicketArchived);
  }
}
