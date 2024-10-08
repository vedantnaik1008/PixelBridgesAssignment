import './App.css'
import Community from './components/Community'
import Home from './components/Home'
import Merchandise from './components/Merchandise'
import ProjectVision from './components/ProjectVision'
import SocialMediaLinks from './components/SocialMediaLinks'
import Tokenomics from './components/Tokenomics'
import Hero from './assets/Hero.png';
import { useEffect, useState } from 'react'

function App() {
    const [translateY, setTranslateY] = useState(false);
    const MAX_SCROLL_HEIGHT = 2; // Adjust this value as needed

    useEffect(() => {
        const handleScroll = () => {
                  const currentScrollTop = window.scrollY;

                  if (
                      currentScrollTop > 0 &&
                      currentScrollTop <= MAX_SCROLL_HEIGHT
                  ) {
                      setTranslateY(true);
                  } else {
                      setTranslateY(false);
                  }

                  // Prevent scrolling beyond MAX_SCROLL_HEIGHT
                  if (currentScrollTop > MAX_SCROLL_HEIGHT) {
                      window.scrollTo({
                          top: MAX_SCROLL_HEIGHT,
                          behavior: 'instant'
                      });
                  }

        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    console.log(translateY);
    return (
        <>
            <img
                src={Hero}
                alt='Hero image'
                className='fixed top-0 left-0 w-full h-screen object-fill -z-[10]'
            />

            <div className='relative '>
                <main
                    onScroll={() => setTranslateY(true)}
                    className={`p-8 transition-all duration-500 ease-in-out ${
                        !translateY ? 'translate-y-[78%]' : 'translate-y-[0%]'
                    }`}>
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
                </main>
            </div>
        </>
    );
}

export default App
