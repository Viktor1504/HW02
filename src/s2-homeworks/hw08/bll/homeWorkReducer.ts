import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => {
    switch (action.type) {
        case 'sort': {
            // const sortedState = [...state]
            // return sortedState.sort((a, b): number => {
            //     const nameA = a.name.toLowerCase()
            //     const nameB = b.name.toLowerCase()
            //
            //     if (action.payload === 'up') {
            //         return nameA.localeCompare(nameB)
            //     } else if (action.payload === 'down') {
            //         return nameB.localeCompare(nameA)
            //     }
            //     return 0
            // })
            const sortedState = [...state];
            return sortedState.sort((a, b): number => {
                const nameA = a.name.toLowerCase()
                const nameB = b.name.toLowerCase()

                if (action.payload === 'up') {
                    return nameA < nameB ? -1 : nameA > nameB ? 1 : 0
                } else if (action.payload === 'down') {
                    return nameB < nameA ? -1 : nameB > nameA ? 1 : 0
                }
                return 0;
            })
        }
        case 'check': {
            return state.filter(user => user.age >= action.payload)
        }
        default:
            return state;
    }
}

