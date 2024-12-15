import {react} from 'react';
import { github2 } from "../assets";
import { LinkedIn } from "../assets";
import { resume } from "../assets";
import {points} from "../constants"
import { SectionWrapper } from '../hoc';



const Poc = ()=>{
    return(
        <div>
                <div className=' flex flex-row justify-center m-1 gap-14'>
                <div
                onClick={() => window.open("https://github.com/ArvindAgarwal1310", "_blank")}
                className='white-gradient w-1/6 h-1/6 rounded-full flex justify-center items-center cursor-pointer'
                >
                <img
                    src={github2}
                    alt='source code'
                    className='w-full h-full object-contain'
                />
                </div>
                <div
                onClick={() => window.open("https://www.linkedin.com/in/arvindagarwal1310", "_top")}
                className='white-gradient w-1/6 h-1/6 rounded-full flex justify-center items-center cursor-pointer'
                >
                <img
                    src={LinkedIn}
                    alt='source code'
                    className='w-full h-full object-contain'
                />
                </div>

                <div
                onClick={() => window.open("\ArvindAgarwal_Resume.pdf", "_blank")}
                className='white-gradient w-1/6 h-1/6 rounded-full flex justify-center items-center cursor-pointer'
                >
                <img
                    src={resume}
                    alt='source code'
                    className='w-full h-full object-contain'
                />
                </div>
            </div> 
        </div>
    )
}

export default SectionWrapper(Poc,"poc");