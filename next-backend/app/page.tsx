///We are fetching data like we done in react which is client side rendering but it is not SEO optimised so next.js uses something diff to fetch data and it is server side rendering

// "use client"
// import {  useState,useEffect } from "react"
// import axios from "axios";

// export default function Home() {
//   const [loading, setLoading] = useState(true);
//   const [data, setData] = useState({
//     email : "",
//     name : ""
//   });

//   useEffect(()=>{
//     axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details")
//       .then(res=>{
//         setData(res.data)
//         setLoading(false)
//       })
//   },[])

//   if(loading){
//     return <div>Loading. .. . ... . .</div>
//   }

//   return (
//     <div>
//         {data.email},
//         {data.name}
//     </div>
//   );
// }


///DATA FETCHING IN NEXT JS

import axios from "axios"

async function userDetails(){
  const res = await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details");
  return res.data
}

//async component (we can't write async component in react this feauture introduced recently (I think after next js 14))

export default async function Home(){
  await new Promise((r)=>setTimeout(r,5000)) //timeout in js

  const kiratDetails = await userDetails();

  return <div>
      {kiratDetails.name} , 
      {kiratDetails.email}
  </div>
}
