import Image from 'next/image';
import  CustomButton from './CustomButton';


const Hero = () => {
  return (
    <div className='hero'>
        <div className='flex-1 pt-36 padding-x'>
            <h1 className='hero__title'>
                Find, book, or rent a car -- quickly
                and easily!
            </h1>

            <p className='hero__subtitle'>
                Stremline your car rental experience
                with oir effortless booking process.
            </p>

            <CustomButton />
        </div>
    </div>
  )
}

export default Hero