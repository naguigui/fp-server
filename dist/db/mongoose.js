"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const db = process.env.MONGO_URL;
mongoose
    .connect(db, {
    useCreateIndex: true,
    useNewUrlParser: true
})
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(err));
//# sourceMappingURL=mongoose.js.map