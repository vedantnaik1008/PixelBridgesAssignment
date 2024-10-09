import groupOfDogs from '../assets/groupOfDogs.png';
import rectangle from '../assets/Rectangle_4.png';
import SingleDogMap from '../assets/ROADMAp.png';

const ProjectVision = () => {
  return (
      <section className='pt-40 md:pt-28 relative'>
          <img
              src={rectangle}
              alt=''
              className='absolute  h-[65%] w-full top-[20%]  left-0 z-[1]'
          />
          <div className='w-[90%] mx-auto relative z-10'>
              <h2 className='text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-center text-[#FFA800]'>
                  PROJECT VISION
              </h2>
              <div className='mt-10 md:mt-0'>
                  <img src={groupOfDogs} alt='' className='reflect_2' />
                  <p className='mt-10 md:mt-28 mx-auto text-[#353535] text-center max-w-[1200px] md:text-2xl lg:text-3xl xl:text-4xl font-bold font-kumbh'>
                      Our mission is to honor the heritage of the Alabay by
                      creating a vibrant, loyal, and powerful community. Just as
                      the Alabay protects its flock, we aim to build a pack that
                      stands strong together.
                  </p>
              </div>
              <div className='mt-32'>
                  <h2 className='text-center md:text-start text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white'>
                      ROAD MAP
                  </h2>
                  <div className='flex flex-col items-center gap-8 md:gap-0 md:flex-row md:justify-between md:items-start'>
                      <div className='self-center'>
                          <p className='text-[#353535] text-xl md:text-2xl  lg:text-3xl  font-bold font-kumbh max-w-[500px] mt-10 md:mt-40'>
                              Our journey is just beginning. Explore our roadmap
                              to see the exciting milestones and future plans we
                              have in store.
                          </p>
                          <p className='text-[#FFA800] text-xl md:text-2xl lg:text-3xl  font-bold font-kumbh mt-8 max-w-[480px]'>
                              Join us as we grow and achieve new heights.
                          </p>
                      </div>
                      <img
                          src={SingleDogMap}
                          alt=''
                          className=' md:w-[50%] reflect_2'
                      />
                  </div>
              </div>
          </div>
      </section>
  );
}

export default ProjectVision
