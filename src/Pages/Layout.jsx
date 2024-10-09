import Community from '../components/Community';
import Home from '../components/Home';
import Merchandise from '../components/Merchandise';
import ProjectVision from '../components/ProjectVision';
import SocialMediaLinks from '../components/SocialMediaLinks';
import Tokenomics from '../components/Tokenomics';
import Hero from '../assets/Hero.png';
import { motion, useScroll } from 'framer-motion';
//${!translateY ? 'translate-y-[78%]' : 'translate-y-[0%]'}
const Layout = () => {
    const { scrollYProgress } = useScroll();
    return (
        <>
            <img
                src={Hero}
                alt='Hero image'
                className='fixed top-0 left-0 w-full h-screen object-fill -z-[10]'
            />

            <div className='relative '>
                <motion.main
                    initial={{ y: '85%' }}
                    animate={{
                        y: scrollYProgress > 0 ? 0 : '85%'
                    }}
                    transition={{ duration: 0.8 }}
                    className={`md:p-6 lg:p-8 transition-all duration-500 ease-in-out h-screen`}>
                    <div className='overflow-y-scroll h-[100dvh] custom-scrollbar rounded-t-[32px] '>
                        <div className=' bg-white'>
                            <Home />
                            <ProjectVision />
                            <Community />
                            <Tokenomics />
                            <Merchandise />
                            <SocialMediaLinks />
                        </div>
                    </div>
                </motion.main>
            </div>
        </>
    );
};

export default Layout;
