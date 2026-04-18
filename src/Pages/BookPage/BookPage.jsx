import React, { useContext, useState } from 'react';
import { BookContext } from '../../Context/BookShear';
import Bookhave from './Bookhave';
import BookWish from './BookWish';

const BookPage = () => {
    const { SelectedReadBook, WishReadBook } = useContext(BookContext)
    console.log(SelectedReadBook)
    const [ToggleForselected, setToggleForselected] = useState("Read")
    return (
        <>
            <div className="bg-[#13131310] rounded-2xl mx-20 mt-8">
                <h1 className='py-9 font-bold  text-center text-3xl'>Books</h1>
            </div>
            <div className="mt-10 mx-20 ">
                <div className="join grid grid-cols-2 w-xs">
                    <button onClick={() => setToggleForselected("Read")} className={`join-item btn outline-none border-none shadow-none ${ToggleForselected === "Read" ? "bg-[#23BE0A] text-white" : "bg-base-300 text-black"}`} >Read Books</button>
                    <button onClick={() => setToggleForselected("Wish")} className={`join-item btn outline-none border-none shadow-none ${ToggleForselected === "Wish" ? "bg-[#23BE0A] text-white" : "bg-base-300 text-black"} `}>Wishlist Books</button>
                </div>
            </div>
            {
                ToggleForselected === "Read" ?
                    <>
                        <div>
                            {SelectedReadBook.map((Read, index) => <Bookhave Read={Read} key={index}></Bookhave>)}
                        </div >
                    </>
                    :
                    <>
                        <div>
                            {WishReadBook.map((Wish, index) => <BookWish Wish={Wish} key={index}></BookWish>)}
                        </div >
                    </>
            }

        </>
    );
};

export default BookPage;