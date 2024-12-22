import React from 'react';
import { FaFacebook, FaFacebookMessenger ,FaGithub} from 'react-icons/fa';
import { CiTwitter } from "react-icons/ci";

type PersonCardData = {
  firstName: string | undefined;
  lastName: string | undefined;
  gender: string | undefined;
  image: string | undefined;
  phoneNumber: string | undefined;
};

function PersonalCardDesign2({ firstName, lastName, gender, image, phoneNumber }: PersonCardData) {
  return (
    // <div className="flex items-center border relative bg-white border-gray-300 shadow-lg px-10 py-14 w-96 rounded-xl gap-10 justify-center animate-fadeInUp">
    //   <img
    //     src={image}
    //     alt={`${firstName} ${lastName}`}
    //     className="absolute w-36 h-40 object-cover shadow-2xl rounded-lg right-[75%] animate-scaleIn"
    //   />
    //   <div className="flex flex-col text-gray-700 gap-2 mb-7 animate-scaleIn">
    //     <p className="text-lg font-bold">{`${firstName} ${"   "} ${lastName}`}</p>
    //     <p className="text-sm font-semibold">Gender: {gender}</p>
    //     <p className="text-sm font-semibold">Phone: {phoneNumber}</p>
    //   </div>
    // </div>
    <div className='h-96 w-80 box shadow-lg rounded-2xl border-[1px] mb-10 relative'>
        <div className='flex flex-col h-1/2'>
<div className='bg-blue-500 h-2/3 rounded-t-2xl'/>
<div className='absolute border-4 border-blue-500 rounded-full object-contain top-10 left-[25%]'>
<img src={image} className='h-32 w-32 rounded-full object-contain border-4 border-white'/>
</div></div>
        <div className="flex flex-col gap-4 text-center h-1/2">
        <p className="text-lg font-bold">{`${firstName} ${"   "} ${lastName}`}</p>
        <p className="text-sm font-semibold">Gender: {gender}</p>
        <p className="text-sm font-semibold">Phone: {phoneNumber}</p>
        <div className='flex justify-between px-5 mt-5'>
  <FaFacebook className='h-10 w-10'/>
  <FaFacebookMessenger className='h-10 w-10'/>
  <FaGithub className='h-10 w-10'/>
  <CiTwitter className='h-10 w-10'/>
  </div>
  </div>
 
    </div>
  );
}

export default PersonalCardDesign2;
