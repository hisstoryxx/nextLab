import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import React,{useEffect,useState} from 'react'




export default function Home() {

  const [position, setPosition] = useState(0);
  
  const onScroll = () => {
    setPosition(window.scrollY);
    console.log(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    }
  },[])

 

  return (
    <div>
    <div style ={{position : 'relative', padding : '0 2rem',}}>
      <Head>
        <title>
           MDDU | Medical Device Design & Usability Lab
        </title>
        <link rel="shortcut icon" href="/favicon.ico"/>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>


      <style jsx>{`
            

          

           

         
                        `}

        </style>
      
      <div className ={styles.header}>
            <div className={styles.headerTitles}>

              
              <div className={styles.container}>
                    <span className={styles.headerTitleSmall} style = {{ color: position > 0  ? "#fff" : null,}} >MDDU 의료기기 설계 및 사용적합성 연구실</span>
                    <span className={styles.headerTitleSmaller} style = {{ color: position > 0  ? "#fff" : null,}}>Medical Device Design & Usability Lab</span>

                </div>
                <div className = {styles.back} style = {{backgroundPositionY : position /1.2, opacity : 0.4 +  position/3}}>

                </div>
                {/* <img style={{display: 'flex', width: '100%', height: '100%', objectFit: &quotcontain&quot}} src=&quotimages/main_design_img.png&quot alt=&quot/> */}
                
                
            {/* </div> */}

            <div style = {{display: 'flex', width: '100%', height: '100%',  justifyContent:'center'}}>
              <div style ={{display: 'flex', flexDirection:'column', width: '80%', height: '80%', }}>
                <div style = {{marginTop: '30px',opacity: (position - 10)/50 + 0.5 }}> 
                  <div className = {styles.units}>
                <div className = {styles.visionText}>VISON </div>
                <div className = {styles.visionText}>VISON </div>
                </div>


                </div>
               
               
           <img style={{ display: 'flex', opacity: (position - 20)/50 + 0.9, width: '100%', height: '100%', objectFit:'contain', zIndex: -1}} src='images/upGo.jpeg' alt=''/>
                
                
                <div style ={{ 
                  display: 'flex',
                  position : 'relative',
                  padding : '0 2rem',
                 
                 
  }}>
                <div className = {styles.listContainer}>
                <ul className = {styles.links}>
                    <li className = {styles.li} style ={{backgroundColor:'#00489a' ,opacity: (position - 30)/50 + 0.95,  }} >
                    <Link href = {{pathname: 'research', query: { id : 'clinical'}}} style = {{textAlign:'center',}}><contents className = {styles.contents} >Clinical Study Design</contents></Link>
                    </li>
                    <li className = {styles.li} style = {{ backgroundColor:'#003979',opacity: (position - 30)/50+ 0.95}}>
                    <Link href = {{pathname: 'research', query: { id : 'uxui'}}} style = {{textAlign:'center', textDecoration: 'none'}}><contents className = {styles.contents}>UX/UI Design & Usability</contents> 
                      </Link>
                      </li>
                    <li  className = {styles.li} style ={{ backgroundColor: '#005d8a',opacity: (position - 30)/50+ 0.95}}>
                    <Link href = {{pathname: 'research', query: { id : 'industry'}}} style = {{textAlign:'center', textDecoration: 'none'}}><contents className = {styles.contents}>Medical Device Industry Policy</contents> 
                      </Link>
                    </li>
                    <li  className = {styles.li} style = {{backgroundColor: '#0086c4',opacity: (position - 30)/50+ 0.95}}>
                    <Link href = {{pathname: 'research', query: { id : 'bio'}}} style = {{textAlign:'center', textDecoration: 'none'}}> <contents className = {styles.contents}>Bio-Signal Processing & AI</contents> 
                      </Link>
                      </li>
                    
                </ul>
                </div>
                </div>
              </div>


              
              
            </div>


            <div style = {{display: 'flex', flexDirection:'column', position : 'relative' , marginTop: '100px', marginBottom: '100px', width: '100%', height: '100%',  justifyContent:'center', alignSelf:'center', marginBottom: '300px'}}>
              
            <p className = {styles.textContainer1} style = {{opacity: (position-100)/100}}>
              We do 
            </p>
            <p className = {styles.textContainer2} style = {{opacity: (position-140)/100}}>
            &quot;Design &amp; Development&quot;
            </p>
            <p className = {styles.textContainer3} style = {{opacity: (position-180)/100}}>
            and...
            </p>
            <p className = {styles.textContainer4} style = {{opacity: (position-250)/50}}>
            &quot;Research &amp; Evaluation&quot;
            </p>
            <p className = {styles.textContainer5} style = {{opacity: (position-300)/50}}>
            focusing on
            </p>
            <p className = {styles.textContainer6} style = {{opacity: (position-340)/50}}>
            &quot;Practical Healthcare Industry&quot;
            </p>
            <p className = {styles.textContainer7} style = {{opacity: (position-380)/100}}>
            within
            </p>
            <p className = {styles.textContainer8} style = {{opacity: (position-420)/100}}>
            &quot;Medical Device Regulation&quot;
            </p>
            </div>

            <div>

            </div>

            
          
          
        </div>
        </div>
    </div>


</div>
  )
}
