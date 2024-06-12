import styles from './map.module.css'
//import React,{Component} from 'react';
//import GoogleMapReact from 'google-map-react';

export default function Map() {
  
  return (
    <div className={styles.Map}>
    <iframe className={styles.map_content} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.566399387759!2d127.04224831557136!3d37.49455733600421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca6aa3bc35311%3A0x5325d937f392aef!2s20%20Eonju-ro%2063-gil%2C%20Gangnam-gu%2C%20Seoul!5e0!3m2!1sen!2skr!4v1649317935001!5m2!1sen!2skr" 
    
    loading="lazy"></iframe>
         
    </div>
  )
}


