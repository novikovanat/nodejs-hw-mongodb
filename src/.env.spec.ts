/*
https://docs.nestjs.com/fundamentals/testing#unit-testing
*/

import { Test } from '@nestjs/testing';

describe('Env', () => {
    let Env: Env;

beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
        imports: [], // Add
        controllers: [], // Add
        providers: [],   // Add
    }).compile();

    Env = moduleRef.get<Env>(Env);
    });

it('should be defined', () => {
    expect(Env).toBeDefined();
    });
});
