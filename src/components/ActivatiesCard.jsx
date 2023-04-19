import cruise from '../assets/cruise.jpg';
import excursion from '../assets/excursion.jpg';
import resort from '../assets/resort.jpg';

const ActivatiesCard = () => {
  return (
    <div className='max-w-[1140px] m-auto md:flex mt-[-75px]'>
      <div className='relative p-4 '>
        <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>Resorts</h3>
        <img className='w-full h-full object-cover relative border-4 border-white shadow-lg' src={resort} alt="resort img" />
      </div>
      <div className='relative p-4 '>
        <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>Cruises</h3>
        <img className='w-full h-full object-cover relative border-4 border-white shadow-lg' src={cruise} alt="cruise ship img" />
      </div>
      <div className='relative p-4 '>
        <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>Excursions</h3>
        <img className='w-full h-full object-cover relative border-4 border-white shadow-lg' src={excursion} alt="excursion img" />
      </div>
    </div>
  )
}

export default ActivatiesCard