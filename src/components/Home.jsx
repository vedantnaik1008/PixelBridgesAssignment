import Hero_Dog from '../assets/Shepherd dog.png';
import rectangle2 from '../assets/Rectangle_2.png';
import line from '../assets/Line 3.png';
import HeroSlider from './HeroSlider';

const Home = () => {
    return (
        <section className='bg-rectangle2'>
            <div className='relative'>
                <img
                    src={rectangle2}
                    alt=''
                    className='bg-no-repeat  h-[105dvh] w-full absolute left-0 top-0 z-[1]'
                />
                <div className=' mx-auto w-[90%]'>
                    <img
                        src={line}
                        alt='line'
                        className='absolute  left-[45%]  top-5 bg-no-repeat w-[10%] z-[1]'
                    />
                </div>

                <div
                    className='flex flex-col items-center md:items-baseline 
                 xl:items-stretch md:flex-row gap-8 w-[90%] mx-auto  z-10 relative'>
                    <div className='mt-5 md:mt-0 md:w-[56%] relative'>
                        <img
                            src={Hero_Dog}
                            alt='Hero dog'
                            className='w-full md:absolute md:top-[11%] xl:top-[13%] reflect'
                        />
                    </div>
                    <div className='md:w-[40%] flex flex-col md:h-[90dvh] justify-center  gap-3 '>
                        <p className='text-[#F76902] text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center md:text-right   sigmar-regular'>
                            History Of
                        </p>
                        <h1 className='text-white xss:text-[#F76902] md:text-white text-5xl md:text-6xl lg:text-7xl xl:text-[83px] sigmar-regular  text-center md:text-right'>
                            ALABAY
                        </h1>
                        <p className='ml-auto max-w-[420px] text-[#353535] md:text-lg lg:text-xl xl:text-2xl  font-bold font-kumbh text-center md:text-right'>
                            The Central Asian Shepherd Dog, also known as
                            Alabay, has been a guardian of livestock and
                            property for centuries. Originating from Central
                            Asia, these dogs are renowned for their courage,
                            strength, and loyalty.
                        </p>
                    </div>
                </div>
            </div>

            <HeroSlider />
        </section>
    );
};

export default Home;
