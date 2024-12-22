import React from 'react';

type PersonCardData = {
  firstName: string | undefined;
  lastName: string | undefined;
  gender: string | undefined;
  image: string | undefined;
  phoneNumber: string | undefined;
};

function PersonalCardDesign({ firstName, lastName, gender, image, phoneNumber }: PersonCardData) {
  return (
    <div className="flex items-center border relative  bg-gradient-to-r from-black to-gray-500 border-gray-300 shadow-lg px-10 py-14 w-96 rounded-xl gap-10 justify-center animate-fadeInUp">
      <img
        src={image}
        alt={`${firstName} ${lastName}`}
        className="absolute w-36 h-40 object-cover shadow-2xl rounded-lg right-[75%] animate-scaleIn"
      />
      <div className="flex flex-col gap-4 mb-7 animate-scaleIn text-white">
        <p className="text-lg font-bold">{`${firstName} ${"   "} ${lastName}`} </p>
        <p className="text-sm font-semibold">Gender: {gender}</p>
        <p className="text-sm font-semibold">Phone: {phoneNumber}</p>
      </div>
  
    </div>
  );
}

export default PersonalCardDesign;
