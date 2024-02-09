import {Publisher, Subjects, TicketCreatedEvent} from '@damarteplok/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
    subject: Subjects.TicketCreated = Subjects.TicketCreated;
}

