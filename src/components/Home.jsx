import Hero_Dog from '../assets/Shepherd dog.png';
import rectangle2 from '../assets/Rectangle_2.png'
import line from '../assets/Line 3.png'
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
                <img
                    src={line}
                    alt='line'
                    className='absolute   left-1/2 top-5 bg-no-repeat w-[10%] z-[1]'
                />

                <div className='flex gap-8 w-[90%] mx-auto  z-10 relative'>
                    <div className='w-[56%] relative'>
                        <img
                            src={Hero_Dog}
                            alt='Hero dog'
                            className='w-full absolute top-[11%] reflect'
                        />
                    </div>
                    <div className='w-[40%] flex flex-col h-[90dvh] justify-center  gap-3 '>
                        <p className='text-[#F76902] md:text-4xl lg:text-5xl xl:text-6xl text-right font-montserrat font-extrabold'>
                            History Of
                        </p>
                        <h1 className='text-white md:text-6xl lg:text-7xl xl:text-[83px] font-montserrat font-extrabold text-right'>
                            ALABAY
                        </h1>
                        <p className='ml-auto max-w-[420px] text-[#353535] md:text-lg lg:text-xl xl:text-2xl  font-bold font-kumbh text-right'>
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
