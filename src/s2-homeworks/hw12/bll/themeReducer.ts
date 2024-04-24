const initState: ThemeStateType = {
    themeId: 1
}

export const themeReducer = (state: ThemeStateType = initState, action: ChangeThemeIdActionType): ThemeStateType => {
    switch (action.type) {
        case 'SET_THEME_ID':
            return {...state, themeId: action.id}
        default:
            return state
    }
}

export const changeThemeId = (id: number) => ({type: 'SET_THEME_ID', id}) as const

// type
export type ThemeStateType = {
    themeId: number
}
type ChangeThemeIdActionType = ReturnType<typeof changeThemeId>