const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the Comment schema
const commentSchema = new Schema({
    user: {
         type: Schema.Types.ObjectId, 
         ref: 'User' 
        },
    content: { 
        type: String, 
        required: true 
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    }
});

// Define the Reaction schema
const reactionSchema = new Schema({
    user: { 
        type: Schema.Types.ObjectId, 
        ref: 'User' 
    },
    type: { 
        type: String, 
        enum: ['like', 'love', 'haha', 'wow', 'sad', 'angry'], required: true },
    createdAt: { 
        type: Date, 
        default: Date.now }
});

// Define the Post schema
const postSchema = new Schema({
    author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    content: { type: String, required: true },
    media: [{
        type: { type: String, enum: ['image', 'video'] },
        url: { type: String }
    }],
    reactions: [reactionSchema],
    comments: [commentSchema],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

// Middleware to update the 'updatedAt' field on save
postSchema.pre('save', function(next) {
    this.updatedAt = Date.now();
    next();
});

module.exports = mongoose.model('Post', postSchema);
