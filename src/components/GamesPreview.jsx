import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { useRef } from 'react';
import right_arrow from '../assets/right_arrow.svg';

import abilities from '../assets/Alabay Games/Abilities 2.png';
import artifacts from '../assets/Alabay Games/artifacts 2.png';
import guard from '../assets/Alabay Games/image 3 alabay guard 2.png';


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
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false
            }
        }
    ]
};

const DiscoverGames = [
    { id: 0, image: abilities },
    { id: 1, image: artifacts },
    { id: 2, image: guard }
];

const GamesPreview = () => {
    let sliderRef = useRef(null);

    const previous = () => {
        sliderRef.slickPrev();
    };

    const next = () => {
        sliderRef.slickNext();
    };
    return (
        <div className='mt-20 relative'>
            <h3 className='text-[#353535] font-montserrat font-extrabold text-4xl'>
                <span className='text-[#FFA800]'>GAME</span> PREVIEWS
            </h3>

            <div className='mt-5 overflow-hidden'>
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
                                className='w-[90%]  rounded-2xl  object-cover'
                            />
                        </div>
                    ))}
                </Slider>
            </div>
            <div className=''>
                {/* <button
                        onClick={previous}
                        className='absolute left-0 top-1/2 bg-[#353535] p-2 rounded-xl'>
                        <img src={left_arrow} alt='' className='w-8 h-12' />
                    </button> */}
                <button
                disabled={DiscoverGames.length <= 3}
                    onClick={next}
                    className='absolute -right-[2%] top-1/2 bg-[#353535] px-2 py-4 rounded-xl'>
                    <img src={right_arrow} alt='' className='w-10 h-10' />
                </button>
            </div>
        </div>
    );
};

export default GamesPreview;
