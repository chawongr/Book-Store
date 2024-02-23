import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';

const Book = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchAllBooks = async () => {
            try {
                const res = await axios.get('http://localhost:3001/books');
                setBooks(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchAllBooks();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3001/books/${id}`)
            window.location.reload()
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className='bg-[#f0eee2] h-full flex items-center'>
            <div className='flex flex-col'>
                <Banner />
                <div className='flex justify-between mx-auto w-5/6 mt-10'>
                    {books.map((book) => (

                        <div key={book.id} className='flex justify-between'>
                            <div className=''>
                                <div className='flex flex-col'>

                                    <img src={`http://localhost:3001/images/` + book.image} className='w-[200px]' style={{ boxShadow: '-12px 15px 10px 2px #545353' }} />
                                    <br />
                                    <div className='text-[24px] font-extralight'>{book.name}</div>

                                    <button><Link to={`/update/${book.id}`}>Update</Link></button>

                                    <button onClick={() => handleDelete(book.id)}>Delete</button>


                                </div>
                            </div>
                        </div>

                    ))}
                </div>
                <button className='text-white bg-black w-[200px] rounded-full'><Link to="/add">Add new book</Link></button>
            </div>
        </div>
    );
};

export default Book;

