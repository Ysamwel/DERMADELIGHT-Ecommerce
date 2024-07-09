import mongoose from 'mongoose';

const { Schema } = mongoose;

const CategorySchema = new Schema({
    type: { 
        type: String, 
        required: true 
    },
    icon: {
        type: String,
    },
    color: {
        type: String
    }
});

const Category = mongoose.model("Category", CategorySchema);

export { Category, CategorySchema };
