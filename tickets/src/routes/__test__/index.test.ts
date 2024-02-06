import request from 'supertest';
import { app } from '../../app';

const createTickket = () => {
	return request(app)
		.post('/api/tickets')
		.set('Cookie', global.signin())
		.send({
			title: 'abc',
			price: 20,
		})
		.expect(201);
};

it('can fetch a list of tickets', async () => {
	await createTickket();
	await createTickket();
	await createTickket();

	const response = await request(app).get('/api/tickets').send().expect(200);
	expect(response.body.length).toEqual(3);
});
