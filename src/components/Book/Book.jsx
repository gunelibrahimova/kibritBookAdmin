import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { BASE_URL, FILE_PATH } from '../../api/config';
import { getBookAction } from '../../redux/Actions/BookActions';

const Book = () => {
  const navigate = useNavigate()

  const [Name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [coverPhoto, setCoverPhoto] = useState("");
  const [productPicture, setProductPicture] = useState([]);
  const [salePrice, setSalePrice] = useState("");
  const [isStock, setIsStock] = useState(false);
  const [isTranslate, setIsTranslate] = useState(false);
  const [isSale, setIsSale] = useState(false);
  const [translator, setTranslator] = useState("");
  const [bookCover, setBookCover] = useState("");
  const [paperType, setPaperType] = useState("");
  const [size, setSize] = useState("");
  const [author, setAuthor] = useState("");
  const [publisher, setPublisher] = useState("")
  const [genre, setGenre] = useState("")
  const [quantity, setQuantity] = useState(0);
  const [language, setLanguage] = useState("")
  const [APIData, setAPIData] = useState([]);


  const onDelete = (id) => {
    fetch(`${BASE_URL}product/removeproduct/${id}`, {
      method: "DELETE",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: Name,
        salePrice : salePrice,
        price: price,
        description: description,
        coverPhoto: coverPhoto,
        isSale : isSale,
        isStock : isStock,
        isTranslate : isTranslate,
        productPicture: productPicture,
        quantity : quantity,
        size : size,
        paperType : paperType,
        bookCover: bookCover,
        // translator: translator,
        // author : author, 
        // publisher: publisher,
        // genre: genre,
        // language: language

      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        navigate('/book')
      });
  };

  const getBooks = async () => {
    axios.get(BASE_URL + "Book/bookList").then((response) => {
      setAPIData(response.data.message);
    });
  };

  console.log(APIData);
  useEffect(() => {
    getBooks()
  }, [])



  return (
    <div><div className='container'>
      <div className="row">
        <div className="col-lg-4 my-4">
          <Link to="/book/create">
            <button className='btn btn-outline-success'>Create</button>
          </Link>
        </div>
      </div>
      <div className="row">
        {
          APIData &&
          APIData.map((product) => (
            <div key={product.id} className="col-lg-3 my-2">
              <div className="card">
                <div className="card-body text-center">
                  <img className='img-fluid' style={{ height: 200 }} src={`${FILE_PATH}${product.coverPhoto}`} alt="" />
                  <h5>{product.name}</h5>
                </div>
                <div className="card-footer">
                  <div className="row text-center">
                    <div className="col-lg-6">
                      <button className='btn btn-outline-danger w-100' onClick={() => onDelete(product.id)}>Delete</button>
                    </div>
                    <div className="col-lg-6">
                      <Link to={`/book/update/${product.id}`}>
                        <button className='btn btn-outline-warning w-100'>Edit</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        }

      </div>
    </div></div>
  )
}

export default Book