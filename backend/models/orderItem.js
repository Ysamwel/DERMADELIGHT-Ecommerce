import mongoose from 'mongoose';

const { Schema } = mongoose;

const OrderItemSchema = new Schema({
    quantity: {
        type: Number,
        required: true
    },
    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    }
});

const OrderItem = mongoose.model('OrderItem', OrderItemSchema);

export { OrderItem, OrderItemSchema };
