import React from 'react';
import { TiStarOutline } from "react-icons/ti";
import { Link } from 'react-router';
const SingleData = ({ item }) => {
    return (
        <>
            <Link to={`BookDetails/${item.bookId}`}>
                <div className="card p-8 shadow-sm">
                    <figure className='bg-[#F3F3F3] rounded-xl'>
                        <div className="py-8"><img className='w-[130px] h-[170px] rounded-sm ' src={item.image} alt={`${item.bookName} Image`} /></div>
                    </figure>
                    <div className="card-body">
                        <div className="mb-4">
                            {item.tags.map((tages, index) => <p key={index} className='text-[#23BE0A] btn rounded-full btn-sm mr-3'>{tages}</p>)}
                        </div>
                        <h2 className="card-title Playfair font-bold text-2xl mb-4">{item.bookName}</h2>
                        <p className='font-medium text-[#13131380]'>By: {item.author}</p>
                        <hr className='my-6 text-[#13131325] border-2 border-dashed' />
                        <div className='flex justify-between items-center font-medium text-[#13131380]'>
                            <p className=''>{item.category}</p>
                            <div className="flex items-center gap-2"><span className=' font-bold'>{item.rating}</span><TiStarOutline className='text-xl font-bold' /></div>
                        </div>
                    </div>
                </div>
            </Link >
        </>
    );
};

export default SingleData;