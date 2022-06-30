import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Table from './components/Table';

const App = () => {
const [baza,setBaza]=useState();

 async function getData(url:string) {
   const res= await axios.get(url);
   console.log(res.data);
   setBaza(res.data);
    
  }
useEffect(()=>{
 getData('http://localhost:3000/data');
},[])


  return (
    <>
     <Table column={baza}/>
    </>
  )
}

export default App;