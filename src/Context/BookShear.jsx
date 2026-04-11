import React, { createContext, useState } from 'react';

export const BookContext = createContext()
const BookShear = ({ children }) => {

    const [SelectedReadBook, setSelectedReadBook] = useState([])
    const MarkReadHandler = (SelectedData) => {
        const ExistedBook = SelectedReadBook.find((book) => book.bookId == SelectedData.bookId);
        if (ExistedBook) {
            alert("Read to go")
        }
        else {
            setSelectedReadBook([...SelectedReadBook, SelectedData])
        }
    }

    const [WishReadBook, setWishReadBook] = useState([])
    const MarkWishHandler = (WishData) => {
        const IsONRead = SelectedReadBook.find((Book) => Book.bookId == WishData.bookId);
        if (IsONRead) {
            alert("i am done al")
            return
        }
        const ExistedBook = WishReadBook.find((book) => book.bookId == WishData.bookId);
        if (ExistedBook) {
            alert("Wish to go")
        }
        else {
            setWishReadBook([...WishReadBook, WishData])
        }
    }

    const dataRead = {
        SelectedReadBook, setSelectedReadBook, MarkReadHandler
        , WishReadBook, setWishReadBook, MarkWishHandler
    }
    return <BookContext.Provider
        value={dataRead}>{children}</BookContext.Provider>
};

export default BookShear;