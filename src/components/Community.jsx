import RepairDog from '../assets/RepairDog.png';
import CasualDog from '../assets/CasualDog.png';
import ChampionDog from '../assets/ChampionDog.png';
import VikingDog from '../assets/VikingDog.png';

const Community = () => {
  return (
      <section className='relative mx-auto w-[90%] py-20'>
          <div className='flex flex-wrap justify-center lg:justify-start lg:flex-nowrap gap-4 '>
              <div className='linear_Repair_Comunity px-2.5 py-5 rounded-[40px]  lg:rounded-tl-[40px] lg:rounded-tr-[0px] font-extrabold font-montserrat  text-center text-white '>
                  <p className='max-w-[150px] mx-auto text-2xl'>
                      Community Building{' '}
                  </p>
                  <span className='text-xl'>and Initial Launch</span>
                  <img
                      src={RepairDog}
                      alt=''
                      className='w-[90%] mx-auto mt-2'
                  />
              </div>
              <div className='linear_Casual_Comunity px-2.5 py-5  font-extrabold font-montserrat  text-center text-white rounded-[40px] lg:rounded-[0px]'>
                  <p className='max-w-[150px] mx-auto text-2xl'>Merchandise</p>
                  <span className=''>Store Launch</span>
                  <img
                      src={CasualDog}
                      alt=''
                      className='w-[90%] mx-auto mt-8'
                  />
              </div>
              <div className='linear_Champion_Comunity px-2.5 py-5  font-extrabold font-montserrat  text-center text-white rounded-[40px] lg:rounded-[0px]'>
                  <p className='max-w-[150px] mx-auto text-2xl'>
                      Community Events{' '}
                  </p>
                  <span className='text-xl'>and contests</span>
                  <img
                      src={ChampionDog}
                      alt=''
                      className='w-[90%] mx-auto mt-2'
                  />
              </div>
              <div className='linear_Viking_Comunity px-2.5 py-5  rounded-[40px] lg:rounded-tl-[0px] lg:rounded-tr-[40px] font-extrabold font-montserrat  text-center text-white'>
                  <p className='max-w-[150px] mx-auto text-2xl'>
                      Expansion and New{' '}
                      <span className='text-xl'>Features</span>
                  </p>
                  <img
                      src={VikingDog}
                      alt=''
                      className='w-[90%] mx-auto mt-2'
                  />
              </div>
          </div>
          <div className='absolute linear_Comunity  bottom-20 left-0 w-full h-[25%] hidden lg:block' />
      </section>
  );
}

export default Community
