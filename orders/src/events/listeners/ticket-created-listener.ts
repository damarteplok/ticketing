import { Message } from 'node-nats-streaming';
import { Subjects, Listener, TicketCreatedEvent } from '@damarteplok/common';
import { Ticket } from '../../models/ticket';
import { queueGroupName } from './queue-group-name';

export class TicketCreatedListener extends Listener<TicketCreatedEvent> {
	subject: Subjects.TicketCreated = Subjects.TicketCreated;
	queueGroupName: string = queueGroupName;

	async onMessage(
		data: { id: string; title: string; price: number; userId: string },
		msg: Message
	): Promise<void> {
		const { title, price, id } = data;
		const ticket = Ticket.build({
            id,
			title,
			price,
		});
		await ticket.save();

		msg.ack();
	}
}
