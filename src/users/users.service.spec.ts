import { Test } from '@nestjs/testing';
import { UserService } from './users.service';

describe('UserService', () => {
  let service: UserService;

  beforeAll(async () => {
    const modules = await Test.createTestingModule({
      providers: [UserService],
    }).compile();
    service = modules.get<UserService>(UserService);
  });

  it('be defined', () => {
    expect(service).toBeDefined();
  });

  it.todo('createAccount');
  it.todo('login');
  it.todo('findById');
  it.todo('editProfile');
  it.todo('verifyEmail');
});
