import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { useRef } from 'react';
import arrow from '../assets/Arrow 3.png';
import right_arrow from '../assets/right_arrow.svg';
import alabayGuard from '../assets/Alabay Games/alabay guard prev 2 1.png';
import alabayHeritage from '../assets/Alabay Games/alabay lost heritage prev 1.png';
import GamesPreview from './GamesPreview';

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
};

const DiscoverGames = [
    { id: 0, image: alabayGuard, color: '843AFC' },
    { id: 1, image: alabayHeritage, color: '45D689' }
];

const Games = () => {
    let sliderRef = useRef(null);

    const previous = () => {
        sliderRef.slickPrev();
    };

    const next = () => {
        sliderRef.slickNext();
    };
    return (
        <div className='mt-40'>
            <div className='flex flex-col items-center'>
                <h2 className='text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white'>
                    GAMES
                </h2>
                <p className='md:text-2xl lg:text-3xl xl:text-4xl font-extrabold font-montserrat text-[#353535] mt-4'>
                    Stay tuned for upcoming games !
                </p>
            </div>
            <div className='mt-28 relative mx-auto w-full md:w-[90%] lg:w-[80%]'>
                <Slider
                    ref={(slider) => {
                        sliderRef = slider;
                    }}
                    {...settings}>
                    {DiscoverGames.map((item) => (
                        <div
                            key={item.id}
                            className='flex justify-center relative'>
                            <img
                                src={item.image}
                                alt={`Image ${item.id}`}
                                className='w-full transition-all duration-300 ease-in-out border-white border-8 rounded-[30px] object-cover'
                            />
                            <button
                                style={{ backgroundColor: `#${item.color}` }}
                                className={`rounded-[30px] py-3 px-8 font-extrabold font-montserrat text-white absolute z-[10] top-[70%] left-[40%] md:left-[30%] lg:left-[40%] flex gap-6 items-center`}>
                                <span className='text-lg md:text-xl'>DISCOVER</span>{' '}
                                <img
                                    src={arrow}
                                    alt='arrow'
                                    className='w-6 h-6 md:w-7 md:h-7  lg:w-8 lg:h-8'
                                />
                            </button>
                        </div>
                    ))}
                </Slider>

                <div className=''>
                    {/* <button
                        onClick={previous}
                        className='absolute left-0 top-1/2 bg-[#353535] p-2 rounded-xl'>
                        <img src={left_arrow} alt='' className='w-8 h-12' />
                    </button> */}
                    <button
                        onClick={next}
                        className='absolute right-8 top-1/2 bg-[#353535] px-2 py-4 rounded-xl'>
                        <img src={right_arrow} alt='' className='w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10' />
                    </button>
                </div>
            </div>

            <GamesPreview />
        </div>
    );
};

export default Games;
