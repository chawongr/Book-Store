// import axios from 'axios';
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Add = () => {
//     const navigate = useNavigate();

//     const [formData, setFormData] = useState({
//         name: "",
//         description: "",
//         editor: "",
//         price: "",
//         author: "",
//         subtitle: "",
//         image: null
//     });

//     const handleChange = (e) => {
//         const { name, value, files } = e.target;
//         setFormData(prevState => ({
//             ...prevState,
//             [name]: files ? files[0] : value
//         }));
//     };

//     const handleSubmit = () => {
//         const formDataToSend = new FormData();
//         Object.entries(formData).forEach(([key, value]) => {
//             formDataToSend.append(key, value);
//         });

//         axios.post('http://localhost:3001/books', formDataToSend)
//             .then((res) => {
//                 console.log(res);
//                 navigate("/book");
//             })
//             .catch(err => {
//                 console.error("Error adding book:", err);
//             });
//     };

//     return (
//         <div className='form'>
//             <input onChange={handleChange} type="text" placeholder='name' name='name' />
//             <input onChange={handleChange} type="text" placeholder='description' name='description' />
//             <input onChange={handleChange} type="text" placeholder='editor' name='editor' />
//             <input onChange={handleChange} type="number" placeholder='price' name='price' />
//             <input onChange={handleChange} type="text" placeholder='author' name='author' />
//             <input onChange={handleChange} type="text" placeholder='subtitle' name='subtitle' />
//             <input onChange={handleChange} type="file" name='image' />
//             <button onClick={handleSubmit}>Add</button>
//         </div>
//     );
// };

// export default Add;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

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
        <div className='bg-[#f0eee2] h-screen'>
            <div className='container mx-auto w-1/2 p-4 rounded-md '>
                <h2 className='text-2xl font-bold text-center mb-4 text-gray-800'>Add a New Book</h2>
                <div className="mb-4">
                    <label htmlFor="name" className="block font-semibold mb-1 text-gray-800">Name:</label>
                    <input onChange={handleChange} type="text" id="name" name='name' placeholder='Enter book name' 
                    className="w-full px-3 py-2 border rounded-md bg-transparent border-black focus:outline-none " />
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block font-semibold mb-1 text-gray-800">Description:</label>
                    <textarea onChange={handleChange} id="description" name='description' placeholder='Enter description' 
                    className="w-full px-3 py-2 border rounded-md focus:outline-none"></textarea>
                </div>
                <div className="mb-4">
                    <label htmlFor="editor" className="block font-semibold mb-1 text-gray-800">Editor:</label>
                    <input onChange={handleChange} type="text" id="editor" name='editor' placeholder='Enter editor' 
                    className="w-full px-3 py-2 border rounded-md focus:outline-none " />
                </div>
                <div className="mb-4">
                    <label htmlFor="price" className="block font-semibold mb-1 text-gray-800">Price:</label>
                    <input onChange={handleChange} type="number" id="price" name='price' placeholder='Enter price' 
                    className="w-full px-3 py-2 border rounded-md focus:outline-none" />
                </div>
                <div className="mb-4">
                    <label htmlFor="author" className="block font-semibold mb-1 text-gray-800">Author:</label>
                    <input onChange={handleChange} type="text" id="author" name='author' placeholder='Enter author' 
                    className="w-full px-3 py-2 border rounded-md focus:outline-none " />
                </div>
                <div className="mb-4">
                    <label htmlFor="subtitle" className="block font-semibold mb-1 text-gray-800">Subtitle:</label>
                    <input onChange={handleChange} type="text" id="subtitle" name='subtitle' placeholder='Enter subtitle' 
                    className="w-full px-3 py-2 border rounded-md focus:outline-none " />
                </div>
                <div className="mb-4">
                    <label htmlFor="image" className="block font-semibold mb-1 text-gray-800">Image:</label>
                    <input onChange={handleChange} type="file" id="image" name='image' 
                    className="w-full px-3 py-2 border rounded-md focus:outline-none " />
                </div>
                <button onClick={handleSubmit} className="w-full bg-yellow-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-yellow-700 focus:outline-none focus:bg-yellow-700">Add</button>
            </div>
        </div>
    );
};

export default Add;
