import React from 'react';
import { CiLocationOn } from "react-icons/ci";
import { MdGroups2 } from "react-icons/md";
import { MdOutlineAnalytics } from "react-icons/md";
const Bookhave = ({ name }) => {
    return (
        <>
            <div className="card lg:card-side bg-base-100 shadow-sm my-12 mx-20 flex items-center ">
                <figure className='bg-[#F3F3F3] rounded-xl ml-10'>
                    <div className="py-8  px-4">
                        <img className='h-32 w-25' src={name.image} alt={`${name.bookName} Image`} /></div>
                </figure>
                <div className="card-body flex-1">
                    <h2 className="card-title">{name.bookName}</h2>
                    <p className='font-medium text-[#13131380]'>By: {name.author}</p>
                    <div className="mb-4 md:flex items-center gap-4">
                        <div className="mb-4 md:mb-0">
                            <span className='font-bold mr-4'>Tag</span>
                            {name.tags.map((tages, index) => <p key={index} className='text-[#23BE0A] btn rounded-full btn-sm mr-3'>{tages}</p>)}
                        </div>
                        <div className="flex items-center gap-2">
                            <CiLocationOn className='font-bold text-xl' />
                            <span>Year of Publishing: {name.yearOfPublishing}</span>
                        </div>
                    </div>
                    <div className="md:flex items-center gap-2 text-[#13131360]">
                        <div className="flex items-center gap-2">
                            <MdGroups2 className='font-bold text-xl' />
                            <span>Publisher: {name.publisher}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MdOutlineAnalytics className='font-bold text-xl' />
                            <span>Page {name.totalPages}</span>
                        </div>
                    </div>
                    <hr className='my-4 text-[#13131380]' />
                    <div className="md:flex items-center gap-4">
                        <button className='btn rounded-full font-normal bg-[#328EFF20] shadow-none outline-none border-none text-[#328EFF]'>Category: {name.category}</button>
                        <button className='btn rounded-full font-normal bg-[#FFAC3320] shadow-none outline-none border-none text-[#FFAC33]'>Rating: {name.rating}</button>
                        <button className='mt-4 md:mt-0 btn rounded-full bg-[#23BE0A] shadow-none outline-none border-none text-white font-medium'>View Details</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Bookhave;