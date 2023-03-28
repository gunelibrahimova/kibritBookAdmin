// import { BASE_URL } from "../../api/Config";
import { CREATE_BOOK, GET_BOOK } from "../Constats/BookConstants";
import {BASE_URL} from "../../api/config"

export const getBookAction  = () => async (dispatch,getState) =>{
    let book = await (await fetch(`${BASE_URL}Book/bookList`)).json()
    dispatch({
        type: GET_BOOK,
        payload: book.message
    })
}

export const createBookAction = (Name,price,isStock,isSale,isTranslate,description,translator,bookCover,paperType, size, author, publisher, genre, language, coverPhoto ,salePrice, productPicture) => async (dispatch, getState) =>{
    let newProduct = await fetch(`${BASE_URL}Book/add`,{
        method: "post",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: Name,
            price: price,
            salePrice : salePrice,
            isStock: isStock,
            isTranslate: isTranslate,
            description:description,
            translator:translator,
            bookCover:bookCover,
            authorId:author,
            publisherId:publisher,
            genreId:genre,
            languageId : language,
            paperType : paperType,
            size : size,
            coverPhoto: coverPhoto,
            isSale: isSale,
            productPicture: [{
                photoUrl: "ajdahdkashdkl"
            }]
        })
    }).then(res => res.json())

    dispatch({
        type: CREATE_BOOK,
        payload: newProduct
    })
}