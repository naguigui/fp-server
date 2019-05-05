import Routine from '@/models/routine.model'
import { ResolverMap } from '@/app/interfaces/ResolverType'

export const routineResolver: ResolverMap = {
    Query: {
        routines: async (_parent, args) => {
            await Routine.find()
        }
    }
}