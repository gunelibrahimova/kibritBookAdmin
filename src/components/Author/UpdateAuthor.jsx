import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Form } from 'semantic-ui-react';
import { BASE_URL } from '../../api/config';

const UpdateAuthor = () => {
  const [Name, setName] = useState("");
  const [photoURL, setPhoto] = useState("");
  const [description,setDescription] = useState("");
  const [id, setID] = useState(null);
  const navigate = useNavigate();

  const updateAPIData = async () => {
    fetch(`${BASE_URL}author/update/${id}`, {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: Name,
        photoURL: photoURL,
        description: description
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        navigate("/author");
      });
  }

  useEffect(() => {
    setID(localStorage.getItem('ID'))
    setName(localStorage.getItem('Name'));
    setPhoto(localStorage.getItem('PhotoURL'));
    setDescription(localStorage.getItem('Description'));
  }, []);

  return (
    <div>
      <Form className="create-form">
        <Form.Field>
          <label>Name</label>
          <input placeholder="Name" value={Name} onChange={(e) => setName(e.target.value)} />
        </Form.Field>
        <Form.Field>
          <label>Photo</label>
          <input
            placeholder="Photo"
            value={photoURL}
            onChange={(e) => setPhoto(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Description</label>
          <input placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        </Form.Field>
        <button type="submit" className='btn btn-outline-warning my-2' onClick={updateAPIData}>Update</button>
      </Form>
    </div>
  )
}

export default UpdateAuthor