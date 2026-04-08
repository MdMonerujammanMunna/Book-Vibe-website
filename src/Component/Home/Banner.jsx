import React from 'react';
import BookHero from '../../assets/pngwing 1.png'
const Banner = () => {
    return (
        <>
            <div className="mt-10 mb-25 px-30 py-20 bg-[#13131305] max-w-11/12 mx-auto rounded-4xl">
                <div className=" flex lg:flex-row text-left lg:text-left md:text-center flex-col-reverse justify-between items-center gap-20">
                    <div className='flex-1'>
                        <h1 className="text-[56px] font-bold Playfair">Books to freshen up <br /> your bookshelf</h1>
                        <button className="btn px-7 py-5 bg-[#23BE0A]  font-bold text-white mt-12">View The List</button>
                    </div>
                    <img
                        src={BookHero}
                        className="max-w-sm rounded-lg flex-1"
                    />

                </div>
            </div>
        </>
    );
};

export default Banner;