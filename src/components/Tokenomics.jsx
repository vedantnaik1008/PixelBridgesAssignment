import rectangle from '../assets/Rectangle_4.png';
import MoneyDog from '../assets/Tokenomics.png';

const Tokenomics = () => {
    return (
        <section className='relative'>
            <img
                src={rectangle}
                alt=''
                className='absolute h-[110%]  w-full -top-[5%]  left-0 z-[1]'
            />
            <div className=' mx-auto w-[90%] py-20 overflow-hidden relative z-10'>
                <h2 className='break-words text-center md:text-start text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white mt-16'>
                    TOKENOMICS
                </h2>
                <div className='mt-10 md:mt-5 flex flex-col justify-center gap-8 md:gap-0 md:flex-row md:justify-between'>
                    <div className='flex flex-col gap-8 w-full md:w-[40%] font-montserrat justify-center'>
                        <div className='bg-[#353535] py-2.5 px-8 shadow-md shadow-[#353535] rounded-2xl   w-full xl:w-[65%] text-center md:text-start'>
                            <span className='text-white font-extrabold text-lg md:text-lg lg:text-xl'>
                                LIQUIDITY
                            </span>
                            <p className='text-[#FFF280] font-extrabold text-3xl md:text-3xl lg:text-4xl'>
                                LOCKED
                            </p>
                        </div>

                        <div className='bg-[#353535] py-2.5 px-8 shadow-md shadow-[#353535] rounded-2xl   w-full xl:w-[65%] text-center md:text-start'>
                            <span className='text-white font-extrabold text-lg md:text-lg lg:text-xl'>
                                CONTRACT
                            </span>
                            <p className='text-[#FFF280] font-extrabold text-3xl md:text-3xl lg:text-4xl'>
                                RENOUNCED
                            </p>
                        </div>

                        <div className='bg-[#353535] py-2.5 px-8 shadow-md shadow-[#353535] rounded-2xl   w-full xl:w-[65%] text-center md:text-start'>
                            <span className='text-white font-extrabold text-lg md:text-lg lg:text-xl'>
                                TAXES
                            </span>
                            <p className='text-[#FFF280] font-extrabold text-3xl md:text-3xl lg:text-4xl'>
                                0%
                            </p>
                        </div>
                    </div>
                    <img
                        src={MoneyDog}
                        alt='money dog'
                        className=' lg:w-[45%] reflect_3 overflow-hidden'
                    />
                </div>
            </div>
        </section>
    );
};

export default Tokenomics;
