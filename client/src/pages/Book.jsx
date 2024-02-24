import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Modal from 'react-modal'; //

const Book = () => {
    const [books, setBooks] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedBook, setSelectedBook] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

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
            await axios.delete(`http://localhost:3001/books/${id}`);
            const updatedBooks = books.filter(book => book.id !== id);
            setBooks(updatedBooks);
        } catch (err) {
            console.log(err);
        }
    };

    const handleImageClick = (book) => {
        setSelectedBook(book);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedBook(null);
        setIsModalOpen(false);
    };

    const filteredBooks = books.filter((book) =>
        book.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className='bg-[#f0eee2] h-full'>
            <div className='mx-auto w-[1500px] pt-[5%]'>
                <div className='flex flex-col'>
                    <Banner />
                    <div className='mx-auto w-[1500px]'>

                        <div className='flex justify-between'>
                            <div className="relative w-11/12 mx-5">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg className="w-6 h-4 text-black " aria-hidden="true" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    className="block w-full p-4 ps-10 text-sm text-gray-900 border border-black rounded-full bg-transparent placeholder-zinc-700"
                                    placeholder="Search by book name..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />

                            </div>
                            <button className='text-white text-[22px] bg-black w-1/12 rounded-full mr-5'>
                                <Link to='/add'>Add +</Link>
                            </button>
                        </div>

                        <div className='grid grid-cols-6 mt-10'>
                            {filteredBooks.map((book) => (
                                <div key={book.id} className='w-[200px] mx-auto'>
                                    <div>
                                        <div className='flex flex-col'>
                                            <img
                                                src={`http://localhost:3001/images/` + book.image}
                                                className='w-full hover:scale-110'
                                                style={{ boxShadow: '-12px 15px 10px 2px #545353' }}
                                                onClick={() => handleImageClick(book)}
                                            />
                                            <br />
                                            <div className='text-[24px] font-extralight w-full'>
                                                {book.name}
                                            </div>
                                            <div className='text-[24px] font-extralight w-full'>
                                                {book.author}
                                            </div>
                                            <div className='text-[24px] font-extralight w-full'>
                                                {book.price} $
                                            </div>
                                            <button>
                                                <Link to={`/update/${book.id}`}>Update</Link>
                                            </button>
                                            <button onClick={() => handleDelete(book.id)}>
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                className='bg-[#f0eee2] w-[500px] mx-auto z-50'
            >
                {selectedBook && (
                    <div className='flex flex-col items-center'>
                        <img
                            src={`http://localhost:3001/images/` + selectedBook.image}
                            className='w-full hover:scale-110'
                            style={{ boxShadow: '-12px 15px 10px 2px #545353' }}
                            onClick={() => handleImageClick(selectedBook)}
                        />
                        <div className='bg-red-500 w-[300px]'>
                            <div>{selectedBook.name}</div>
                        </div>
                        <button>
                            <Link to={`/update/${selectedBook.id}`}>Update</Link>
                        </button>
                    </div>
                )}
                <button onClick={closeModal}>Close Modal</button>
            </Modal>
        </div>
    );
};

export default Book;

