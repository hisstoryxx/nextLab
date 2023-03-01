import React, { useEffect, useRef } from "react";
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
import * as THREE from 'three';
import ThreeJS from "@/src/component/Three/Three";
const inter = Inter({ subsets: ['latin'] })

export default function Gallery() {



  return (
    <div>
      <Head>
        <title>
          Gallery | MDDU
        </title>
      </Head>

      {/* <div style = {{position : "relative", padding : "0 2rem", }}>
        <div style = {{display:"flex", }}>
        <ThreeJS />
        </div>
    
   
    </div>
     */}
     
      
    </div>
  )
}
