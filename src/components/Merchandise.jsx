import rectangle from '../assets/Rectangle_4.png';
import bhb from '../assets/Alabay Merch/black hoodie bck.png';
import bh from '../assets/Alabay Merch/black hoodie.png';
import bcb from '../assets/Alabay Merch/blue cap bck.png';
import bc from '../assets/Alabay Merch/cap mockup.png';
import ptb from '../assets/Alabay Merch/pink tee bck.png';
import pt from '../assets/Alabay Merch/pink tshirt.png';
import ytb from '../assets/Alabay Merch/yellow tee bck.png';
import yt from '../assets/Alabay Merch/yellow tshirt.png';
import left_arrow from '../assets/Alabay Merch/Arrow 4.png';
import right_arrow from '../assets/Alabay Merch/Arrow 4 (1).png';
import { useState } from 'react';
import Games from './Games';

const Merchandises = [
    {
        id: 0,
        image: bh,
        backgroundImage: bhb,
    },
    {
        id: 1,
        image: bc,
        backgroundImage: bcb,
    },
    {
        id: 2,
        image: pt,
        backgroundImage: ptb,
    },
    {
        id: 3,
        image: yt,
        backgroundImage: ytb,
    },
]

const Merchandise = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

     const Next = () => {
        
         setCurrentIndex((prevIndex) => (prevIndex + 1) % Merchandises.length);
     };

     const Prev = () => {
         setCurrentIndex(
             (prevIndex) =>
                 (prevIndex - 1 + Merchandises.length) % Merchandises.length
         );
     };
     
    return (
        <section className='pt-28 relative'>
            <img
                src={rectangle}
                alt=''
                className='absolute w-full h-[48%] top-[28%]  left-0 z-[1]'
            />
            <div className='w-[90%] mx-auto relative z-10'>
                <h2 className='text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-center text-[#FFA800]'>
                    MERCHANDISE
                </h2>

                <div className='mt-20 relative md:w-[90%] lg:w-[80%] xl:w-[70%] mx-auto'>
                    <>
                        {Merchandises.slice(0, 1).map((item) => (
                            <div
                                key={item.id}
                                className='relative rounded-3xl overflow-hidden flex justify-center items-center'
                                style={{
                                    backgroundImage: `url(${Merchandises[currentIndex].backgroundImage})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                    height: '100%', // Adjust this value as needed
                                    width: '100%'
                                }}>
                                <p className='font-extrabold absolute top-[18%] right-[10%] font-montserrat text-[#353535] text-xl'>
                                    Coming Soon...
                                </p>
                                <img
                                    src={Merchandises[currentIndex].image}
                                    alt=''
                                    className='w-full object-cover'
                                    style={{
                                        transition: 'all 500ms ease-in-out',
                                        transform: `translateX(${
                                            Merchandises[currentIndex].image !==
                                            item.image
                                                ? (currentIndex * 100) % 10
                                                : currentIndex * 0
                                        }%)`
                                    }}
                                />
                            </div>
                        ))}
                        <div className=''>
                            <button
                                onClick={Prev}
                                className='absolute left-10 top-1/2 bg-white md:p-2 lg:p-3 xl:p-4 rounded-full'>
                                <img
                                    src={left_arrow}
                                    alt=''
                                    className='md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8'
                                />
                            </button>
                            <button
                                onClick={Next}
                                className='absolute right-10 top-1/2 bg-white md:p-2 lg:p-3 xl:p-4 rounded-full'>
                                <img
                                    src={right_arrow}
                                    alt=''
                                    className='md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8'
                                />
                            </button>
                        </div>
                    </>
                </div>

                <Games />
            </div>
        </section>
    );
};

export default Merchandise;
