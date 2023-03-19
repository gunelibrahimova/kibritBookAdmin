import { GET_LANGUAGE } from "../Constats/LanguageConstats"


export const LanguageReducer = (state = { languages: [] }, action) => {
    switch (action.type) {
        case GET_LANGUAGE:
            return {
                ...state,
                languages: action.payload
            }
        default:
            return state
    }
}