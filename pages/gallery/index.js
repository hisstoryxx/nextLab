import React, { useEffect, useRef } from "react";
import Head from 'next/head'
import Image from 'next/image'
import ChoGallery from "@/src/component/ChoGallery/ChoGallery";

import styles from './gallery.module.css'


export default function Gallery() {

 
  const galleryImages = [
    // 23년도 2월 졸업
    {
      img: 'images/23_graduation_1.JPG',
      title: '2023년도 2월 졸업',
    },
    {
      img: 'images/23_graduation_2.JPG',
      title: '2023년도 2월 졸업',
    },
    {
      img: 'images/23_graduation_3.JPG',
      title: '2023년도 2월 졸업',
    },
    {
      img: 'images/23_graduation_4.JPG',
      title: '2023년도 2월 졸업',
    },
    {
      img: 'images/23_graduation_5.JPG',
      title: '2023년도 2월 졸업',
    },
    {
      img: 'images/23_graduation_6.JPG',
      title: '2023년도 2월 졸업',
    },
    {
      img: 'images/23_gra_1.JPG',
      title: '2023년도 2월 졸업 ',
    },
    {
      img: 'images/23_gra_2.JPG',
      title: '2023년도 2월 졸업 ',
    },
    {
      img: 'images/23_gra_3.JPG',
      title: '2023년도 2월 졸업 ',
    },
    {
      img: 'images/23_gra_4.JPG',
      title: '2023년도 2월 졸업 ',
    },

    {
      img: 'images/23_gra_5.JPG',
      title: '2023년도 2월 졸업 ',
    },


    // 22년도 8월 졸업
    {
      img: 'images/my_gra_1.jpeg',
      title: '2022년도 8월 졸업 ',
    },
    {
      img: 'images/my_gra_2.jpeg',
      title: '2022년도 8월 졸업 ',
    },

    {
      img: 'images/202207jeju1.jpg',
      title: '2022년도 대한전자공학회 하계종합학술 대회 1',
    },
    {
      img: "images/202207jeju2.jpg",
      title: '2022년도 대한전자공학회 하계종합학술 대회 2'
    },
    {
      img: "images/iceic2022_1.jpg",
      title: '2022년도 대한전자공학회 동계종합학술 대회 1'
    },
    {
      img: "images/iceic2022_2.jpg",
      title: '2022년도 대한전자공학회 동계종합학술 대회 2'
    },
    {
      img: "images/iceic2022_3.jpg",
      title: '2022년도 대한전자공학회 동계종합학술 대회 3'
    },
    {
      img: "images/iceic2022_4.jpg",
      title: '2022년도 대한전자공학회 동계종합학술 대회 4'
    },
    {
      img: "images/kimes2021_1.jpg",
      title: '2021년도 부산 의료기기전시회 KIMES 1'
    },
    {
      img: "images/elec2021_1.jpg",
      title: '2021년도 대한전자공학회 하계종합학술대회 1'
    },
    {
      img: "images/elec2021_2.jpg",
      title: '2021년도 대한전자공학회 하계종합학술대회 2'
    },
    {
      img: "images/mddu2021_1.JPG",
      title: '2021년도 의료기기 설계 및 사용적합성 연구실 세미나'
    },
    {
      img: "images/elec2020_1.jpg",
      title: '2020년도 대한전자공학회 하계종합학술대회 1'
    },
    {
      img: "images/elec2020_2.jpg",
      title: '2020년도 대한전자공학회 하계종합학술대회 2'
    },
    {
      img: "images/mddu2020_1.jpg",
      title: '2020년도 의료기기 설계 및 사용적합성 연구실 세미나'
    },
    {
      img: "images/mddu2020_2.jpg",
      title: '2020년도 의료기기 설계 및 사용적합성 연구실 세미나'
    },
  ]

  return (
    <div>
      <div style = {{  }}>
      <Head>
        <title>
          Gallery | MDDU
        </title>
      </Head>

      
        <div className ={styles.body}>

        <ChoGallery 
          galleryImages = {galleryImages}
        />
        </div>
     
    </div>
    
     
      
    </div>
  )
}
