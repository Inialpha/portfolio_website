import businessCard from '../assets/images/Business.png'

function Hero() {
  return (
    <div className="p-6 container mx-auto h-96 relative">
      <div className="absolute flex flex-col">
      <h1 className="text-3xl md:text-5xl items-center font-bold line-clamp-2 w-full md:text-center">Inimfon Ebong</h1>
      <p className=" md:text-3xl font-bold text-right ">Software Engineer</p>
      </div>

      <div className="hidden md:block absolute top-0 right-0 w-auto md:w-64 h-20 x-50 rounded-g">
        <img src={businessCard} className=" rounded-g" />
      </div>
      <p className=" absolute bottom-40 md:bottom-1/4 md:text-3xl text-left ml-3">I am a passionate software developer with experience in various technologies. I transform ideas into life changing solutions.
</p>
    </div>
  )
}

export default Hero
