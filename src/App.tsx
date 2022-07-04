import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Table, { ITBody, IThead } from './components/Table';

const App = () => {
 
const [thead,setThead]=useState<IThead[]>([]);
const [tbody,setTbody]=useState<ITBody[]>([]);
const [addTbody,setAddTbody]=useState<any>([]);

 async function getData(url:string) {
   const res= await axios.get(url);
   
   setThead(res.data.thead);
   setTbody(res.data.tbody);
   setAddTbody(res.data.tbody);
  }
  
useEffect(()=>{
 getData('http://localhost:3000/data');
},[]);

  return (
    <>
     <Table thead={thead} tbody={tbody} addTbody={addTbody} setTbody={setTbody} />
    </>
  )
}

export default App;