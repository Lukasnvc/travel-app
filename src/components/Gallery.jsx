import resort1 from '../assets/resort1.jpg';
import resort2 from '../assets/resort2.jpg';
import resort3 from '../assets/resort3.jpg';
import resort4 from '../assets/resort4.jpg';
import resort5 from '../assets/resort5.jpg';

const Gallery = () => {
  return (
    <div id='gallery' className='max-w-[1140px] m-auto w-full p-4 py-16'>
      <h2 className='text-center text-gray-700 p-4'>Gallery</h2>
      <div className='grid sm:grid-cols-5 gap-4'>
        <div className='sm:col-span-3 col-span-2 row-span-2'>
          <img className='w-full object-cover' src={resort1} alt="resort img" />
        </div>
        <div>
          <img className='w-full object-cover' src={resort2} alt="resort img" />
        </div>
        <div>
          <img className='w-full object-cover' src={resort3} alt="resort img" />
        </div>
        <div>
          <img className='w-full object-cover' src={resort4} alt="resort img" />
        </div>
        <div>
          <img className='w-full object-cover' src={resort5} alt="resort img" />
        </div>
      </div>
    </div>
  )
}

export default Gallery