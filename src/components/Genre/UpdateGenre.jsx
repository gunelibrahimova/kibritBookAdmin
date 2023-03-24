import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Form } from 'semantic-ui-react';
import { BASE_URL } from '../../api/config';

const UpdateGenre = () => {
  const [Name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [id, setID] = useState(null);
  const navigate = useNavigate();

  const updateAPIData = async () => {
    fetch(`${BASE_URL}genre/update/${id}`, {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: Name,
        photo: photo,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        navigate("/genre");
      });
  }

  useEffect(() => {
    setID(localStorage.getItem('ID'))
    setName(localStorage.getItem('Name'));
    setPhoto(localStorage.getItem('Photo'));
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
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
          />
        </Form.Field>
        <button type="submit" className='btn btn-outline-warning my-2' onClick={updateAPIData}>Update</button>
      </Form>
    </div>
  )
}

export default UpdateGenre