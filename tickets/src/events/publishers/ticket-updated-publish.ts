import {Publisher, Subjects, TicketUpdatedEvent} from '@damarteplok/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
    subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}