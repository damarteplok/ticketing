import { Publisher, OrderCancelledEvent, Subjects } from '@damarteplok/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
	subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
