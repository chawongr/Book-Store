import axios from 'axios';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Update = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const bookId = location.pathname.split("/")[2]

    const [formData, setFormData] = useState({
        name: "",
        description: "",
        editor: "",
        price: 0,
        author: "",
        subtitle: "",
        image: null
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: files ? files[0] : value
        }));
    };

    const handleSubmit = () => {
        const formDataToSend = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
            formDataToSend.append(key, value);
        });

        axios.put("http://localhost:3001/books/" + bookId, formDataToSend)
            .then((res) => {
                console.log(res);
                navigate("/book");
            })
            .catch(err => {
                console.error("Error adding book:", err);
            })
    };

    return (
        <div className='form'>
            <input onChange={handleChange} type="text" placeholder='name' name='name' />
            <input onChange={handleChange} type="text" placeholder='description' name='description' />
            <input onChange={handleChange} type="text" placeholder='editor' name='editor' />
            <input onChange={handleChange} type="number" placeholder='price' name='price' />
            <input onChange={handleChange} type="text" placeholder='author' name='author' />
            <input onChange={handleChange} type="text" placeholder='subtitle' name='subtitle' />
            <input onChange={handleChange} type="file" name='image' />
            <button onClick={handleSubmit}>Update</button>
        </div>
    );
};

export default Update;