import styles from './memberside.module.css'

import React,{useState} from 'react'
import StudentLayout from '../studentLayout/StudentLayout'
export default function MemberSide({ select, setSelect, selectStudent, setSelectStudent} ) {


 //  const [selectStudent,setSelectStudent]=useState('Ph.D course')
  const clickPro = () => {
    setSelect('Professor') 
   
  }

  const clickStu = () => {
    setSelect('Student')
    setSelectStudent('')
  
  }
  const clickpD = () => {
    setSelectStudent('Post.D course')
  
  }
  const clickphd = () => {
    setSelectStudent('Ph.D course')
  
  }
  const clickmsph = () => {
    setSelectStudent('MS/Ph.D course')
  
  }
  const clickms = () => {
    setSelectStudent('MS course')
  
  }
  const clickintern = () => {
    setSelectStudent('Intern')
  
  }

  const clickStaffs=()=>{
    setSelect('Staffs')
  
  }
  

  const clickAlu = () => {
    setSelect('Alumni')
  
  }
  


  return (
    <div className={styles.memberSide}>
       <div className={styles.title_member}>
          Members
        <div className={styles.title_border}>
            <div className={styles.title_left}>
              
            </div>
            <div className={styles.title_right}>
              
            </div>
        </div>  
         
       </div>

      <div className={styles.memberList}>
        <div className={styles.memberside_container}>
        <ul className={styles.memberContent}>
          <li className={styles.memberListItem} onClick={clickPro} style={{color: select === 'Professor' ? 'black' : 'grey'}} >Professor</li>
          <li className={styles.memberNewListItem} onClick={clickStu} style={{ color: select === 'Student' ? 'black' : 'grey'}} ><a>Researchers & Students</a></li>
            {select === 'Student' ? 
            <>

            <li className={styles.memberSmallItem} onClick={clickpD} style={{ color: selectStudent === 'Post.D course' ? 'black' : 'grey'}} > Post.D </li>
            <li className={styles.memberSmallItem} onClick={clickphd} style={{ color: selectStudent === 'Ph.D course' ? 'black' : 'grey'}} > Ph.D </li>
            <li className={styles.memberSmallItem} onClick={clickmsph} style={{ color: selectStudent === 'MS/Ph.D course' ? 'black' : 'grey'}} > MS/Ph.D </li>
            <li className={styles.memberSmallItem} onClick={clickms} style={{ color: selectStudent === 'MS course' ? 'black' : 'grey'}} > MS </li>
            <li className={styles.memberSmallItem} onClick={clickintern} style={{ color: selectStudent === 'Intern' ? 'black' : 'grey'}} > Intern</li>
            </>
            :
            null
  }


          <li className={styles.memberListItem} onClick={clickStaffs}style={{color: select === 'Staffs' ? 'black' : 'grey'}}>Staffs</li>
          <li className={styles.memberListItem} onClick={clickAlu} style={{color: select === 'Alumni' ? 'black' : 'grey'}}>Alumni</li>
        </ul>
        </div>
      </div>

    </div>
  )
}
