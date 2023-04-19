import { AiOutlineClockCircle } from 'react-icons/ai';
import { SiYourtraveldottv } from 'react-icons/si';
import {TiPhoneOutline} from 'react-icons/ti'

const Topbar = () => {
  return (
    <div className='flex justify-between items-center px-4 py-2'>
      <div className='flex items-center'>
        <SiYourtraveldottv size={35} className='text-[var(--primary-dark)] mr-2' />
        <h1 className='text-xl font-bold text-gray-700'>EASYtravel</h1>
      </div>
      <div className='flex'>
        <div className='hidden md:flex items-center px-6'>
          <AiOutlineClockCircle size={20} className='mr-2 text-[var(--primary-dark)]'/>
          <p className='text-small text-gray-700'>8:00 - 18:00</p>
        </div>
        <div className='hidden md:flex items-center px-6'>
          <TiPhoneOutline size={20} className='mr-2 text-[var(--primary-dark)]'/>
          <p className='text-small text-gray-700'>+370 6xx xxxxx</p>
        </div>
        <button>Consult</button>
      </div>
    </div>
  )
}

export default Topbar