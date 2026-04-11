import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { BookContext } from '../../../Context/BookShear';

const Bookdetails = () => {
    const { MarkReadHandler, SelectedReadBook, MarkWishHandler } = useContext(BookContext)
    console.log(MarkReadHandler, SelectedReadBook)

    const AllData = useLoaderData()
    const { ID } = useParams()
    const SelectedData = AllData.find((items) => items.bookId == ID)
    return (
        <>
            <div className="card lg:card-side shadow-sm max-w-11/12 mx-auto mt-14 gap-12 justify-between">
                <figure>
                    <div className="p-17 bg-base-300 rounded-2xl flex-1">
                        <img
                            src={SelectedData.image}
                            alt="Album" className='h-138 w-full rounded-xl' />
                    </div>
                </figure>
                <div className="card-body flex-1">

                    <div className="">
                        <h2 className="card-title text-[40px] font-bold Playfair mb-4">{SelectedData.bookName}</h2>
                        <p className='font-medium text-xl text-[#13131380] mb-6'>By: {SelectedData.author}</p>
                    </div>

                    <hr className='text-[#13131315]' />

                    <div className="">
                        <p className='font-medium text-xl text-[#13131380] py-4'>{SelectedData.category}</p>
                    </div>

                    <hr className='text-[#13131315]' />

                    <div className="mb-6">
                        <p><span className='font-bold'>Review: </span>{SelectedData.review}</p>
                    </div>

                    <div className="mb-6">
                        <span className='mr-4 font-bold'>Tag</span>
                        {SelectedData.tags.map((tages, index) => <p key={index} className='text-[#23BE0A] btn rounded-full btn-sm mr-3'>{`# ${tages}`}</p>)}
                    </div>

                    <hr className='text-[#13131315]' />

                    <div className="mt-6 space-y-3 text-[#13131370]">
                        <p>Number of Pages: <span className='font-bold text-[#131313]'>{SelectedData.totalPages}</span></p>
                        <p>Publisher: <span className='font-bold text-[#131313]'>{SelectedData.publisher}</span></p>
                        <p>Year of Publishing: <span className='font-bold text-[#131313]'>{SelectedData.yearOfPublishing}</span></p>
                        <p>Rating: <span className='font-bold text-[#131313]'>{SelectedData.rating}</span></p>

                    </div>
                    <div className="card-actions mt-8">
                        <button className="btn btn-outline" onClick={() => MarkReadHandler(SelectedData)}>Read</button>
                        <button className="btn text-white shadow-none outline-none border-none bg-[#50B1C9]" onClick={() => MarkWishHandler(SelectedData)}>Wishlist</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Bookdetails;