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

describe('Database tests', () => {
  let database;
  
  beforeAll(async () => {
    // Connect to test database (once)
    database = await connectToDatabase('test');
  });
  
  beforeEach(async () => {
    // Clear all data before each test
    await database.clear();
  });
  
  afterEach(() => {
    // Reset all mocks after each test
    jest.clearAllMocks();
  });
  
  afterAll(async () => {
    // Close database connection (once)
    await database.close();
  });
  
  test('creates user', async () => {
    await database.createUser({ name: 'John' });
    const users = await database.getUsers();
    expect(users).toHaveLength(1);
  });
  
  test('starts with empty database', async () => {
    // This passes because beforeEach cleared data
    const users = await database.getUsers();
    expect(users).toHaveLength(0);
  });
});