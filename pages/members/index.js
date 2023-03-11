import React,{useEffect, useState} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './members.module.css'

import MemberSide from '@/src/component/members/Memberside/Memberside'
import Professor from '@/src/component/members/Professor/Professor'
import Alumni from '@/src/component/members/Alumni/Alumni'
import Student from '@/src/component/members/Student/Student'
import Staffs from '@/src/component/members/Staff/Staff'
import StudentLayout from '@/src/component/members/studentLayout/StudentLayout'

const inter = Inter({ subsets: ['latin'] })

export default function Members() {

  const [select,setSelect]=useState('Professor');

  const [selectStudent,setSelectStudent]=useState();

  const [page, setPage] = useState('');

  useEffect(() => {

    if(select === 'Alumni') {
      setPage('Alumni')
        
      
    } else if (select === 'Student'){
      setPage('Student')
    } else if (select === 'Staffs') {
      setPage('Staffs')
      
    }
    else{
      setPage('Professor')
    }
  },[select])


  return (
    <div style = {{}}>
      <Head>
        <title>
          Members | MDDU
        </title>
      </Head>
    <div style ={{}}>

    
      <div className={styles.container}>

      

      <div className={styles.members}>

        <div className ={styles.sidePosition}>
        
        <div className={styles.membersLeft}>
        <MemberSide select={select} setSelect={setSelect} selectStudent = {selectStudent }   setSelectStudent = {setSelectStudent}  />
      </div>
    
      {select === 'Alumni' ?
        <>
     
      <div className={styles.membersRight}>
        <Alumni/>
      </div>
      </>

      :
          select === 'Student'?
          
         
          <div className={styles.membersRight}>
            
          <Student select={select} setSelect={setSelect} selectStudent = {selectStudent }   setSelectStudent = {setSelectStudent} />
          </div>
          
            :
             select === 'Staffs'?
               
              <div className={styles.membersRight}>
              <Staffs/>
              </div>
              
              :
              <div className={styles.membersRight}>
              <Professor/>
              </div>
      } 
      
      </div>
      </div>
    </div>
     
    </div>
    </div>
  )
}
