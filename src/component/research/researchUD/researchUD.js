
import styles from './researchUD.module.css'
import React, {useState} from 'react';
// import Ud1Photo from "../../../components/img/ud01.jpg";
// import Ud2Photo from "../../../components/img/ud02.jpg";
// import Ud3Photo from "../../../components/img/ud03.jpg";
// import Ud4Photo from "../../../components/img/ud04.jpg";
// import Ud5Photo from "../../../components/img/ud05.jpg";
// import Ud6Photo from "../../../components/img/ud06.jpg";
// import Ud7Photo from "../../../components/img/ud07.JPG";
// import Ud8Photo from "../../../components/img/ud08.jpg";
// import Ud9Photo from "../../../components/img/ud09.jpg";
import ResearchLayout from '../researchLayout/ResearchLayout';
// import BarImgR from "../../../components/img/design_bar.png";

export default function ResearchUD() {
    
    
  const title="Research - UX/UI Design & Usability"
  const [choose,setChoose]=useState('All')

  const Ud1Photo = "images/ud01.jpg"
  const Ud2Photo = "images/ud02.jpg"
  const Ud3Photo = "images/ud03.jpg"
  const Ud4Photo = "images/ud04.jpg"
  const Ud5Photo = "images/ud05.jpg"
  const Ud6Photo = "images/ud06.jpg"
  const Ud7Photo = "images/ud07.jpg"
  const Ud8Photo = "images/ud08.jpg"
  const Ud9Photo = "images/ud09.jpg"

  const BarImgR = "images/design_bar.png"



  const onAllResUDClick=()=>{
    setChoose('All')
  };

  const onProgResUDClick=()=>{
    setChoose('Progressing')
  };

  const onClosingResUDClick=()=>{
    setChoose('Closed')
  };

  
  return (   
    <div className={styles.researchUD} >
      <div className={styles.ud_header} >
        <div className={styles.ud_title}>
         {title}
        </div>
  
        <div className={styles.ud_scrollMenu}>
           <ul className={styles.udList}>
            <li className={styles.udListItem} onClick={onAllResUDClick}style={{color: choose === 'All' ? 'black' : 'grey'}} >All</li>
            <li className={styles.udListItem} onClick={onProgResUDClick}style={{color: choose === 'Progressing' ? 'black' : 'grey'}} >Progressing</li>
            <li className={styles.udListItem} onClick={onClosingResUDClick}style={{color: choose === 'Closed' ? 'black' : 'grey'}} >Closed</li>

           </ul>
        </div>
      </div>
      {choose ==='All'?
      <div className={styles.udu_all}>
          <ResearchLayout title={'기능 융합형 초음파 영상기기'} img={Ud1Photo} bar={BarImgR}/>
          <ResearchLayout barl={BarImgR} title={'급만성 폐질환 치료를 위한 생체신호 분석기반 스마트 호흡치료기 개발'} img={Ud2Photo}/>
          <ResearchLayout title={'인공지능 기반 중증악화 예측 가능한 고성능 환자감치장치 시스템 개발'} img={Ud3Photo} bar={BarImgR}/>
          <ResearchLayout barl={BarImgR} title={'신생아 집중치료에 적합한 다기능 스마트 보육기 개발'} img={Ud4Photo}/>
          <ResearchLayout title={'초음파 기반의 패치형 방광 모니터링 헬스케어 시스템 개발'} img={Ud5Photo} bar={BarImgR}/>
          <ResearchLayout barl={BarImgR} title={'조산 고위험 산모의 예측 및 검사 접근성의 향상을 위한 자궁근전도 기반의 무선 모니터링시스템 개발'} img={Ud6Photo}/>
          <ResearchLayout title={'초음파 영상기반 체외충격파 융합기기의 새로운 치료기능에 대한 임상적 유효성 평가'} img={Ud7Photo} bar={BarImgR}/>
          <ResearchLayout barl={BarImgR} title={'하안검 치료용 정밀 초음파 수술기에 대한 사용적합성 평가'} img={Ud8Photo}/>
          <ResearchLayout title={'현장진단·응급현장 시장 선도를 위한 ICT 기반 무선 초음파 솔루션 개발'} img={Ud9Photo} bar={BarImgR}/>

        </div>
        :
        choose ==='Progressing'?
        <div className={styles.udu_all}>
            <ResearchLayout title={'기능 융합형 초음파 영상기기'} img={Ud1Photo}bar={BarImgR}/>
            <ResearchLayout barl={BarImgR} title={'급만성 폐질환 치료를 위한 생체신호 분석기반 스마트 호흡치료기 개발'} img={Ud2Photo}/>
            <ResearchLayout title={'인공지능 기반 중증악화 예측 가능한 고성능 환자감치장치 시스템 개발<'} img={Ud3Photo}bar={BarImgR}/>
            <ResearchLayout barl={BarImgR} title={'신생아 집중치료에 적합한 다기능 스마트 보육기 개발'} img={Ud4Photo}/>
            <ResearchLayout title={'초음파 기반의 패치형 방광 모니터링 헬스케어 시스템 개발'} img={Ud5Photo}bar={BarImgR}/>
    
        </div>

        :
        <div className={styles.udu_all}>
        <ResearchLayout title={'조산 고위험 산모의 예측 및 검사 접근성의 향상을 위한 자궁근전도 기반의 무선 모니터링시스템 개발'} img={Ud6Photo} bar={BarImgR}/>
        <ResearchLayout barl={BarImgR} title={'초음파 영상기반 체외충격파 융합기기의 새로운 치료기능에 대한 임상적 유효성 평가'} img={Ud7Photo}/>
        <ResearchLayout title={'하안검 치료용 정밀 초음파 수술기에 대한 사용적합성 평가'} img={Ud8Photo}bar={BarImgR}/>
        <ResearchLayout barl={BarImgR} title={'현장진단·응급현장 시장 선도를 위한 ICT 기반 무선 초음파 솔루션 개발'} img={Ud9Photo}/>
        </div>
        
        
        
        }
      

    </div>
  )
}
