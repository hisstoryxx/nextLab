import React, {useRef} from 'react';
// import YourimPhoto from "../../../components/img/yourim.png";
// import SangeunPhoto from "../../../components/img/sangeun.png";
// import HyeonkyeongPhoto from "../../../components/img/hyeonkyeong.jpg";
// import JiyongPhoto from "../../../components/img/jiyong.jpg";
// import ChoroPhoto from "../../../components/img/choro.jpg";
// import HeeyoungPhoto from "../../../components/img/heeyoung.png";
// import JiyunPhoto from "../../../components/img/jiyun.jpg";
// import SeulbiPhoto from "../../../components/img/seulbi.png";
// import JeonghwaPhoto from "../../../components/img/jeonghwa.png";
// import KanghyeonPhoto from "../../../components/img/kanghyeon.png";
// import JiminPhoto from "../../../components/img/jimin.jpg";
// import SeungheePhoto from "../../../components/img/seunghee.png";
// import GyeongminPhoto from "../../../components/img/gyeongmin.png";
// import SehoPhoto from "../../../components/img/seho.jpg";
// import YujeongPhoto from "../../../components/img/yujeong.jpg";
// import ChanghyunPhoto from "../../../components/img/changhyun.png";

import Intern from '../Intern/Intern';
import StudentLayout from '../studentLayout/StudentLayout';


// import BarImgStu from "../../../components/img/design_bar.png";

import styles from './Student.module.css';


/*<StudentLayout 
course = {'MS course'}
photo = {ChanghyunPhoto}
name = {'Changhyun Lim'}
EName = {null} 
edu1 = {'Bachelor in Healthcare Industry, Cha University (2021)'} 
edu2 = {null} 
int = {'Medical Device Clinical Study Design, Clinical Effectiveness Evaluation, \nMedical Regulatory Affairs'}
con = {'julius1231@naver.com'}
rphoto={BarImgStu}/>

<StudentLayout 

course = {'MS course'}
photo = {SehoPhoto}
name = {'Seho Kim'}
EName = {null} 
edu1 = {'Bachelor in Life science, Dongguk University(2022)'} 
edu2 = {null} 
int = {'Medical Device Clinical Study Design, Clinical Effectiveness Evaluation'}
con = {'shkim2022@yonsei.ac.kr'}
rphoto={BarImgStu}/>  
<StudentLayout 
course = {'MS course'}
photo = {ChoroPhoto}
name = {'Choro Choi'}
EName = {null} 
edu1 = {'Bachelor in Biomedical Engineering, Yonsei University (2020)'} 
edu2 = {null} 
int = {'Signal & Image processing, AI & Deep learning, Programming, UI design'}
con = {'hisstoryxx@gmail.com / chororo@yonsei.ac.kr'}
rphoto={BarImgStu}/>


*/




