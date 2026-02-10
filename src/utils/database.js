export class Database {
  constructor() {
    this.data = [];
    this.connected = false;
  }

  connect() {
    this.connected = true;
    console.log('Database connected');
  }

  disconnect() {
    this.connected = false;
    this.data = [];
    console.log('Database disconnected');
  }

  insert(item) {
    if (!this.connected) throw new Error('Database not connected');
    this.data.push(item);
  }

  findAll() {
    if (!this.connected) throw new Error('Database not connected');
    return this.data;
  }

  clear() {
    this.data = [];
  }
}