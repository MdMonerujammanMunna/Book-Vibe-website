import React from 'react';

const BookPage = () => {
    return (
        <>
            <div className="bg-[#13131310] rounded-2xl mx-4 mt-8">
                <h1 className='py-9 font-bold  text-center text-3xl'>Books</h1>
            </div>
            <div className="mt-30 container mx-auto">
                <div className="join grid grid-cols-2 w-xs">
                    <button className="join-item btn ">Read Books</button>
                    <button className="join-item btn ">Wishlist Books</button>
                </div>

            </div>
        </>
    );
};

export default BookPage;