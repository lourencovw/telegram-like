import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { Message } from '../src/message/entities/message.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

describe('MessageController (e2e)', () => {
  let app: INestApplication;
  let createdMessage: Message;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'sqlite',
          database: ':memory:',
          entities: [Message],
          synchronize: true,
        }),
        AppModule,
      ],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });
  it('POST /messages (should create a new message)', async () => {
    const response = await request(app.getHttpServer())
      .post('/messages')
      .send({ content: 'Hello, world!' })
      .expect(201);

    createdMessage = response.body;
    expect(createdMessage).toHaveProperty('id');
    expect(createdMessage.content).toBe('Hello, world!');
  });

  it('GET /messages (should retrieve all messages)', async () => {
    const response = await request(app.getHttpServer())
      .get('/messages')
      .expect(200);

    expect(Array.isArray(response.body)).toBe(true);
  });

  it('GET /messages/:id (should retrieve a specific message)', async () => {
    const response = await request(app.getHttpServer())
      .get(`/messages/${createdMessage.id}`)
      .expect(200);

    expect(response.body.id).toBe(createdMessage.id);
  });

  it('PATCH /messages/:id (should update a message)', async () => {
    const updatedText = 'Updated message';
    const response = await request(app.getHttpServer())
      .patch(`/messages/${createdMessage.id}`)
      .send({ content: updatedText })
      .expect(200);

    expect(response.body.content).toBe(updatedText);
  });

  it('DELETE /messages/:id (should delete a message)', async () => {
    await request(app.getHttpServer())
      .delete(`/messages/${createdMessage.id}`)
      .expect(200);
  });
});
