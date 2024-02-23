import React from 'react';

const ShowBook = ({ book }) => {
    return (
        <div key={book.id}>
            <div>
                <p>{book.name}</p>
                <img src={`http://localhost:3001/images/`+book.image} className='w-[300px]'/>
                <button>Delete</button>
            </div>
        </div>
    );
};

export default ShowBook;
