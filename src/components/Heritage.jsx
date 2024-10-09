import HeritageDogs from '../assets/Alabay Games/Alabay heritage prev gradient.png';
import Pause from '../assets/Alabay Games/Polygon 1.png';
import abilities from '../assets/Alabay Games/Abilities 2.png';
import artifacts from '../assets/Alabay Games/artifacts 2.png';
import overview from '../assets/Alabay Games/Alabay Adventure - The Lost Heritage/overview.png';
import locations from '../assets/Alabay Games/Alabay Adventure - The Lost Heritage/locations preview.png';
import { Link } from 'react-router-dom';

const DiscoverGames = [
    { id: 0, image: overview },
    { id: 1, image: abilities },
    { id: 2, image: artifacts },
    { id: 4, image: locations }
];

const Heritage = () => {
    return (
        <section
            style={{
                backgroundImage: `url(${HeritageDogs})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                height: '100%',
                width: '100%'
            }}
            className=''>
            <div className='mx-auto w-[90%] pt-28 pb-16'>
                <h2 className='text-5xl font-bold text-white max-w-[480px]'>
                    ALABAY HERITAGE{' '}
                    <span className='text-3xl text-[#90FFAE]'>
                        THE LOST ADVENTURE
                    </span>
                </h2>

                <div className=''>
                    <p className='font-montserrat font-bold text-white mt-10 max-w-[410px]'>
                        Take on the role of the legendary Alabay on a quest to
                        uncover the ancient secrets of its ancestors.
                    </p>
                    <button className='bg-[#90FFAE] rounded-[30px] flex gap-4 items-center w-40 p-2 mt-10'>
                        <img
                            src={Pause}
                            alt=''
                            className='bg-[#201E26] rounded-full p-2'
                        />
                        <p className='font-bold pl-4'>PLAY</p>
                    </button>

                    <div className='mt-20 relative'>
                        <h3 className='text-white font-montserrat font-extrabold text-3xl text-center lg:text-start'>
                            <span className='text-[#90FFAE]  '>GAME</span>{' '}
                            PREVIEWS
                        </h3>

                        <div className='mt-5 flex flex-wrap justify-center lg:justify-normal gap-8 relative w-full'>
                            {DiscoverGames.map((item) => (
                                <div key={item.id} className=''>
                                    <img
                                        src={item.image}
                                        alt={`Image ${item.id}`}
                                        className={`w-64 h-64  rounded-2xl  object-cover border-white border-2`}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className='mt-16 '>
                    <h3 className='text-[#90FFAE] text-2xl font-bold font-montserrat'>
                        FEATURES
                    </h3>

                    <p className='text-[16px] font-bold font-montserrat text-white mt-3'>
                        Explore a variety of landscapes, including{' '}
                        <span className='text-[#90FFAE]'>mountains</span>,
                        <span className='text-[#90FFAE]'> forests</span>,{' '}
                        <span className='text-[#90FFAE]'> deserts</span>, and{' '}
                        <span className='text-[#90FFAE]'> ancient ruins</span>.
                    </p>
                    <p className='text-[16px] font-bold font-montserrat text-white mt-3 max-w-[950px]'>
                        Use the Alabay&apos;s{' '}
                        <span className='text-[#90FFAE]'>abilities</span> to
                        solve <span className='text-[#90FFAE]'>puzzles</span>{' '}
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
                            <span className='text-[#90FFAE]'>
                                Time Trials:
                            </span>{' '}
                            Compete in special timed challenges where the Alabai
                            must navigate through complex mazes or complete
                            puzzles within a time limit.
                        </p>
                        <p className='pl-4 max-w-[980px]'>
                            -{' '}
                            <span className='text-[#90FFAE]'>
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
                            <p className='font-bold pl-4'>PLAY</p>
                        </button>
                        <Link to={'/'} className='bg-transparent border-white border-[3px] rounded-[30px]  w-40 p-2 mt-10 text-center'>
                            <p className='font-bold text-white'>EXIT</p>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Heritage;