export default function Student({select ,setSelect, selectStudent, setSelectStudent }) {
  const to="-"

  console.log(selectStudent)

  const BarImgStu = "images/design_bar.png"
  return (
    <div className={styles.student} >
      {select === 'Student' && selectStudent === '' ? 

<>
<div className={styles.stu_header} >
   <div className={styles.stu_title}>
   Researchers & Students
  </div>
</div>
<StudentLayout 
course = {'PostDoc - course'}
photo = {"images/yourim.png"}
name = {'Yourim Kim'}
EName = {null} 
edu1 = {'Master in Medical Device Engineering & Management (2020)'} 
edu2 = {'Bachelor in Biomedical Engineering, Konkuk University (2017)'} 
edu3 = {'Doctor in Medical Device Engineering & Management (2023)'}
int = {'Clinical Effectiveness Evaluation,\nUsability/Human Factors Engineering,\nMedical Device Industry Policy, Medical Regulatory Affairs'}
con = {'yxxrm_k@naver.com / yxxrmk@yonsei.ac.kr'}
/>


<StudentLayout 
lphoto={BarImgStu}
course = {'MS / Ph.D course'}
photo = {"images/hyeonkyeong.jpg"}
name = {'Hyeonkyeong Choi'}
EName = {null} 
edu1 = {'Bachelor in Healthcare Industry, Cha University (2021)'} 
edu2 = {null} 
int = {'UX/UI Design, Usability/Human Factors Engineering'}
con = {'hyeonkyeong97@daum.net / hyeonk@yonsei.ac.kr'}/>


{/* <StudentLayout 

course = {'MS course'}
photo = {"images/heeyoung.png"}
name = {'Heeyeong Choi'}
EName = {null} 
edu1 = {'Bachelor in Biomedical Engineering, Yonsei University (2021)'} 
edu2 = {null} 
int = {'Medical Device Clinical Study Design, Clinical Effectiveness Evaluation, \nMedical Regulatory Affairs'}
con = {'chy980423@naver.com / hyeong0423@yonsei.ac.kr'}
rphoto={BarImgStu}/> */}



<StudentLayout 
lphoto={BarImgStu}
course = {'MS course'}
photo = {"images/jimin.jpg"}
name = {'Jimin Son'}
EName = {null} 
edu1 = {'Bachelor in Biomedical Engineering, Dongguk University (2021)'} 
edu2 = {null} 
int = {'Medical Device Clinical Study Design, Medical Regulatory Affairs'}
con = {'wlals2qj@naver.com / jmson1707@yonsei.ac.kr'}
/>

<StudentLayout 
course = {'MS course'}
photo = {"images/kanghyeon.png"}
name = {'Kanghyeon You'}
EName = {null} 
edu1 = {'Bachelor in Healthcare Industry, Cha University (2021)'} 
edu2 = {null} 
int = {'Medical Device Industry Policy, Medical Regulatory Affairs'}
con = {'hap2boy@naver.com / hap2boy@yonsei.ac.kr'}
rphoto={BarImgStu}/>

<StudentLayout 
lphoto={BarImgStu}
course = {'MS course'}
photo = {"images/jeonghwa.png"}
name = {'Jeonghwa Lim'}
EName = {null} 
edu1 = {'Bachelor in Biomedical Engineering, Yonsei University (2021)'} 
edu2 = {null} 
int = {'Bio-signal processing, AI & Deep learning'}
con = {'lim9234@hanmail.net'}/>



<StudentLayout 

course = {'MS course'}
photo = {"images/gyeongmin.png"}
name = {'Gyeongmin Kwon'}
EName = {null} 
edu1 = {'Bachelor in Korean language and literature, Yonsei University(2020)'} 
edu2 = {null} 
int = {'Usability/Human Factors Engineering, Medical Regulatory Affairs'}
con = {'kdskkm12@naver.com'}
rphoto={BarImgStu}/>





<StudentLayout 
lphoto={BarImgStu}
course = {'MS course'}
photo = {"images/seunghee.png"}
name = {'Seunghee Kim'}
EName = {null} 
edu1 = {'Bachelor in Healthcare Industry, Cha University (2021)'} 
edu2 = {null} 
int = {'Usability/Human Factors Engineering, Medical Device Industry Policy'}
con = {'sshee0710@naver.com'}
/>

<StudentLayout 

course = {'MS course'}
photo = {"images/yujeong.jpg"}
name = {'Yujeong Ma'}
EName = {null} 
edu1 = {`Bachelor in Chemistry, Duksung Women's University(2022)`} 
edu2 = {null} 
int = {'Medical Device Clinical Study Design, Clinical Effectiveness Evaluation'}
con = {'lemontree1235@naver.com'}
rphoto={BarImgStu}
/>



<StudentLayout 
lphoto={BarImgStu}
course = {'MS / Ph.D course'}
photo = {"images/jiyong.jpg"}
name = {'Jiyong Chung'}
EName = {null} 
edu1 = {'Bachelor in Computer Engineering, Tech University of Korea (2022)'} 
edu2 = {null} 
int = {'Usability/Human Factors Engineering '}
con = {'cowjy0427@yonsei.ac.kr'}
/>

<StudentLayout 
lphoto={BarImgStu}
course = {'MS course'}
photo = {"images/jiyoon.jpeg"}
name = {'Jiyoon Oh'}
EName = {null} 
edu1 = {`Bachelor in Biomedical Engineering, Yonsei University (2023)`} 
edu2 = {null} 
int = {' Medical Device Clinical Study Design, Medical Regulatory Affairs'}
con = {'5wldbs27@naver.com'}

/>


<div className={styles.stu_profile}>

</div>

</>

      :


      select === 'Student' && selectStudent ==='Post.D course'?
        <>
          <div className={styles.stu_header} >
             <div className={styles.stu_title}>
               Researchers {to} Post.D course
            </div>
          </div>
          <StudentLayout 
            course = {'PostDoc - course'}
            photo = {"images/yourim.png"}
            name = {'Yourim Kim'}
            EName = {null} 
            edu1 = {'Master in Medical Device Engineering & Management (2020)'} 
            edu2 = {'Bachelor in Biomedical Engineering, Konkuk University (2017)'} 
            edu3 = {'Doctor in Medical Device Engineering & Management (2023)'}
            int = {'Clinical Effectiveness Evaluation,\nUsability/Human Factors Engineering,\nMedical Device Industry Policy, Medical Regulatory Affairs'}
            con = {'yxxrm_k@naver.com / yxxrmk@yonsei.ac.kr'}
            />


        
         <div className={styles.stu_profile}>
     
        </div>
          
         
        </>
      :
      select === 'Student' && selectStudent ==='Ph.D course'?
        <>
          <div className={styles.stu_header} >
             <div className={styles.stu_title}>
               Students {to} Ph.D course
            </div>
          </div>
       

         {/* <StudentLayout 
              
              course = {'Ph.D course'}
              photo = {"images/yourim.png"}
              name = {'Yourim Kim'}
              EName = {null} 
              edu1 = {'Master in Medical Device Engineering & Management (2020)'} 
              edu2 = {'Bachelor in Biomedical Engineering, Konkuk University (2017)'} 
              int = {'Medical Device Clinical Study Design, Clinical Effectiveness Evaluation, \nMedical Device Industry Policy, Medical Regulatory Affairs'}
              con = {'yxxrm_k@naver.com / yxxrmk@yonsei.ac.kr'}
              rphoto={BarImgStu}/>
               */}
         <div className={styles.stu_profile}>
     
        </div>
          
         
        </>
        :

        selectStudent==='MS/Ph.D course'?
        <>
          <div className={styles.stu_header} >
             <div className={styles.stu_title}>
               Students {to} MS/Ph.D course
            </div>
          </div>
       {/* <StudentLayout
       
       course = {'MS / Ph.D course'}
        photo = {"images/sangeun.png"}
        name = {'Sangeun Park'}
        EName = {null} 
        edu1 = {'Bachelor in Biomedical Engineering, Yonsei University (2018)'} 
        edu2 = {null} 
        int = {'UX/UI Design,  Usability/Human Factors Engineering, Android Programming'}
        con = {'pse7036@naver.com / sang-eun.park@yonsei.ac.kr'}
        rphoto={BarImgStu}/> */}

      <StudentLayout 
        lphoto={BarImgStu}
        course = {'MS / Ph.D course'}
        photo = {"images/hyeonkyeong.jpg"}
        name = {'Hyeonkyeong Choi'}
        EName = {null} 
        edu1 = {'Bachelor in Healthcare Industry, Cha University (2021)'} 
        edu2 = {null} 
        int = {'UX/UI Design, Usability/Human Factors Engineering'}
        con = {'hyeonkyeong97@daum.net / hyeonk@yonsei.ac.kr'}/>

      <StudentLayout 
        course = {'MS / Ph.D course'}
        photo = {"images/jiyong.jpg"}
        name = {'Jiyong Chung'}
        EName = {null} 
        edu1 = {'Bachelor in Computer Engineering, Tech University of Korea (2022)'} 
        edu2 = {null} 
        int = {'Usability/Human Factors Engineering '}
        con = {'cowjy0427@yonsei.ac.kr'}
        rphoto={BarImgStu}
        />
     
        <div className={styles.stu_profile}>
     
        </div>
      
        
        </>

        :
        selectStudent==='MS course'?
        <>
         <div className={styles.stu_header} >
             <div className={styles.stu_title}>
               Students {to} MS course
            </div>
          </div>
        

        {/* <StudentLayout 
       lphoto={BarImgStu}
       course = {'MS course'}
       photo = {"images/seulbi.png"}
       name = {'Seulbi Lee'}
       EName = {null} 
        edu1 = {'Bachelor in Biomedical Engineering, Yonsei University (2021)'} 
        edu2 = {null} 
        int = {'Medical Device Clinical Study Design, Clinical Effectiveness Evaluation'}
        con = {'bee5747@naver.com / bee5747@yonsei.ac.kr'}/>
 */}

        {/* <StudentLayout 
       course = {'MS course'}
       photo = {"images/jiyun.jpg"}
       name = {'Jiyun Jeong'}
       EName = {null} 
        edu1 = {'Bachelor in Biomedical Engineering, Yonsei University (2014)'} 
        edu2 = {null} 
        int = {'Usability/Human Factors Engineering'}
        con = {'ravissante25@gmail.com / jiyunj@yonsei.ac.kr'}
        rphoto={BarImgStu}/> */}

       {/* <StudentLayout 
       lphoto={BarImgStu}
       course = {'MS course'}
       photo = {"images/heeyoung.png"}
       name = {'Heeyeong Choi'}
       EName = {null} 
        edu1 = {'Bachelor in Biomedical Engineering, Yonsei University (2021)'} 
        edu2 = {null} 
        int = {'Medical Device Clinical Study Design, Clinical Effectiveness Evaluation, \nMedical Regulatory Affairs'}
        con = {'chy980423@naver.com / hyeong0423@yonsei.ac.kr'}/> */}

        <StudentLayout 
       course = {'MS course'}
       photo = {"images/jimin.jpg"}
       name = {'Jimin Son'}
       EName = {null} 
        edu1 = {'Bachelor in Biomedical Engineering, Dongguk University (2021)'} 
        edu2 = {null} 
        int = {'Medical Device Clinical Study Design, Medical Regulatory Affairs'}
        con = {'wlals2qj@naver.com / jmson1707@yonsei.ac.kr'}
        rphoto={BarImgStu}/>

        <StudentLayout 
      lphoto={BarImgStu}
      course = {'MS course'}
      photo = {"images/kanghyeon.png"}
      name = {'Kanghyeon You'}
      EName = {null} 
        edu1 = {'Bachelor in Healthcare Industry, Cha University (2021)'} 
        edu2 = {null} 
        int = {'Medical Device Industry Policy, Medical Regulatory Affairs'}
        con = {'hap2boy@naver.com / hap2boy@yonsei.ac.kr'}/>


      <StudentLayout 
        course = {'MS course'}
        photo = {"images/jeonghwa.png"}
        name = {'Jeonghwa Lim'}
        EName = {null} 
        edu1 = {'Bachelor in Biomedical Engineering, Yonsei University (2021)'} 
        edu2 = {null} 
        int = {'Bio-signal processing, AI & Deep learning'}
        con = {'lim9234@hanmail.net'}
        rphoto={BarImgStu}/>

    

      
<StudentLayout 
lphoto={BarImgStu}
course = {'MS course'}
photo = {"images/gyeongmin.png"}
name = {'Gyeongmin Kwon'}
EName = {null} 
edu1 = {'Bachelor in Korean language and literature, Yonsei University(2020)'} 
edu2 = {null} 
int = {'Usability/Human Factors Engineering, Medical Regulatory Affairs'}
con = {'kdskkm12@naver.com'}
/>




<StudentLayout 
course = {'MS course'}
photo = {"images/seunghee.png"}
name = {'Seunghee Kim'}
EName = {null} 
edu1 = {'Bachelor in Healthcare Industry, Cha University (2021)'} 
edu2 = {null} 
int = {'Usability/Human Factors Engineering, Medical Device Industry Policy'}
con = {'sshee0710@naver.com'}
rphoto={BarImgStu}/>

<StudentLayout 
lphoto={BarImgStu}
course = {'MS course'}
photo = {"images/yujeong.jpg"}
name = {'Yujeong Ma'}
EName = {null} 
edu1 = {`Bachelor in Chemistry, Duksung Women's University(2022)`} 
edu2 = {null} 
int = {'Medical Device Clinical Study Design, Clinical Effectiveness Evaluation'}
con = {'lemontree1235@naver.com'}

/>

<StudentLayout 
lphoto={BarImgStu}
course = {'MS course'}
photo = {"images/jiyoon.jpeg"}
name = {'Jiyoon Oh'}
EName = {null} 
edu1 = {`Bachelor in Biomedical Engineering, Yonsei University (2023)`} 
edu2 = {null} 
int = {' Medical Device Clinical Study Design, Medical Regulatory Affairs'}
con = {'5wldbs27@naver.com'}

/>



<div className={styles.stu_profile}>

</div>

         
         </>
         
         :
        selectStudent==='Intern'?
         <>
          <div className={styles.stu_header} >
             <div className={styles.stu_title}>
             Students {to} Intern
            </div>
          </div>
           <Intern/>

         </>
         :

         null

         
         
  }


    </div>
      
      
      
   
  )
 
} 