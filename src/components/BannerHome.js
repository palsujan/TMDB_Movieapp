import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

const BannerHome = () => {
    const bannerData = useSelector(state => state.movies.bannerData);
    const imageURL = useSelector(store => store.movies.imageURL);

    const [currentImages, setCurrentImages] = useState(0);

    const handleNext = () => {
        setCurrentImages(prev => (prev < bannerData.length - 1 ? prev + 1 : 0));
    };

    const handlePrev = () => {
        setCurrentImages(prev => (prev > 0 ? prev - 1 : bannerData.length - 1));
    };

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 5000);

        return () => clearInterval(interval);
    }, [currentImages, bannerData.length]);

    return (
        <section className='w-full h-full'>
            <div className='flex min-h-full max-h-[95vh] overflow-hidden'>
                {bannerData.map((data, index) => (
                    <div
                        key={data.id+"bannerHome"+index}
                        className='min-w-full min-h-[450] lg:min-h-full overflow-hidden relative transition-all group'
                        style={{ transform: `translateX(-${currentImages * 100}%)` }}
                    >
                        <div className='w-full h-full'>
                            <img
                                src={imageURL + data.backdrop_path}
                                alt=''
                                className='h-full w-full object-cover'
                            />
                        </div>

                        <div className='absolute top-0 w-full h-full hidden items-center justify-between px-4 group-hover:lg:flex'>
                            <button onClick={handlePrev} className='bg-white z-10 p-1 rounded-full text-2xl text-black'>
                                <FaAngleLeft />
                            </button>
                            <button onClick={handleNext} className='bg-white z-10 p-1 rounded-full text-2xl text-black'>
                                <FaAngleRight />
                            </button>
                        </div>

                        <div className="absolute top-0 w-full h-full bg-gradient-to-t from-neutral-900 to-transparent"></div>
                        <div className='container mx-auto py-40 lg:py-0'>
                            <div className='bottom-0 max-w-md px-3 absolute'>
                                <h2 className='font-bold text-2xl lg:text-4xl text-white drop-shadow-3xl'>{data?.title || data?.name}</h2>
                                <p className='text-ellipsis line-clamp-3 my-2'>{data.overview}</p>
                                <div className='flex items-center gap-4'>
                                    <p>Rating: {Number(data.vote_average).toFixed(1)}</p>
                                    <span>|</span>
                                    <p>View: {Number(data.popularity).toFixed(0)}</p>
                                </div>
                                <button className='px-4 py-2 text-black font-bold mt-4 rounded bg-white hover:bg-gradient-to-l from-red-700 to-orange-500 shadow-md transition-all'>
                                    Play Now
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BannerHome;
