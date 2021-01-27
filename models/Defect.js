const { Schema, model } = require('mongoose');

const defectSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    room: {
        type: String,
        required: true,
    },
    attachment: {
        type: String,
        default: '',
    },
    attachment_id: {
        type: String,
        default: '',
    },
    user: {
        ref: 'User',
        type: Schema.Types.ObjectId,
    },
    status: {
        type: String,
        enum: ['open', 'fixing', 'solved'],
        required: true,
    },
    close_reason: {
        type: String,
        default: '',
    },
    priority: {
        type: Number,
        default: 4,
        min: 1,
        max: 4,
    },
    open_date: {
        type: Date,
        required: true,
    },
    close_date: {
        type: Date,
        default: '',
    },
});

module.exports = model('Defect', defectSchema);
