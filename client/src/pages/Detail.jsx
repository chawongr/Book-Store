import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';

const Detail = () => {
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

    return (
        <div className='bg-[#f0eee2] h-full flex items-center'>
            <div className='flex justify-between mx-auto w-5/6 '>
                <div>
                    <img src={`http://localhost:3001/images/` + books.image} className='w-[280px]' style={{ boxShadow: '-12px 15px 15px 2px #545353' }} />

                </div>
                <div className='flex flex-col'>
                    sd
                </div>
            </div>
        </div>
    )
}

export default Detail
