import GuardianDogs from '../assets/Alabay Games/Alabay Guard prev gradient.png';
import Pause from '../assets/Alabay Games/Polygon 1.png';
import abilities from '../assets/Alabay Games/Abilities 2.png';
import artifacts from '../assets/Alabay Games/artifacts 2.png';
import guard from '../assets/Alabay Games/image 3 alabay guard 2.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const DiscoverGames = [
    { id: 0, image: abilities },
    { id: 1, image: artifacts },
    { id: 2, image: guard }
];

const Guardian = () => {
    const [scroll, setScroll] = useState(false);
   
    return (
        <section
            style={{
                backgroundImage: `url(${GuardianDogs})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                height: '100%',
                width: '100%'
            }}
            className=''>
            <div
                className='absolute right-2 top-[30%] '
                onClick={() => setScroll((prev) => !prev)}>
                <button
                    className={` ${
                        !scroll ? 'bg-[#d9d9d99e]' : 'bg-[#A4A8FF]'
                    }  p-1 rounded-[3px] w-6 h-6`}>
                    <svg
                        width='16'
                        height='13'
                        viewBox='0 0 16 13'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path
                            d='M7.13398 0.499999C7.51888 -0.166668 8.48112 -0.166667 8.86602 0.5L14.9282 11C15.3131 11.6667 14.832 12.5 14.0622 12.5H1.93782C1.16802 12.5 0.686897 11.6667 1.0718 11L7.13398 0.499999Z'
                            fill={`${!scroll ? 'white' : '#353535'}`}
                        />
                    </svg>
                </button>
                <div className='bg-[#d9d9d99e] w-6 h-[35dvh] my-2 rounded-full'>
                    <div
                        className={`h-[17.5dvh] w-6  bg-[#A4A8FF] rounded-full ${
                            !scroll ? 'translate-y-0' : 'translate-y-full'
                        }`}
                    />
                </div>
                <button
                    className={`${
                        !scroll ? 'bg-[#A4A8FF]' : 'bg-[#d9d9d99e]'
                    }  p-1 rounded-[3px]  w-6 h-6`}>
                    <svg
                        className='rotate-180'
                        width='16'
                        height='13'
                        viewBox='0 0 16 13'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path
                            d='M7.13398 0.499999C7.51888 -0.166668 8.48112 -0.166667 8.86602 0.5L14.9282 11C15.3131 11.6667 14.832 12.5 14.0622 12.5H1.93782C1.16802 12.5 0.686897 11.6667 1.0718 11L7.13398 0.499999Z'
                            fill={`${!scroll ? '#353535' : 'white'}`}
                        />
                    </svg>
                </button>
            </div>
            <div
                className='mx-auto w-[90%] pt-28 pb-16'
                onClick={() => setScroll((prev) => !prev)}>
                <h2 className='sigmar-regular text-5xl font-bold text-white max-w-[600px]'>
                    ALABAY GUARDIAN{' '}
                    <span className='text-3xl text-[#A4A8FF]'>
                        SHEPHERD OF THE STEPPES
                    </span>
                </h2>

                <div className={`${!scroll ? 'block' : 'hidden'}`}>
                    <p className='font-montserrat font-bold text-white mt-10 max-w-[250px] md:max-w-[410px]'>
                        Take on the role of the legendary Alabay on a quest to
                        uncover the ancient secrets of its ancestors.
                    </p>
                    <button className='bg-[#A4A8FF] rounded-[30px] flex gap-4 items-center w-40 p-2 mt-10'>
                        <img
                            src={Pause}
                            alt=''
                            className='bg-[#201E26] rounded-full p-2'
                        />
                        <p className='font-bold pl-4'>PLAY</p>
                    </button>

                    <div className='mt-20 relative'>
                        <h3 className='text-white font-montserrat font-extrabold text-3xl text-center lg:text-start'>
                            <span className='text-[#A4A8FF]'>GAME</span>{' '}
                            PREVIEWS
                        </h3>

                        <div className='mt-5 flex flex-wrap justify-center lg:justify-normal gap-8 relative w-full'>
                            {DiscoverGames.map((item) => (
                                <div key={item.id} className=''>
                                    <img
                                        src={item.image}
                                        alt={`Image ${item.id}`}
                                        className='w-64 h-64  rounded-2xl  object-cover border-white border-2'
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className={`mt-16 ${scroll ? 'block' : 'hidden'}`}>
                    <h3 className='text-[#A4A8FF] text-2xl font-bold font-montserrat'>
                        FEATURES
                    </h3>

                    <p className='text-[16px] font-bold font-montserrat text-white mt-3'>
                        Explore a variety of landscapes, including{' '}
                        <span className='text-[#A4A8FF]'>mountains</span>,
                        <span className='text-[#A4A8FF]'> forests</span>,{' '}
                        <span className='text-[#A4A8FF]'> deserts</span>, and{' '}
                        <span className='text-[#A4A8FF]'> ancient ruins</span>.
                    </p>
                    <p className='text-[16px] font-bold font-montserrat text-white mt-3 max-w-[950px]'>
                        Use the Alabay&apos;s{' '}
                        <span className='text-[#A4A8FF]'>abilities</span> to
                        solve <span className='text-[#A4A8FF]'>puzzles</span>{' '}
                        that involve moving objects, activating mechanisms, or
                        finding hidden clues.
                    </p>
                    <p className='text-[16px] font-bold font-montserrat text-white mt-3 max-w-[960px]'>
                        Discover relics that tell the story of the Alabay’s
                        ancestors, each piece contributing to a larger narrative
                        about the breed&apos;s role in ancient history.
                    </p>
                    <p className='text-[16px] font-bold font-montserrat text-white mt-3'>
                        Unlock new skills and abilities for the Alabay,
                        enhancing its capacity to explore and solve puzzles.
                    </p>

                    <div className='mt-3 text-[16px] font-bold font-montserrat text-white'>
                        <p className=''>Challenge Modes:</p>
                        <p className='pl-4 max-w-[960px]'>
                            {' '}
                            -{' '}
                            <span className='text-[#A4A8FF]'>
                                Time Trials:
                            </span>{' '}
                            Compete in special timed challenges where the Alabai
                            must navigate through complex mazes or complete
                            puzzles within a time limit.
                        </p>
                        <p className='pl-4 max-w-[980px]'>
                            -{' '}
                            <span className='text-[#A4A8FF]'>
                                Exploration Mastery:
                            </span>{' '}
                            A mode that rewards players for fully exploring
                            every nook and cranny of the game’s world,
                            uncovering all secrets
                        </p>
                    </div>

                    <div className='mt-8 flex gap-10 items-center'>
                        <button className='bg-white rounded-[30px] flex gap-4 items-center w-40 p-2 mt-10'>
                            <img
                                src={Pause}
                                alt=''
                                className='bg-[#201E26] rounded-full p-2'
                            />
                            <p className='font-bold pl-0 xss:pl-4'>PLAY</p>
                        </button>
                        <Link
                            to={'/'}
                            className='bg-transparent border-white border-[3px] rounded-[30px]  w-40 p-2 mt-10 text-center'>
                            <p className='font-bold text-white'>EXIT</p>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Guardian;
