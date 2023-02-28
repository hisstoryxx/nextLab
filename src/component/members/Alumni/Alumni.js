
import styles from './Alumni.module.css'
import React, {useRef} from 'react';
import AluminiLayout from '../AluminiLayout/AluminiLayout';

// import MisoPhoto from "../../../components/img/miso.png";
// import InsikPhoto from "../../../components/img/insik.png";
// import SihyunPhoto from "../../../components/img/sihyun.png";
// import HanjiPhoto from "../../../components/img/hanji.png";
// import JeongukPhoto from "../../../components/img/jeonguk.jpg";
// import MiwonPhoto from "../../../components/img/miwon.jpg";
// import EunseonPhoto from "../../../components/img/eunseon.jpg";
// import YoungboPhoto from "../../../components/img/youngbo.jpg";
// import BarImgAlu from "../../../components/img/design_bar.png";
// import ChoroPhoto from "../../../components/img/cho.jpeg";

// import { Link } from 'react_router_dom';


export default function Alumni() {

 
  return (   
  <div className={styles.alumni}>

      <div className={styles.alu_header} >
        <div className={styles.alu_title}>
          Alumni
        </div>
      </div>
    <AluminiLayout 
        course = {"MS"} 
        photo = {"miso.png"} 
        name = {"Miso Choi"} 
        edu1 = {"Master in Medical Device Engineering & Management (2020)"} 
        dissertation = {"Strategies for Korean Medical Devices to enter the Chinese market through the Analysis of Chinese Devices System"} 
        affilation = {""} 
        con = {"msc17@yonsei.ac.kr"}   />
    <AluminiLayout 
        course = {"MS"} 
        photo = {"insik.png"} 
        name = {"Insik Im"} 
        edu1 = {"Master in Medical Device Engineering & Management (2021)"} 
        dissertation = {"Strategies for Korean Medical Devices to enter the Chinese market through the Analysis of Chinese Devices SysteA Study on the Diagnosis Korea Medical Device Industry through Management Performance and Enterprise Value "} 
        affilation = {"Medtronic"} 
        con = {"insik7410@gmail.com"}   />
    <AluminiLayout 
        course = {"MS"} 
        photo = {"sihyun.png"} 
        name = {"Sihyun Han"} 
        edu1 = {"Master in Medical Device Engineering & Management (2021)"} 
        dissertation = {"A Study on the Application of Digital Clinical Trial System to Medical Device"} 
        affilation = {"Synex"} 
        con = {"2007andy@naver.com"}   />
    <AluminiLayout 
        course = {"MS"} 
        photo = {"hanji.png"} 
        name = {"Hanji Lee"} 
        edu1 = {"Master in Medical Device Engineering & Management (2022)"} 
        dissertation = {"Improvement of domestic regulation based on analysis of global regulations for digital therapeutics"} 
        affilation = {"Abbott"} 
        con = {"hangilee00@gmail.com"}   />
    <AluminiLayout 
        course = {"MS"} 
        photo = {"jeonguk.jpg"} 
        name = {"Jeonguk Choi "} 
        edu1 = {"Master in Medical Device Engineering & Management (2022)"} 
        dissertation = {"User Interface Design for Ventilator Central Monitoring System Applying Human Factors Engineering"} 
        affilation = {"Vuno"} 
        con = {"hrju5110@naver.com"}   />
    <AluminiLayout 
        course = {"MS"} 
        photo = {"miwon.jpg"} 
        name = {"MiWon Song"} 
        edu1 = {"Master in Medical Device Engineering & Management (2022)"} 
        dissertation = {"Assessment for usefulness of A_mode sonography for muscle change after training"} 
        affilation = {"Gangnam Severance Hospital (Medical Device Usability Research Center) "} 
        con = {"aldnjthd@naver.com / mwsong0529@yuhs.ac"}   />
    
      <AluminiLayout 
        course = {"MS"} 
        photo = {"eunseon.jpg"} 
        name = {"EunSeon Lee  "} 
        edu1 = {"Master in Medical Device Engineering & Management (2022)"} 
        dissertation = {"Analysis of Emergency Use Authorization (EUA) for In Vitro Diagnostic Medical Devices (IVD) on Emerging Infectious Disease "} 
        affilation = {"Seegene"} 
        con = {"eunseon.lee92@gmail.com"}   />
    <AluminiLayout 
        course = {"MS"} 
        photo = {"youngbo.jpg"} 
        name = {"Youngbo Cho   "} 
        edu1 = {"Master in Medical Device Engineering & Management (2022)"} 
        dissertation = {"A Study on the Global Harmonized Adverse Event Reporting System for Domestic Medical Device Manufacturers "} 
        affilation = {"Guerbet"} 
        con = {"miracle0134@naver.com"}   />
    <AluminiLayout 
        course = {"MS"} 
        photo = {"cho.jpeg"} 
        name = {"Choro Choi"} 
        edu1 = {"Master in Medical Device Engineering & Management (2022)"} 
        dissertation = {"Development of cloud_based remote monitoring system for peritoneal dialysis patients"} 
        affilation = {"MDOC"} 
        con = {"hisstoryxx@gmail.com"}   />
    <AluminiLayout 
        course = {"Ph.D course"} 
        photo = {"yourim.png"} 
        name = {"Yourim Kim"} 
        edu1 = {"Ph.D in Medical Device Engineering & Management (2023)"} 
        dissertation = {"Optimization of Medical Device Clinical Evaluation Design Based on Analysis of Clinical Effectiveness and Usability"} 
        affilation = {"Post.D"} 
        con = {"yxxrm_k@naver.com / yxxrmk@yonsei.ac.kr"}   />

<AluminiLayout 
        course = {"MS / Ph.D course"} 
        photo = {"sangeun.png"} 
        name = {"Sangeun Park"} 
        edu1 = {"Master & Ph.D in Medical Device Engineering & Management (2023)"} 
        dissertation = {"Application of medical device regulatory science to life cycle for a wearable bladder monitoring system"} 
        affilation = {"EDGECARE"} 
        con = {"pse7036@naver.com"}   />

<AluminiLayout 
        course = {"MS"} 
        photo = {"seulbi.png"} 
        name = {"Seulbi Lee"} 
        edu1 = {"Master in Medical Device Engineering & Management (2023)"} 
        dissertation = {"A Study on the Development of the Clinical Trial Protocol of Wireless Echocardiographic Imaging Device"} 
        affilation = {""} 
        con = {"bee5747@naver.com"}   />

<AluminiLayout 
        course = {"MS"} 
        photo = {"jiyun.jpg"} 
        name = {"Jiyun Jeong"} 
        edu1 = {"Master in Medical Device Engineering & Management (2023)"} 
        dissertation = {"The optimization of Design for Breast Ultrasound Diagnosis System Based on Usability Engineering "} 
        affilation = {""} 
        con = {"ravissante25@gmail.com"}   />
    <AluminiLayout 
    course = {"MS"} 
    photo = {"heeyoung.png"} 
    name = {"Heeyeong Choi"} 
    edu1 = {"Master in Medical Device Engineering & Management (2023)"} 
    dissertation = {"Development of Clinical Protocol to Evaluate Safety and Efficacy of Gastrointestinal Endoscopy Images Analysis Artificial Intelligence Software"} 
    affilation = {"Siemens Healthineers"} 
    con = {"chy980423@naver.com"}   />


  </div>
   
  )
}
