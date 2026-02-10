import { Database } from './database';

describe('Database class', () => {
  let db;

  // beforeEach runs before EACH test
  beforeEach(() => {
    db = new Database();
    db.connect();
    console.log('Test setup: Database created and connected');
  });

  // afterEach runs after EACH test
  afterEach(() => {
    db.disconnect();
    console.log('Test cleanup: Database disconnected');
  });

  // beforeAll runs ONCE before all tests in this describe block
  beforeAll(() => {
    console.log('Starting Database tests');
  });

  // afterAll runs ONCE after all tests in this describe block
  afterAll(() => {
    console.log('Finished Database tests');
  });

  test('inserts data correctly', () => {
    db.insert({ id: 1, name: 'User 1' });
    db.insert({ id: 2, name: 'User 2' });
    
    expect(db.findAll()).toHaveLength(2);
    expect(db.findAll()).toEqual([
      { id: 1, name: 'User 1' },
      { id: 2, name: 'User 2' }
    ]);
  });

  test('throws error when not connected', () => {
    db.disconnect();
    
    expect(() => db.insert({ id: 1 })).toThrow('Database not connected');
    expect(() => db.findAll()).toThrow('Database not connected');
  });

  test('clears data correctly', () => {
    db.insert({ id: 1, name: 'User 1' });
    db.insert({ id: 2, name: 'User 2' });
    db.clear();
    
    expect(db.findAll()).toHaveLength(0);
  });

  // Each test gets a fresh database instance
  test('starts with empty data', () => {
    expect(db.findAll()).toEqual([]);
  });
});