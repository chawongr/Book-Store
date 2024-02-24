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
            setIsModalOpen(false);
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
        <div className='bg-[#f0eee2] '>
            <div className='mx-auto w-[1500px]'>
                <div className='flex flex-col'>
                    <Banner />
                    <div className='mx-auto w-[1500px]'>

                        <div className='flex justify-between'>
                            <div className="relative w-11/12 mx-5">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg className="w-7 h-5 text-black " aria-hidden="true" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    className="block w-full p-4 ps-10 text-[20px] text-gray-900 border-2 border-black rounded-full bg-transparent placeholder-zinc-700 focus:outline-none"
                                    placeholder="Search by book name..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />

                            </div>
                            <button className='text-white text-[22px] bg-black w-1/12 rounded-full mr-5'>
                                <Link to='/add'>Add +</Link>
                            </button>
                        </div>

                        <div className='grid grid-cols-5 '>
                            {filteredBooks.map((book) => (
                                <div key={book.id} className='w-[200px] mx-auto'>
                                    <div>
                                        <div className='flex flex-col mt-10'>
                                            <img
                                                src={`http://localhost:3001/images/` + book.image}
                                                className='w-full hover:scale-110'
                                                style={{ boxShadow: '-12px 15px 10px 2px #545353' }}
                                                onClick={() => handleImageClick(book)}
                                            />
                                            
                                            <div className='text-[24px] font-extralight w-full mt-7'>
                                                {book.name}
                                            </div>
                                            {/* <div className='text-[24px] font-extralight w-full'>
                                                {book.author}
                                            </div>
                                            <div className='text-[24px] font-extralight w-full'>
                                                {book.price} $
                                            </div> */}
                                            {/* <button>
                                                <Link to={`/update/${book.id}`}>Update</Link>
                                            </button>
                                            <button onClick={() => handleDelete(book.id)}>
                                                Delete
                                            </button> */}
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
                className='w-2/3 h-fit my-auto mx-auto z-50 fixed inset-0 flex items-center justify-center focus:outline-none'
            >
                {selectedBook && (
                    <div className='flex flex-col items-center  bg-[#f0eee2] w-full h-850 rounded-[70px] p-[70px]'>

                        <div className=' w-full flex justify-between'>

                            <div className=' w-1/2 flex justify-center'>
                                <img
                                    src={`http://localhost:3001/images/` + selectedBook.image}
                                    className='w-[250px]'
                                    style={{ boxShadow: '-12px 15px 10px 2px #545353' }}
                                    onClick={() => handleImageClick(selectedBook)}
                                />
                            </div>

                            <div className='flex flex-col w-1/2'>

                                <div className=''>
                                    <div className=' '>
                                        <div className='text-[64px]'>{selectedBook.name}</div>
                                        <div className='text-[30px] font-light mt-5'>{selectedBook.author}</div>
                                        <div className='text-[22px] font-extralight mt-5'>{selectedBook.subtitle}</div>
                                    </div>

                                    <div className='flex flex-row mt-5'>
                                        <button className='text-white bg-black rounded-full w-fit px-6 py-2'>
                                            <Link to={`/update/${selectedBook.id}`}>Edit</Link>
                                        </button>
                                        <button className='text-white bg-black rounded-full w-fit px-6 py-2 ml-3' onClick={() => handleDelete(selectedBook.id)}>
                                            Delete
                                        </button>
                                    </div>
                                </div>


                            </div>


                        </div>

                        <div className='w-full flex justify-between mt-[4%]'>
                            <div className=' w-1/2'>
                                <div className='text-[30px] font-light'>Description</div>
                                <div className='text-[22px] font-light mt-3'>{selectedBook.description}</div>
                            </div>
                            <div className=' w-5/12'>
                                <div className='text-[30px] font-light'>Editor</div>
                                <div className='text-[22px] font-light mt-3'>{selectedBook.editor}</div>
                                <div className='text-[30px] font-light mt-7'>Price</div>
                                <div className='text-[22px] font-light mt-3'>{selectedBook.price} $</div>
                            </div>
                        </div>

                    </div>
                )}
                {/* <button className='' onClick={closeModal}>Close Modal</button> */}
            </Modal>
        </div>
    );
};

export default Book;

