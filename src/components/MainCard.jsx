import beach from '../assets/beach.jpg'

const MainCard = () => {
  return (
    <div className='w-full h-[90vh]'>
      <img className='w-full h-full object-cover' src={beach} alt="beach img" />
      <div className='max-w-[1140px] m-auto'>
        <div className='absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex-col text-white p-4'>
          <h1 className='font-bold text-4xl'>Your Special Trip</h1>
          <h2 className='text-4xl py-4 italic'>With EASYtravel</h2>
          <p className='indent-2'>Discover your dream destination with EASYtravel! Our travel agency offers personalized packages and unbeatable deals to make your trip unforgettable. Our experienced team will handle every detail, so you can sit back, relax, and enjoy your adventure. Contact us now to plan your perfect getaway!</p>
        </div>
      </div>
    </div>
  )
}

export default MainCard