import { Schema, models, model } from 'mongoose';

export interface IEvent extends Document {
    _id: string;
    title: string;
    description: string;
    location: never;
    createdAt: Date;
    imageUrl: string;
    startDateTime: Date;
    endDateTime: Date;
    price: string;
    isFree: boolean;
    url: string;
    category: { _id: string, name: string };
    organizer: { _id: string, firstName: string, lastName: string };
}

const EventSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String },
    createdAt: { type: Date, default: Date.now },
    imageUrl: { type: String, required: true },
    startDateTime: { type: Date, required: true },
    endDateTime: { type: Date, required: true },
    price: { type: String},
    isFree: { type: Boolean, default: false },
    url: { type: String },
    category: { type: Schema.Types.ObjectId, ref: 'Category' },
    organizer: { type: Schema.Types.ObjectId, ref: 'User' },
})

const Event = models.Event || model('Event', EventSchema);

export default Event;