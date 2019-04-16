"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt = __importStar(require("bcrypt"));
const jwt = __importStar(require("jsonwebtoken"));
const lodash_1 = require("lodash");
const model_1 = __importDefault(require("../../users/model"));
const constants_1 = require("../../../utils/constants");
exports.userResolver = {
    Query: {
        users: () => __awaiter(this, void 0, void 0, function* () {
            return yield model_1.default.find().lean();
        }),
        me: (parent, args, context) => __awaiter(this, void 0, void 0, function* () {
            const { user } = context;
            if (user) {
                const { _id: id } = user;
                return yield model_1.default.findById(id).lean();
            }
            return null;
        })
    },
    Mutation: {
        updateUser: (_, args) => __awaiter(this, void 0, void 0, function* () {
            const { id, input } = args;
            return (yield model_1.default.findByIdAndUpdate(id, input).lean()) || null;
        }),
        deleteUser: (_, args) => __awaiter(this, void 0, void 0, function* () {
            const { id } = args;
            return yield model_1.default.findByIdAndRemove(id).lean();
        }),
        registerUser: (_, args) => __awaiter(this, void 0, void 0, function* () {
            const data = args;
            data.password = yield bcrypt.hash(data.password, constants_1.SALT_ROUNDS);
            const user = yield model_1.default.create(data);
            return user.toObject();
        }),
        login: (_, args, context) => __awaiter(this, void 0, void 0, function* () {
            const { email, password } = args;
            const { JWT_SECRET } = context;
            const user = yield model_1.default.findOne({
                email: email
            }).lean();
            if (!user) {
                throw new Error('Something went wrong');
            }
            const valid = yield bcrypt.compare(password, user.password);
            if (!valid) {
                throw new Error('Bad password!');
            }
            const token = jwt.sign({
                user: lodash_1.pick(user, ['_id'])
            }, JWT_SECRET, {
                expiresIn: '1y'
            });
            return token;
        })
    }
};
//# sourceMappingURL=user.js.map