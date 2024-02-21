import { Publisher, OrderCreatedEvent, Subjects } from '@damarteplok/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
	subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
