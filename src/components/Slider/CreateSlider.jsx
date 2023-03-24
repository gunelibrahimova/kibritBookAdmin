import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Form } from 'semantic-ui-react';
import { BASE_URL } from '../../api/config';

const CreateSlider = () => {
    const [photoURL, setPhoto] = useState("");
    const navigate = useNavigate();
  
    const postData = async () => {
      fetch(`${BASE_URL}slider/add`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          photoURL: photoURL,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          navigate('/slider')
        });
    };
  
    return (
      <Form className="create-form">
        <Form.Field>
          <label>Photo</label>
          <input
            placeholder="Photo"
            onChange={(e) => setPhoto(e.target.value)}
          />
        </Form.Field>
        <button className='btn btn-outline-success my-2' type="submit" onClick={postData}>
          <Link to={'/slider'}>Submit</Link>
        </button>
      </Form>
    )
}

export default CreateSlider