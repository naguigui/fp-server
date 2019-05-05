import User from '@/models/user.model'

export default async (_parent: object, _args: object, ctx: any): Promise<object> => {
    return await User.find().lean()
}