import React from 'react'
import SparkLines from './icons/SparkLines'
import SingleLine from './icons/SingleLine'
import MessageIcon from './icons/MessageIcon'
import StarIcon from './icons/StarIcon'
import LeftArrow from './icons/LeftArrow'
import RightArrow from './icons/RightArrow'
import Image from 'next/image'
import imageOne from '../../public/images/image 22.svg';
import imageTwo from '../../public/images/image.svg';

const TestimonialBentoSection = () => {
  return (
    <section  className='w-full px-4 py-10 sm:py-14  lg:px-8 items-center justify-center flex '>
       <div className='relative w-full max-w-[1098px] flex items-center justify-center flex-col'>
        <div className='relative mb-8'>
            <h2 className='nightSerif text-[36px] font-[400]'>
            Trusted by Patients, Honoured by the Industry
        </h2>
        <span className='absolute top-3 -left-10'>
            <SparkLines/>
        </span>
        <span className='absolute top-6 left-[360px]'>
            <SingleLine/>
        </span>
        </div>
                <div className='flex gap-[24px]'>
                     <div className='flex  flex-col gap-[32px]'>
                        <div className='flex flex-col gap-[32px]'>
                             <span>
                            <MessageIcon/>
                        </span>
                        <p className='poppins font-[400] text-[16px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, obcaecati recusandae eius itaque vitae enim error delectus nobis, temporibus corporis nesciunt reiciendis aspernatur, beatae fuga ullam dolore sit esse excepturi?</p> 
                        <span>
                            <StarIcon/>
                        </span>
                        </div>
                        <div className='flex items-center justify-between'>
                            <div >
                                 <span className='flex  items-center gap-[14px]'>
                                    <Image src={imageOne} alt='user Image ' width={60} height={60}/>
                                    Marina Lewis</span>
                            </div>
                            <div className='flex  gap-[5px]'>
                                <LeftArrow/>
                                <RightArrow/>
                            </div>
                           

                        </div>
                       
                    </div>
                    
                     <div>
                        <Image src={imageTwo} alt='image '/>
                     </div>
                     <div>
                        sdfseklfj
                     </div>
                </div>

       </div>

    </section>
  )
}

export default TestimonialBentoSection