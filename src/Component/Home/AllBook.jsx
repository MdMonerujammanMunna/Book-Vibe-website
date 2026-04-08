import React, { use } from 'react';
import SingleData from './SingleData/SingleData';
const BookData = fetch("/data/booksData.json").then(res => res.json())

const AllBook = () => {
    const Data = use(BookData)
    return (
        <> <section className='max-w-11/12 mx-auto'>
            <div className='mb-9'>
                <h2 className='text-4xl font-bold text-center'>Book</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    Data.map(item => <SingleData item={item}></SingleData>)
                }
            </div>
        </section>
        </>
    );
};

export default AllBook;