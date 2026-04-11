import React, { createContext, useState } from 'react';

export const BookContext = createContext()
const BookShear = ({ children }) => {

    const [SelectedReadBook, setSelectedReadBook] = useState([])
    const MarkReadHandler = (SelectedData) => {
        const ExistedBook = SelectedReadBook.find((book) => book.bookId == SelectedData.bookId);
        if (ExistedBook) {
            alert("hi")
        }
        else {
            setSelectedReadBook([...SelectedReadBook, SelectedData])
        }
    }

    const data = {
        SelectedReadBook, setSelectedReadBook, MarkReadHandler
    }
    return <BookContext.Provider
        value={data}>{children}</BookContext.Provider>
};

export default BookShear;