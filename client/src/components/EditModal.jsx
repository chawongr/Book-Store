import React, { useState } from 'react';

const EditModal = ({ isOpen, onRequestClose, book }) => {
  const [editedData, setEditedData] = useState({
    name: book?.name || '',
    author: book?.author || '',
    subtitle: book?.subtitle || '',
    description: book?.description || '',
    editor: book?.editor || '',
    price: book?.price || 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    // Add your logic for updating the book data here
    console.log('Editing book:', editedData);
    onRequestClose();
  };

  return (
    <div>
      <h2>Edit Book</h2>
      <form onSubmit={handleEditSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={editedData.name} onChange={handleInputChange} />
        </label>
        {/* Add more input fields for other book properties */}
        <button type="submit">Save Changes</button>
      </form>
      <button onClick={onRequestClose}>Cancel</button>
    </div>
  );
};

export default EditModal;
