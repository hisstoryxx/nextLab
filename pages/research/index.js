import Head from 'next/head'


import React,{useEffect,useState} from 'react'


import styles from './research.module.css'

// import ResearchCD from './researchCD/ResearchCD';
// import ResearchUD from './researchUD/ResearchUD';
// import ResearchMI from './researchMI/ResearchMI';
// import ResearchBS from './researchBS/ResearchBS';
// import ResearchSide from "./researchSide/ResearchSide";

import ResearchCD from '@/src/component/research/researchCD/researchCD'; 
import ResearchBS from '@/src/component/research/researchBS/researchBS';
import ResearchSide from '@/src/component/research/ResearchSide/researchSide';
import ResearchMI from '@/src/component/research/researchMI/researchMI';
import ResearchUD from '@/src/component/research/researchUD/researchUD';
import { useRouter } from 'next/router';

export default function Research() {

  let recv;
  const location = useRouter();

  const [select,setSelect]=useState('CD');
  
  console.log('select',location.query.id)

  if(location?.query?.id?.includes("clinical")){
    recv='clinical'
    
    
 } 
 else if (location.query.id?.includes("uxui")){
   
   recv="uxui"

 } 
 
 else if (location.query.id?.includes('industry')) {
 
   recv="industry"
 }

 else if (location.query.id?.includes('bio')) {
 
  recv="bio"
}


 useEffect(()=>{
  if(recv==='bio'){
    setSelect('BS')
    console.log(recv,'확인')
  }
  else if(recv==='industry'){
    setSelect('MI')
    console.log(recv,'확인')
  }
  
  else if (recv==='uxui'){
    setSelect('UD')
    console.log(recv,'확인')
  }
  else if(recv==='clinical'){
    setSelect('CD')
    console.log(recv,'확인')
  }
  console.log('ERROR')    
 
},[recv]);
  return (
    <div>
      <Head>
        <title>
          Research | MDDU
        </title>
      </Head>

      <div style ={{position : "relative", padding : "0 2rem",}}>

      <div className={styles.research}>
      <div className={styles.researchLeft}>
      <ResearchSide select={select} setSelect={setSelect}/>
        {console.log(select,'ok')}
      </div>

    {select==='BS'?
       <div className={styles.researchRight}>
          <ResearchBS/>
      </div>
      :
        select==='MI'?
      
        <div className={styles.researchRight}>
          <ResearchMI/>
         </div>
        :
        select==='UD'?
       
           <div className={styles.researchRight}>
            <ResearchUD/>
          </div>
          : 

          <div className={styles.researchRight}>
            
           <ResearchCD />
          </div>
        
         }
   
  </div>
  </div>
     
    </div>
  )
}
