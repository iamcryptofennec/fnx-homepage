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

 .team-member-container {
                -webkit-transform: scale(.7, .7);
                    -ms-transform: scale(.7, .7);
                        transform: scale(.7, .7);
              }
              .team-member-container:hover {
                -webkit-transform: scale(.8, .8);
                    -ms-transform: scale(.8, .8);
                        transform: scale(.8, .8);
              } 
            .team-member-title {
              position: absolute;
              background-color: #224099;
              border-left: .5rem solid #224099;
              border-right: .5rem solid #224099;
              border-top: .6rem solid #224099;
              border-bottom: .6rem solid #224099;
              text-align: center;
              border-radius: 1.3rem;
              bottom: -20px;
              z-index: 100;
            }
            .team-name {
              text-align: center;
              margin: auto;
              color: white;
              font-weight: 900;
              line-height: 1.3rem;
              width: 10rem;
              font-size: 1em;
            }
            .team-title {
              text-align: center;
              margin: auto;
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
              height: 200px;
              margin: 25px 50px;
              -webkit-transform: scale(1, 1.);
                  -ms-transform: scale(1, 1);
                      transform: scale(1, 1);
              -webkit-transition: -webkit-transform .1s ease-in-out;
              -o-transition: -o-transform .1s ease-in-out;
              transition: transform .1s ease-in-out;
            }
            .team-member-container:hover {
                -webkit-transform: scale(1.1, 1.1);
                    -ms-transform: scale(1.1, 1.1);
                        transform: scale(1.1, 1.1);
              }
            
            .team-header-container h3 {
              text-align: center;
            }

            @media (max-width: 1024px) {
              .team-member-container {
                -webkit-transform: scale(.7, .7);
                    -ms-transform: scale(.7, .7);
                        transform: scale(.7, .7);
                width: 125px;
                height: 200px;
                margin: 40px 50px;
              }
              .team-member-container:hover {
                -webkit-transform: scale(.8, .8);
                    -ms-transform: scale(.8, .8);
                        transform: scale(.8, .8);
              }
              .team-member-frame {
                -webkit-transform: scale(1.85, 1.85);
                    -ms-transform: scale(1.85, 1.85);
                        transform: scale(1.85, 1.85);
                top: -4px;
              }
              .team-member {
                -webkit-transform: scale(1.7, 1.7);
                    -ms-transform: scale(1.7, 1.7);
                        transform: scale(1.7, 1.7);
              }
              .team-title {
                font-size: 18px;
                width: 210px;
                line-height: 25px;
              }
              .team-member-title {
                bottom: -60px;
                right: -50px;
              }
              .team-name {
                width: 210px;
                line-height: 20px;
                font-size: 25px;
              }
            }

            @media (max-width: 700px){
              
              .team-member-container:hover {
                -webkit-transform: scale(.65, .65);
                    -ms-transform: scale(.65, .65);
                        transform: scale(.65, .65);
              } 

              .team-member-container {
                -webkit-transform: scale(.6, .6);
                    -ms-transform: scale(.6, .6);
                        transform: scale(.6, .6);
                width: 115px;
                height: 200px;
                margin: 0px 15px;
              }
              .team-member-title {
                bottom: -60px;
                right: -55px;;
                line-height: 25px;
                -webkit-transform: scale(.95, .95);
                    -ms-transform: scale(.95, .95);
                        transform: scale(.95, .95);
              }
              .team-name {
                width: 210px;
                line-height: 25px;
                font-size: 25px;
              }
               
            }
      `}</style>
    </div>
  )
}

