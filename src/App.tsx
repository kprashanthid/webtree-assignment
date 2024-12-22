import React, { useEffect, useState } from 'react';
import './App.css';
import PersonalCard from './components/personal-card';
import PersonalCardDesign from './components/person-card2';
import PersonalCardDesign2 from './components/person-card3';

type User = {
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  phoneNumber: string;
};

function App() {
const [userData,setUserData] = useState<User | null>(null);
  useEffect(() => {
    const fetchData = async () =>{
      try {
        const response = await fetch("https://randomuser.me/api/?page=1&results=1&seed=abc")
        const data = await response.json()
        const user = data.results[0];
        setUserData({
          firstName: user.name.first,
          lastName: user.name.last,
          gender: user.gender,
          image: user.picture.large,
          phoneNumber: user.phone,
        });
        
        console.log(user);
      }catch(error){
         console.error("error",error)
      }
    }
    fetchData()
  },[])
  
  return (
    <div className="h-full w-full bg-gray-50 flex flex-col justify-center items-center mx-auto gap-20">
      {userData?.firstName !== undefined ?
      <div className='animate-fadeInUp mt-20'>
     <PersonalCard firstName={userData?.firstName} lastName={userData?.lastName} gender={userData?.gender} image={userData?.image} phoneNumber={userData?.phoneNumber}/>
     </div>:
      <p className='animate-fadeInUp text-white font-bold'>Loading</p>
      }
        {userData?.firstName !== undefined ?
        <div className='animate-fadeInUp'>
       <PersonalCardDesign firstName={userData?.firstName} lastName={userData?.lastName} gender={userData?.gender} image={userData?.image} phoneNumber={userData?.phoneNumber}/>
       </div>:
      <p className='animate-fadeInUp text-white font-bold'>Loading</p>
      }
      <PersonalCardDesign2 firstName={userData?.firstName} lastName={userData?.lastName} gender={userData?.gender} image={userData?.image} phoneNumber={userData?.phoneNumber}/>
      </div>
  );
}

export default App;
