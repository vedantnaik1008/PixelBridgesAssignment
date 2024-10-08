import photo1 from '../assets/Frame 9.png';
import photo2 from '../assets/Frame 12.png';
import left_arrow from '../assets/left_arrow.svg';
import right_arrow from '../assets/right_arrow.svg';
import { useRef, useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const ALL = [
    { id: 0, image: photo1 },
    { id: 2, image: photo2 },
    { id: 3, image: photo2 },
    { id: 4, image: photo2 }
];
const PHOTOS = [{ id: 0, image: photo1} ,{ id: 2, image: photo2 },
    { id: 3, image: photo2 },
    { id: 4, image: photo2 } ];
const VIDEOS = [
    { id: 0, image: photo2 },
    { id: 2, image: photo2 },
    { id: 3, image: photo2 },
    { id: 4, image: photo2 }
];

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    autoplaySpeed: 3000,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                dots: false
            }
        }
    ]
};

const HeroSlider = () => {
    const [tab, setTab] = useState('ALL');
    let sliderRef = useRef(null);

    const previous = () => {
        sliderRef.slickPrev();
    };

    const next = () => {
        sliderRef.slickNext();
    };

    return (
        <div className='mt-32 md:w-[80%] lg:w-[90%] xl:w-[90%] mx-auto relative'>
            <div className='flex justify-center gap-8'>
                <button
                    className={`cursor-pointer text-xl   relative font-montserrat font-extrabold z-20 ${
                        tab === 'ALL' ? 'text-yellow-400' : 'text-black'
                    }`}
                    onClick={() => setTab('ALL')}>
                    ALL
                </button>
                <button
                    className={`cursor-pointer text-xl font-montserrat font-extrabold  relative z-20 ${
                        tab === 'PHOTOS' ? 'text-yellow-400' : 'text-black'
                    }`}
                    onClick={() => setTab('PHOTOS')}>
                    PHOTOS
                </button>
                <button
                    className={`cursor-pointer text-xl font-montserrat font-extrabold  relative z-20 ${
                        tab === 'VIDEOS' ? 'text-yellow-400' : 'text-black'
                    }`}
                    onClick={() => setTab('VIDEOS')}>
                    VIDEOS
                </button>
            </div>
            <div className='relative overflow-hidden mt-8'>
                <div className=' transition-transform duration-300 ease-in-out lg:w-[70%]  xl:w-[90%] mx-auto'>
                    <Slider
                        ref={(slider) => {
                            sliderRef = slider;
                        }}
                        {...settings}>
                        {tab === 'ALL' &&
                            ALL.map((item) => (
                                <div
                                    key={item.id}
                                    className='flex lg:gap-4 xl:gap-10 justify-center custom-flex-container'>
                                    <img
                                        src={item.image}
                                        alt={`Image ${item.id}`}
                                        className='md:w-[250px] lg:w-[280px] xl:w-[300px] transition-all duration-300 ease-in-out'
                                    />
                                </div>
                            ))}
                        {tab === 'PHOTOS' &&
                            PHOTOS.map((item) => (
                                <div
                                    key={item.id}
                                    className='flex justify-center gap-10 custom-flex-container'>
                                    <img
                                        src={item.image}
                                        alt={`Image ${item.id}`}
                                        className='md:w-[250px] lg:w-[280px] xl:w-[300px] transition-all duration-300 ease-in-out'
                                    />
                                </div>
                            ))}
                        {tab === 'VIDEOS' &&
                            VIDEOS.map((item) => (
                                <div
                                    key={item.id}
                                    className='flex gap-10 justify-center custom-flex-container'>
                                    <img
                                        src={item.image}
                                        alt={`Image ${item.id}`}
                                        className='md:w-[250px] lg:w-[280px] xl:w-[300px] transition-all duration-300 ease-in-out'
                                    />
                                </div>
                            ))}
                    </Slider>
                </div>
            </div>
            <div className=''>
                <button
                    onClick={previous}
                    className='absolute left-0 md:-left-16 lg:left-10 xl:left-0 top-1/2 bg-[#353535] p-2 rounded-xl'>
                    <img src={left_arrow} alt='' className='w-8 h-12' />
                </button>
                <button
                    onClick={next}
                    className='absolute right-0 md:-right-16  lg:right-10 xl:right-0 top-1/2 bg-[#353535] p-2 rounded-xl'>
                    <img src={right_arrow} alt='' className='w-8 h-12' />
                </button>
            </div>
        </div>
    );
};

export default HeroSlider;
