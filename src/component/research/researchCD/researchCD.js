


import styles from "./researchCD.module.css"

import React, {useState} from 'react';
// import Cd1Photo from "../../../components/img/cd01.jpg";
// import Cd2Photo from "../../../components/img/cd02.jpg";
// import Cd3Photo from "../../../components/img/cd03.JPG";
// import Cd4Photo from "../../../components/img/cd04.jpg";
// import Cd5Photo from "../../../components/img/cd05.JPG";
// import Cd6Photo from "../../../components/img/cd06.jpg";
// import Cd7Photo from "../../../components/img/cd07.jpg";
import ResearchLayout from '../ResearchLayout/researchLayout';
// import BarImgR from "../../../components/img/design_bar.png";


export default function ResearchCD() {

  const title="Research - Clinical Study Design"
 
  const [choose,setChoose]=useState('All')

  const Cd1Photo = "images/cd01.jpg"
  const Cd2Photo = "images/cd02.jpg"
  const Cd3Photo = "images/cd03.jpg"
  const Cd4Photo = "images/cd04.jpg"
  const Cd5Photo = "images/cd05.jpg"
  const Cd6Photo = "images/cd06.jpg"
  const Cd7Photo = "images/cd07.jpg"
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
    <div className={styles.researchCD} >
      <div className={styles.cd_header} >
        <div className={styles.cd_title}>
          {title}
          
        </div>
  
        <div className={styles.cd_scrollMenu}>
           <ul className={styles.cdList}>
            <li className={styles.cdListItem} onClick={onAllResClick} style={{color: choose === 'All' ? 'black' : 'grey'}} >All</li>
            <li className={styles.cdListItem} onClick={onProgResClick} style={{color: choose === 'Progressing' ? 'black' : 'grey'}}>Progressing</li>
            <li className={styles.cdListItem} onClick={onClosedResClick} style={{color: choose === 'Closed' ? 'black' : 'grey'}}>Closed</li>
           </ul>
        </div>
      </div>

      {choose ==='All'?
      
        <div className={styles.csd_all}>
          <ResearchLayout title={'인공지능 기반 중증악화 예측 가능한 고성능 환자감시장치 시스템 개발'} img={Cd1Photo} bar={BarImgR}/>
          <ResearchLayout barl={BarImgR} title={'고령자 만성질환, 현장형 진단 및 치료 시스템 임상시험 지원'} img={Cd2Photo}  />
          <ResearchLayout title={'디지털 치료기기 임상설계 가이드라인 개발 연구'} img={Cd3Photo} bar={BarImgR}/>
          <ResearchLayout barl={BarImgR} title={'조산 고위험 산모 예측 알고리즘 개발 및 자궁근전도 무선 모니터링 시스템의 임상적 유효성 검증'} img={Cd4Photo}/>
          <ResearchLayout title={'위암영상검출진단보조소프트웨어에 대한 임상시험계획서 개발'} img={Cd5Photo} bar={BarImgR}/>
          <ResearchLayout barl={BarImgR} title={'생체활성 소재 기반의 임상적 요구에 최적화된 기능성 환자 맞춤형 척추 유합 임플란트 및 제조 시스템 개발'} img={Cd6Photo}/>
          <ResearchLayout title={'첨단기술 기반 치료형 기기의 임상시험 프로토콜 가이드라인 개발'} img={Cd7Photo} bar={BarImgR}/>
        </div>
        :
          choose==='Progressing'?
         <div className={styles.csd_all}>
          <ResearchLayout title={'인공지능 기반 중증악화 예측 가능한 고성능 환자감시장치 시스템 개발'} img={Cd1Photo}bar={BarImgR}/>
      
          <ResearchLayout barl={BarImgR} title={'고령자 만성질환, 현장형 진단 및 치료 시스템 임상시험 지원'} img={Cd2Photo}/>
         </div>
         : 
         <div className={styles.csd_all}>
         <ResearchLayout title={'디지털 치료기기 임상설계 가이드라인 개발 연구'} img={Cd3Photo}bar={BarImgR}/>
         <ResearchLayout barl={BarImgR}title={'조산 고위험 산모 예측 알고리즘 개발 및 자궁근전도 무선 모니터링 시스템의 임상적 유효성 검증'} img={Cd4Photo} />
         <ResearchLayout title={'위암영상검출진단보조소프트웨어에 대한 임상시험계획서 개발'} img={Cd5Photo}bar={BarImgR}/>
         <ResearchLayout barl={BarImgR}title={'생체활성 소재 기반의 임상적 요구에 최적화된 기능성 환자 맞춤형 척추 유합 임플란트 및 제조 시스템 개발'} img={Cd6Photo}/>
         <ResearchLayout title={'첨단기술 기반 치료형 기기의 임상시험 프로토콜 가이드라인 개발'} img={Cd7Photo}bar={BarImgR}/>
        </div>
      }
    

        
    </div>
  )
}


