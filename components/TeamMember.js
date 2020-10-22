import { useState, useEffect } from 'react';
import Bowser from "bowser"; // ES6 (and TypeScript with --esModuleInterop enabled)
import AOS from 'aos'
import 'aos/dist/aos.css';

 
 

export default function Navbar(props) {
    
    const [currentBrowser, setBrowser] = useState("")
    // switch styles for unsupported browsers
    let browser =""
      useEffect(() => {
      AOS.init({once: true});
      // check browser
      browser = Bowser.getParser(window.navigator.userAgent);
      let name = browser.getBrowser()
      setBrowser(name)
     }, []);
  return (
     
    <div className="team-member-container">
      <div data-aos-delay={props.delay} data-aos="flip-right"  >
        <img className="team-member-frame" src="bgshape_03.svg"/>
        <img className="team-member" src={props.image}/>
        <div className="team-member-title">
          <p className="team-name">{props.name}</p>
          <p className="team-title">{props.title}</p>
        </div>
      </div>
      
  

      <style jsx>{`
             /*
* Prefixed by https://autoprefixer.github.io
* PostCSS: v7.0.29,
* Autoprefixer: v9.7.6
* Browsers: last 4 version
*/

  
            .team-member-title {
              position: absolute;
              background-color: #224099;
              border-left: .5rem solid #224099;
              border-right: .5rem solid #224099;
              border-top: .6rem solid #224099;
              border-bottom: .6rem solid #224099;
              text-align: center;
              border-radius: 15px;
              bottom: -20px;
              z-index: 100;
            }
            .team-name {
              text-align: center;
              margin: 0 auto;
              color: white;
              font-weight: 900;
              line-height: 1.3rem;
              width: 10rem;
              font-size: 1em;
            }
            .team-title {
              text-align: center;
              margin: 0 auto;
              color: white;
              width: 10rem;
              font-weight: 300;
              line-height: 1.3rem;
              font-size: 1em;
            }
            .team-member-frame {
              display: ${currentBrowser.name === "Internet Explorer" || currentBrowser.name === "Microsoft Edge" ? "none" : "block"};
              top: -3px;
              left: 6px;
              -webkit-transform: scale(1.11, 1.11);
                  -ms-transform: scale(1.11, 1.11);
                      transform: scale(1.11, 1.11);
              position: absolute;
              z-index: 100;
            }
            .team-member {
              width: 100%;
            }
            .team-member-container {
              position: relative; 
              width: 175px;
              height: 170px;
              margin: 5px 15px;
              -webkit-transform: scale(.8, .8.);
                  -ms-transform: scale(.8, .8);
                      transform: scale(.8, .8);
              -webkit-transition: -webkit-transform .1s ease-in-out;
              -o-transition: -o-transform .1s ease-in-out;
              transition: transform .1s ease-in-out;
            }
            .team-member-container:hover {
                -webkit-transform: scale(.82, .82);
                    -ms-transform: scale(.82, .82);
                        transform: scale(.82, .82);
              }
            
            .team-header-container h3 {
              text-align: center;
            }

             

            @media (max-width: 800px){
              .team-member-container {
                margin: 10px 10px;
                width: 150px;
              }   
              .team-member-title {
                left: 12px;
                border-radius: 15px;
              }
              .team-name {
                font-size: 14px;
                width: 7rem;
                line-height: 14px;
              }
              .team-title {
                line-height: 14px;

                width: 7rem;
                font-size: 12px;
              }
            }
            @media (max-width: 650px){
              .team-member-container {
                margin: 10px 10px;
              }
              .team-member-title {
                left: 12px;
                border-radius: 15px;
              }
              .team-name {
                font-size: 14px;
                width: 7rem;
                line-height: 14px;
              }
              .team-title {
                line-height: 14px;

                width: 7rem;
                font-size: 12px;
              }
               
            }
      `}</style>
    </div>
  )
}

