
import styles from './researchMI.module.css'
import React, {useState} from 'react';
// import Mi1Photo from "../../../components/img/mi01.JPG";
// import Mi2Photo from "../../../components/img/mi02.JPG";
// import Mi3Photo from "../../../components/img/mi03.JPG";
// import Mi4Photo from "../../../components/img/mi04.jpg";
import ResearchLayout from '../researchLayout/ResearchLayout';
import StudentLayout from '../../members/studentLayout/StudentLayout';
// import BarImgR from "../../../components/img/design_bar.png";

export default function ResearchMI() {
  const title="Research - Medical Industry Policy"


  const [choose,setChoose]=useState('All')

  const Mi1Photo = "images/mi01.jpg"
  const Mi2Photo = "images/mi02.jpg"
  const Mi3Photo = "images/mi03.jpg"
  const Mi4Photo = "images/mi04.jpg"

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
    <div className={styles.researchMI} >
      <div className={styles.mi_header} >
        <div className={styles.mi_title}>
          {title}
        </div>
  
        <div className={styles.mi_scrollMenu}>
           <ul className={styles.miList}>
            <li className={styles.miListItem} onClick={onAllResClick}style={{color: choose === 'All' ? 'black' : 'grey'}}>All</li>
            <li className={styles.miListItem} onClick={onProgResClick}style={{color: choose === 'Progressing' ? 'black' : 'grey'}}>Progressing</li>
            <li className={styles.miListItem} onClick={onClosedResClick}style={{color: choose === 'Closed' ? 'black' : 'grey'}}>Closed</li>

           </ul>
        </div>
      </div>

      {choose ==='All'?
       <div className={styles.mip_all}>
       <ResearchLayout title={'아이콜리에 대한 RA/QA 지원 용역'} img={Mi1Photo}bar={BarImgR}/>
       <ResearchLayout barl={BarImgR}title={'디지털 치료기기 임상설계 가이드라인 개발 연구'} img={Mi2Photo}/>
       <ResearchLayout title={'병원-기업 연계 의료기기 R&D 협력 플랫폼 기술개발 후속 사업을 위한 기획연구'} img={Mi3Photo}bar={BarImgR}/>
       <ResearchLayout barl={BarImgR}title={'혁신형 의료기기 기업 인증 기준 및 지원 방안 수립 연구'} img={Mi4Photo}/>
       </div>

        :
          choose==='Progressing'?
         <div className={styles.csd_all}>
         
         </div>
         : 
         <div className={styles.mip_all}>
          <ResearchLayout title={'아이콜리에 대한 RA/QA 지원 용역'} img={Mi1Photo}bar={BarImgR}/>
          <ResearchLayout barl={BarImgR}title={'디지털 치료기기 임상설계 가이드라인 개발 연구'} img={Mi2Photo}/>
          <ResearchLayout title={'병원-기업 연계 의료기기 R&D 협력 플랫폼 기술개발 후속 사업을 위한 기획연구'} img={Mi3Photo}bar={BarImgR}/>
          <ResearchLayout barl={BarImgR}title={'혁신형 의료기기 기업 인증 기준 및 지원 방안 수립 연구'} img={Mi4Photo}/>
        </div>
      }
     
    </div>
  )
}
