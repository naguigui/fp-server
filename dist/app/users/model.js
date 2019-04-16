"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    name: String,
    email: String,
    password: String,
    gender: String,
    weight: Number,
    height: Number,
    age: Number
}, { timestamps: { createdAt: 'created_at' } });
exports.default = mongoose_1.model('User', UserSchema);
//# sourceMappingURL=model.js.map