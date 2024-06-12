import React, {useState} from 'react';

import ResearchLayout from '../researchLayout/ResearchLayout';
import styles from './researchBS.module.css'

export default function ResearchBS() {
  const title="Research - Bio Signal Processing & AI"

 
  const [choose,setChoose]=useState('All')

  const Bs1Photo = "images/bs01.jpg"
  const Bs2Photo = "images/bs02.jpg"

  const BarImgR = "images/design_bar.png"




  const onAllResClick=()=>{
    setChoose('All')
  };

  const onProgResClick=()=>{
    setChoose('Progressing')
  };

  const onClosedResClick=()=>{
    setChoose('Closed')
  };

  
  return (   
    <div className={styles.researchBS} >
      <div className={styles.bs_header} >
        <div className={styles.bs_title}>
         {title}
        </div>
  
        <div className={styles.bs_scrollMenu}>
           <ul className={styles.bsList}>
            <li className={styles.bsListItem} onClick={onAllResClick} style={{color: choose === 'All' ? 'black' : 'grey'}}>All</li>
            <li className={styles.bsListItem} onClick={onProgResClick} style={{color: choose === 'Progressing' ? 'black' : 'grey'}}>Progressing</li>
            <li className={styles.bsListItem} onClick={onClosedResClick} style={{color: choose === 'Closed' ? 'black' : 'grey'}}>Closed</li>

           </ul>
        </div>
      </div>

      {choose ==='All'?
         <div className={styles.bsp_all}>
         <ResearchLayout title={'급만성 폐질환 치료를 위한 생체신호 분석기반 스마트 호흡치료기 개발'} img={Bs1Photo}bar={BarImgR}/>
         <ResearchLayout barl={BarImgR} title={'조산 고위험 산모의 예측 및 검사 접근성의 향상을 위한 자궁근전도 기반의 무선 모니터링시스템 개발'} img={Bs2Photo}/>
       </div>

        :
          choose==='Progressing'?
        
           <div className={styles.bsp_all}>
              <ResearchLayout title={'급만성 폐질환 치료를 위한 생체신호 분석기반 스마트 호흡치료기 개발'} img={Bs1Photo}bar={BarImgR}/>
       
           </div>
        
         : 
         
           <div className={styles.bsp_all}>
     
              <ResearchLayout title={'조산 고위험 산모의 예측 및 검사 접근성의 향상을 위한 자궁근전도 기반의 무선 모니터링시스템 개발'} img={Bs2Photo}bar={BarImgR}/>
          </div>
        
      }



   
      
    </div>
  )
}
