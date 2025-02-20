import SocialDog from '../assets/SocialDog.png'
import Twitter from '../assets/Frame 34.png';
import Telegram from '../assets/Frame 35.png';

const SocialMediaLinks = () => {
  return (
      <section className='pt-52 pb-32 relative'>
          <div className='w-[90%] mx-auto '>
              <h2 className='sigmar-regular text-center md:text-start text-5xl md:text-6xl lg:text-7xl xl:text-8xl max-w-[800px] text-[#FFA800]'>
                  SOCIAL MEDIA LINKS
              </h2>
              <div className='mt-10 md:mt-5 flex flex-col items-center md:items-center md:flex-row md:justify-between mx-auto w-[95%]'>
                  <div className='flex flex-col gap-8 w-[95%] lg:w-[40%] font-montserrat justify-center items-center'>
                      <div className='relative md:py-2.5 md:px-8  rounded-2xl  '>
                          {/* <img src={Message} alt="" className="flex-grow w-full" /> */}
                          <div className='flex flex-col items-start Union_social   gap-10  rounded-3xl font-extrabold w-full p-10'>
                              <a
                                  href=''
                                  className='flex gap-4 justify-start items-center '>
                                  <img
                                      src={Twitter}
                                      alt=''
                                      className='h-10 w-10'
                                  />
                                  <p className='text-white text-xl md:text-2xl'>
                                      Twitter Link
                                  </p>
                              </a>

                              <a
                                  href=''
                                  className='flex gap-4 items-center justify-start'>
                                  <img
                                      src={Telegram}
                                      alt=''
                                      className='h-10 w-10'
                                  />
                                  <p className='text-white text-xl md:text-2xl'>
                                      Telegram Link
                                  </p>
                              </a>
                          </div>
                      </div>
                  </div>
                  <img
                      src={SocialDog}
                      alt='money dog'
                      className='md:w-[60%] reflect_3 overflow-hidden'
                  />
              </div>
          </div>
      </section>
  );
}

export default SocialMediaLinks
