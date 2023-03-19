import { BASE_URL } from "../../api/Config"
import { GET_LANGUAGE } from "../Constats/LanguageConstats"


export const getLanguageAction = () => async (dispatch, getState) => {
    let languages = await (await fetch(`${BASE_URL}language/getall`)).json()
    dispatch({
        type: GET_LANGUAGE,
        payload: languages
    })
}
