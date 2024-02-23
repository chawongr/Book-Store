import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Add = () => {
    const navigate = useNavigate();
    
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        editor: "",
        price: "",
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

        axios.post('http://localhost:3001/books', formDataToSend)
            .then((res) => {
                console.log(res);
                navigate("/book");
            })
            .catch(err => {
                console.error("Error adding book:", err);
            });
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
            <button onClick={handleSubmit}>Add</button>
        </div>
    );
};

export default Add;