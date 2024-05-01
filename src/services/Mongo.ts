import { connect, connection } from 'mongoose';

export default class Mongo {
    constructor(private url: string) {}

    async init() {
        await connect(this.url);
        connection.on('error', console.error.bind(console, 'MongoDB connection error: '));
    }
}