import { FaGithub } from 'react-icons/fa';
import { SiYourtraveldottv } from 'react-icons/si';

const Footer = () => {
  return (
    <div className='max-w-[1140px] w-full py-3 m-auto border-t-4 flex flex-col'>
      <div className='flex items-center m-auto justify-center'>
        <SiYourtraveldottv size={30} className='text-[var(--primary-dark)] mr-2'/>
        <h1 className='text-xl font-bold text-gray-700'>EASYtravel</h1>
      </div>
      <div className='flex items-center m-auto justify-center mt-3'>
        <span className='text-gray-700 text-[10px] mr-1'>Made by Lukas</span>
        <a href="https://github.com/Lukasnvc/travel-app.git" target='blank'>
        <FaGithub size={18}/>
        </a>
      </div>
    </div>
  )
}

export default Footer