import React from 'react'

type PersonCardData = {
    firstName: string | undefined;
    lastName: string | undefined;
    gender: string | undefined;
    image: string | undefined;
    phoneNumber: string | undefined;
  };

function PersonalCard({firstName,lastName,gender,image,phoneNumber}:PersonCardData) {
  return (
    <div className="flex items-center border bg-white border-gray-300 shadow-xl p-10 w-96 rounded-xl gap-10 animate-fadeInUp">
        <img
          src={image}
          alt={`${firstName} ${lastName}`}
          className="w-28 h-28 object-cover shadow-lg rounded-lg animate-scaleIn"
        />
      <div className="flex flex-col text-gray-700 gap-2 mb-7 animate-scaleIn">
        <p className="text-sm font-bold">{`${firstName} ${"   "} ${lastName}`}</p>
        <p className="text-sm font-semibold">
        Gender: {gender}
        </p>
        <p className="text-sm font-semibold">
       Phone: {phoneNumber}
        </p>
      </div>
    </div>
  )
}

export default PersonalCard