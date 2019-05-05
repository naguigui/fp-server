import User from '@/entities/user'
import * as bcrypt from 'bcrypt'
import { SALT_ROUNDS } from '@/utils/constants'

class UserConnector {
    async getAllUsers() {
        return await User.find()
    }

    async getById(id: string) {
        return await User.findById(id)
    }

    async updateUser(id: string, attr: object) {
        return await User.findByIdAndUpdate(id, attr)
    }

    async deleteUser(id: string) {
        return await User.findByIdAndDelete(id)
    }

    async registerUser(args: any) {
        const data = args

        // Check if email already exists
        const user = await User.findOne({
            email: data.email
        })
        
        if (user) {
            throw new Error("Email already exists")
        }

        data.password = await bcrypt.hash(data.password, SALT_ROUNDS)
        const userToRegister = await User.create(data)
        return userToRegister.toObject()
    }
}

export default UserConnector