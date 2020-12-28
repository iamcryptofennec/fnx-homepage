import Head from 'next/head';
import Section_1 from '../components/Section_1'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

import Link from '../components/Link'
import AOS from 'aos'
import {useEffect} from 'react'
import 'aos/dist/aos.css';

 

export default function Home() {
  useEffect(() => {
    AOS.init({once: true});
  })
  return (
    <div className="appContainer">
      <Head>
        <title>FinNexus Options</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:ital,wght@0,300;0,700;1,300&display=swap" rel="stylesheet"></link>
      </Head>
      <div className="sizeRestrictor">
        <main>
        <Navbar background_color="#224099"/>

          <Section_1 background_color="#224099">
            <div className="mainContents">
              <div className="main_text_container">
                <h1 className="mainTitle">
                  FinNexus Options 
                </h1>
                <h2 className="version">v1.0</h2>
                <div className="mainContentsText_1">
                FinNexus Options makes it easy to buy and exercise <span className="strong italic">BTC</span>, <span className="strong italic">ETH</span>, <span className="strong italic">LINK</span>, <span className="strong italic">SNX</span>, and <span className="strong italic">MKR</span> options in a <span className="strong italic">secure</span> and <span className="strong italic">decentralized</span> way on Ethereum & Wanchain.
                <div className="line_spacer"></div>
                <span className="strong italic">Earning</span> with FinNexus Options is even easier! Simply add <span className="strong italic">FNX</span>, <span className="strong italic">WAN</span>, or <span className="strong italic">USDC</span> to the liquidity pool and begin collecting rewards!
                <span className="italic"></span>
                </div>
                <div className="instructions">(Support for more tokens coming soon!)</div>
               <a href="https://options.finnexus.io/#/" target="_blank"><button className="is-rounded button sign-up is-danger">Try FPO v1.0</button></a> 
                <img className="section_1_large_bg" src="top_illustration.svg" />
                
              </div>
            </div>
          </Section_1>
          
          <div className="section_2">
            <div className="section_2_img_container">
              <img data-aos-duration="500" data-aos-delay="100" data-aos="fade-right"  className="section_2_img section_2_img_desktop" src="EarnNow2.svg" />
              <img data-aos-duration="500" data-aos-delay="100" data-aos="fade-right" className="section_2_img section_2_img_mobile" src="earn.svg" />

            </div>
            <div data-aos-duration="500" data-aos-delay="300" data-aos="fade-left" className="section_2_imageAside">
              <h3 className="section-2-header section-header">Add Liquidity & Earn!</h3>
              <p className="section-2-text">With FPO v1.0, liquidity providers earn attractive rewards for trustlessly locking their assets in the the MASP liquidity pool.</p>
              <div className="float-container section_2_button">
              <div className="instructions instructions_2">Add FNX, USDC, or WAN liquidity to earn!</div>
              <Link href="https://options.finnexus.io/#/">
                <a  target="_blank">
                  <button className="is-rounded float-left section-2-button button is-danger">Earn Now!</button>
                </a>
              </Link>
              </div>
            </div>
          </div>

          <div className="section_3">
            <div className="section_3_img_container">
              <img data-aos-duration="500" data-aos-delay="100" data-aos="fade-left" className="section_3_img" src="FNX_options.svg" />
            </div>
            <div data-aos-duration="500" data-aos-delay="300" data-aos="fade-right" className="section_3_imageAside">
              <h3 className="section-3-header section-header"> Hedge & Leverage</h3>
              <p className="section-3-text">FPO's wide variety of options makes it easy to find just the solution for your investment needs, and our MASP liquidity pool ensures you never need to worry if there's enough liquidity.</p>
              <div className="instructions instructions_2">Hedge or leverage BTC, ETH, & ERC20 tokens now with FinNexus Protocol for Options!</div>
              <Link href="https://options.finnexus.io/#/">
                  <a  target="_blank">
                    <button className="is-rounded float-left section-2-button button is-danger">Buy Options!</button>
                  </a>
                </Link>
             </div>
          </div>

          
        </main>
        
        <Footer></Footer>

      </div>

      <style jsx>{`
        .line_spacer {
          margin-top: 6px;
          margin-bottom: 6px;
        }
        .section_2_img_mobile{
          display: none;
        }
        .section_2_img_desktop{
          display: block;
        }
        .section-header {
          color: #9F66A9;
        }
        .main_text_container {
          width: 500px;
        }
        main {
          overflow: visible: 
        }
        .float-left { 
          float: left
        }
        strong {
          color: inherit
        }
        * {
          -webkit-box-sizing: border-box;
                  box-sizing: border-box;
          position: relative;
        }
        .float-right {
          float: right;
        }
        
        .sub-section-header {
          color: #9F66A9;   
        }
        html, body {
          font-weight: 900;
          overflow: visible;
          padding: 0;
          width: 100%;
          margin: 0;
          background-color: #F1F1F2; 
        }
        ::-webkit-scrollbar {
          display: none;
          width: 0;
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .appContainer, main {
          position: relative;
          overflow: hidden;
        }
        .mainContentsText_1 {
          text-align: justify;
          text-justify: auto;
        }
        .section-3-text {
          text-align: justify;
          text-justify: auto;
        }
        .section_3_img {  
          filter: drop-shadow(0px 5px 8px rgba(9,9,9,0.2));
          z-index: 10;
        }
        .section-3-header {
          font-weight: 900;
        }
        .section_3 {
          margin: auto;
          margin-bottom: 80px;
          margin-top: 50px;
          bottom: 30px;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-orient: horizontal;
          -webkit-box-direction: reverse;
          -ms-flex-direction: row-reverse;
          flex-direction: row-reverse;
          -webkit-box-pack: justify;
          -ms-flex-pack: justify;
          justify-content: center;
          position: relative;
        }
       
        .section-2-text {
          
          text-align: justify;
          text-justify: auto;
        }
        .section_2_img {  
          filter: drop-shadow(0px 5px 8px rgba(9,9,9,0.2));
        }
        .section-2-header {
          font-weight: 900;
        }
        .section_2 {
          margin: auto;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-orient: horizontal;
          -webkit-box-direction: row;
          -ms-flex-direction: row;
          flex-direction: row;
          -webkit-box-pack: justify;
          -ms-flex-pack: justify;
          justify-content: center;
          position: relative;
          margin-top: 100px;
        }
        main {
          width: 100%;
          margin: auto;
          overflow: visible;
        }
        .appContainer {
          overflow: hidden;
        } 

        .mainTitle {
          font-weight: 700;
        }
        .instructions {
          font-style: italic;
          margin-top: 15px;
        }
        .version {
          color: #a2d7db;
        }
        .button {
          margin-top: 10px;
        }

        @media (min-width: 1700px) {
          .section_3_img_container {
            width: 50%;
          }
          .section_2_img_container {
            width: 50%;
          }
          .section_2_img {  
            -webkit-filter: drop-shadow(0px 10px 15px rgba(9, 9, 9, 0.3));
                    filter: drop-shadow(0px 10px 15px rgba(9, 9, 9, 0.3));
            width: 90%;
            bottom: 100px;
          }
          .section_2 {
            width: 1000px;
            margin-top: 200px;

          }
          .section_3_img {  
            width: 90%;
            margin-left: 10%;

          }
          .version {
            font-size: 30px;
            font-weight: 700;
            line-height: 30px;
          }
           
          .mainContentsText_1 {
            font-size: 20px;
            line-height: 24px;
            margin: 20px 0;
          }
          .mainContents {
            margin: auto;
            width: 1000px;
            margin-top: 0px;
          }
          .mainTitle {
            line-height: 45px; 
            font-size: 45px;
            margin-top: 50px;
          }
          .instructions {
            font-size: 18px;
            font-weight: 400;
            font-style: italic;
            line-height: 22px;
             
          }
          .section_1_large_bg {
            width: 400px;
            left: 560px;
            bottom: 340px; 
          }
          .section_3_imageAside {
            width: 50%; 
          }
          .section_2_imageAside {
            width: 50%; 
          } 
          
          .section_3 {
            width: 1000px;
           }
          .section-2-text {
            margin: 15px 0;
            font-size: 20px;
            line-height: 24px;
            width: 100%;
          }
          .section-3-text {
            margin: 15px 0;
            font-size: 20px;
            line-height: 24px;
            width: 100%;
          }
          .section-2-header {
           font-size: 40px;
          }
          .section-3-header {
           font-size: 40px;
          }
         
          .team-member-container{
           width: 100%;
          }
          .team  {
            width: 100%;
          }
          .team-size-restrictor {
            width: 1000px;
          } 
         
        }

        @media (min-width: 1200px) and (max-width: 1700px) {
          .section_3_img_container {
            width: 50%;
          }
          .section_2_img_container {
            width: 50%;
          }
          .section_2_img {  
            -webkit-filter: drop-shadow(0px 10px 15px rgba(9, 9, 9, 0.3));
                    filter: drop-shadow(0px 10px 15px rgba(9, 9, 9, 0.3));
            width: 90%;
            bottom: 50px;
          }
          .section_3_img {  
            width: 90%;
            margin-left: 10%;
          }
          .version {
            font-size: 25px;
            font-weight: 700;
            line-height: 30px;
          }
         
          .mainContentsText_1 {
            font-size: 20px;
            line-height: 24px;
            margin: 20px 0;
            width: 400px;
          }
          .mainContents {
            margin: auto;
            width: 900px;
            margin-top: 40px;
          }
          .mainTitle {
            line-height: 40px; 
            font-size: 40px;
            margin-top: 50px;
          }
          .instructions {
            font-size: 15px;
            font-weight: 400;
            font-style: italic;
            line-height: 17px;
           
          }
          .section_1_large_bg {
            width: 390px;
            left: 460px;
            bottom: 340px; 
          }
          .section_3_imageAside {
            width: 50%; 
          }
          .section_2_imageAside {
            width: 50%; 
          } 
          .section_2 {
            width: 1000px;
          }
          .section_3 {
            width: 1000px;
            margin-top: 40px;
          }
          .section-2-text {
            margin: 15px 0;
            font-size: 20px;
            width: 100%;
            line-height: 24px;
          }
          .section-3-text {
            margin: 15px 0;
            font-size: 20px;
            width: 100%;
            line-height: 25px;
          }
          .section-2-header {
           font-size: 40px;
          }
          .section-3-header {
           font-size: 40px;
          }
         
          .team-member-container{
           width: 100%;
          }
          .team  {
            width: 100%;
          }
          .team-size-restrictor {
            width: 1000px;
          } 
            
        }

        @media (min-width: 800px) and (max-width: 1200px) {
          .section_3_img_container {
            width: 50%;
          }
          .section_2_img_container {
            width: 50%;
          }
          .section_2_img {  
            -webkit-filter: drop-shadow(0px 10px 15px rgba(9, 9, 9, 0.3));
                  filter: drop-shadow(0px 10px 15px rgba(9, 9, 9, 0.3));
            width: 90%;
            bottom: 15px;
          }
          .section_3_img {  
            width: 90%;
            margin-left: 10%;
          }
          .version {
            font-size: 25px;
            font-weight: 700;
            line-height: 30px;
          }
          
          .mainContentsText_1 {
            font-size: 20px;
            line-height: 24px;
            margin: 20px 0;
            width: 340px;
          }
          .mainContents {
            margin: auto;
            width: 700px;
            margin-top: 40px;
          }
          .mainTitle {
            line-height: 40px; 
            font-size: 40px;
            margin-top: 50px;
          }
          .instructions {
            font-size: 15px;
            font-weight: 400;
            font-style: italic;
            line-height: 17px;
            width: 340px;
          }
          .section_1_large_bg {
            width: 330px;
            left: 280px;
            bottom: 240px; 
          }
          .section_3_imageAside {
            width: 50%; 
          }
          .section_2_imageAside {
            width: 50%; 
          } 
          .section_2 {
            width: 700px;
          }
          .section_3 {
            width: 700px;
            margin-top: 50px;
            bottom: 0;
          }
          .section-2-text {
            margin: 15px 0;
            font-size: 20px;
            width: 100%;
            line-height: 24px;
          }
          .section-3-text {
            margin: 15px 0;
            font-size: 20px;
            width: 100%;
            line-height: 25px;
          }
          .section-2-header {
           font-size: 40px;
          }
          .section-3-header {
           font-size: 40px;
          }
         
          .team-member-container{
           width: 100%;
          }
          .team  {
            width: 100%;
          }
          .team-size-restrictor {
            width: 1000px;
          } 
        }

        @media (max-width: 800px) {
          .section_2_img_mobile{
            display: block;
          }
          .section_2_img_desktop{
            display: none;
          }
          .version {
            font-size: 25px;
            font-weight: 700;
          }
          .mainContents {
            font-size: 16px;  
            line-height: 25px;
            display: block;
            margin: auto;
            width: 70%;
            min-width: 300px;
          }
          .partners-title {
            width: 80%;
            font-size: 40px;
          }
          .exchanges-title {
            max-width: 80%;
            font-size: 40px;
          } 
          .mainTitle {
            line-height: 40px; 
            font-size: 40px;
            font-weight: 700;
            margin-top: 50px;
          }
          .instructions {
            font-size: 14px;
            font-style: italic;
          }
          
          .mainContentsText_1 {
            font-size: 20px;
            margin-top: 20px;
          }

          .section_1_large_bg {
            width: 400px;
            right: -15rem;
            top: 1rem; 
            display: none;
          }
         
          .section_2_imageAside {
            width: 70%;
            min-width: 330px;
          }
          .section-2-text {
            font-size: 18px;
          }
          .section_2_img {  
            width: 100%; 
          }
          .section-2-header {
            font-size: 35px;
            margin-top: 20px;
          }
          .section_2 {
            justify-content: center;
            width: 100%;
            flex-direction: column;
            align-items: center;
            margin: auto;
            margin-bottom: 50px;
            top: -30px;
          }
          
          .section_3_imageAside {
            width: 70%;
            min-width: 330px;
            bottom: 0;
            margin: auto;
          }
          
          .section_3_img {  
            width: 100%;    
          }
          .section-3-header {
            font-size: 35px;
            margin-top: 20px;
          }
          p {
            margin: 0;
          }
          .section_3 {
            justify-content: center;
            width: 100%;
            flex-direction: column;
            align-items: center;
            margin: auto;
             
          }
          .main_text_container {
            width: 100%;
            margin: auto;
          }
          .section_2_img_container, .section_3_img_container {
            width: 70%;
            min-width: 330px;
          } 
          
        }
      `}</style>
    </div>
  )
}

