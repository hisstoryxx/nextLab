import React from 'react'
import styles from './researchSide.module.css'
export default function ResearchSide({select,setSelect}) {
  const clickCD=()=>{
     setSelect('CD')
      
  }
  const clickUD=()=>{
      setSelect('UD')
     
  }
  const clickMI=()=>{
       setSelect('MI')
       
  }

  const clickBS=()=>{
     setSelect('BS')
  }
  
  
   return (
    <div className={styles.researchSide}>
       <div className={styles.title_research}>
          Research
          <div className={styles.titleResearch_border}>
            <div className={styles.titleResearch_left}>
              
            </div>
            <div className={styles.titleResearch_right}>
              
            </div>
        </div>  
       </div>

      <div className={styles.researchList}>
         <ul className={styles.researchContent}>
            <li className={styles.researchListItem} onClick={clickCD} style={{color: select === 'CD' ? 'black' : 'grey'}} >Clinical Study Design</li>
            <li className={styles.researchListItem} onClick={clickUD} style={{color: select === 'UD' ? 'black' : 'grey'}}>UX/UI Design & Usability</li>
            <li className={styles.researchListItem} onClick={clickMI} style={{color: select === 'MI' ?'black' : 'grey'}}>Medical Industry Policy</li>
            <li className={styles.researchListItem} onClick={clickBS} style={{color: select === 'BS' ? 'black' : 'grey'}}>Bio Signal Processing & AI</li>
         </ul>
        
      </div>

    </div>
  )
}
