var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const User = require('./model');
module.exports.getSingleUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const data = yield User.findById(id);
        res.send(data);
    }
    catch (e) {
        res.status(500).send();
    }
});
module.exports.getUsers = (_, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        const data = yield User.find();
        res.send(data);
    }
    catch (e) {
        res.status(500).send();
    }
});
module.exports.deleteUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const data = yield User.findByIdAndRemove(id);
        res.send(data);
    }
    catch (e) {
        res.status(500).send();
    }
});
module.exports.createUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
    if (!req.body) {
        return res.status(400).send({
            message: 'User cannot be empty'
        });
    }
    const { name, email, gender, weight, height, age } = req.body;
    const user = new User({
        name,
        email,
        gender,
        weight,
        height,
        age
    });
    try {
        const data = yield user.save();
        res.send(data);
    }
    catch (e) {
        res.status(500).send({
            message: e.message
        });
    }
});
module.exports.updateUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
    if (!req.body) {
        return res.status(400).send({
            message: 'User cannot be empty'
        });
    }
    const { id } = req.params;
    try {
        const data = yield User.findByIdAndUpdate(id, Object.assign({}, req.body));
        res.send(data);
    }
    catch (e) {
        res.status(500).send({
            message: e.message
        });
    }
});
//# sourceMappingURL=controller.js.map