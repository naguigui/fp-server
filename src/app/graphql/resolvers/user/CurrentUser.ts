import User from '@/models/user.model'

export default async (_parent:object, _args:object, ctx: any) => {
    const { user } = ctx
    if (user) {
        const { _id } = user
        return await User.findById(_id).lean()
    }
}