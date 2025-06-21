const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    orderId: { type: String, required: true, unique: true },
    amount: { type: Number, required: true },
    currency: { type: String, required: true },
    products: [
        {
            courseId: { type: mongoose.Schema.Types.Mixed, required: true },
            title: { type: String, required: true },
            price: { type: Number, required: true }
        }
    ],
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    paymentId: { type: String, required: true },
    signature: { type: String },
    paymentMethod: { type: String, required: true },
    status: { type: String, default: 'pending' },
    shipping: {
        firstName: { type: String },
        lastName: { type: String },
        address: { type: String },
        city: { type: String },
        state: { type: String },
        pincode: { type: String },
        country: { type: String },
        phone: { type: String },
        email: { type: String }
    },
    notes: { type: String },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' }, // Assuming you have a Student model
    createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Order', orderSchema);