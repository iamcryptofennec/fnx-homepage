import Footer from '../components/Footer'
import Section_1 from '../components/Section_1'
import { useState, useEffect } from 'react'
import fetch from 'node-fetch'
import dummy from "./dummy.json"




export default function Dashboard() {
  const [dashboard_data, set_dashboard_data] = useState(dummy)

  useEffect(() => {
     fetch("https://fnx-api.herokuapp.com/api/v1")
     .then(res => res.json())
     .then(data => set_dashboard_data(data))
   }, []);

  return (
    <div className="appContainer">
      <div className="sizeRestrictor">
        <main>
          <Section_1 background_color="#9A5EA4">
            <div className="main-contents">
              <div className="main_text_container">
                <h1 className="main-title">
                  Token Dashboard
                </h1>
                <div className="main-aside">
                  <p className="section-2-text"> <em><span className="section-2-opener">The FNX Token Dashboard </span></em>
                  <span  className="section-2-closer">shows live data about the FNX token.</span> </p>
                </div>
                <div className="fnx_circle">
                  <div className="fnx_circle_content">FNX</div>
                </div>
              </div>
            </div>
          </Section_1>
          <div className="dashboard_container">
            <div className="dashboard">
              <div className="columns dashboard_row">
                <div className="column dashboard_item">
                <div className="column">
                  <div className="box">
                   {dashboard_data.wanCurrentTotalSupply.value}
                    <div className="test"></div>
                  </div>
                </div>
                
                </div>
                <div className="column dashboard_item">
                  {dashboard_data.wanCurrentTotalSupply.value}
                </div>
                <div className="column dashboard_item">
                  {dashboard_data.wanCurrentTotalSupply.value}
                </div>
              </div>
               
            </div>
          </div>
          
          
        </main>
        
         <Footer />
      </div>

      <style jsx>{`
       
        .dashboard_item_1{
          text-align: center;
          border-radius: 30px;
          line-height: 200px;
          -webkit-box-shadow: 3px 3px 3px 0px rgba(0,0,0,0.2);
          -moz-box-shadow: 3px 3px 3px 0px rgba(0,0,0,0.2);
          box-shadow: 3px 3px 3px 0px rgba(0,0,0,0.2);
          margin-bottom: 30px;
        }
        .dashboard_container{
          margin: auto;
        }
        .fnx_circle {
          -webkit-box-shadow: 3px 3px 3px 0px rgba(0,0,0,0.2);
          -moz-box-shadow: 3px 3px 3px 0px rgba(0,0,0,0.2);
          box-shadow: 3px 3px 3px 0px rgba(0,0,0,0.2);
          border-radius: 100%;
          border: 10px solid white;
          width: 300px;
          height: 300px;
          box-sizing: border-box;
          display: flex;
          justify-content: center;
          align-items: center;
          left: 580px;
          bottom: 250px; 
          position: relative;
        }
        .fnx_circle_content {
          box-sizing: border-box;
          border-radius: 100%;
          border: 1px solid #A2D9DA;
          width: 220px;
          height: 220px;
          line-height: 220px;
          text-align: center;
          font-size: 120px;
          font-weight: 700;
        }
        
         .sub-section-header {
          color: #9F66A9;   
        }
    
         
         
       
        main {
          width: 100%;
          margin: auto;
          overflow: visible
        }    
        .appContainer {
          overflow: hidden
        }      
       
        .dashboard_container{
          width: 1200px;
        }
        .main_text_container {
          padding-left: 30px;
          width: 550px;
        }
        .main-contents {
          display: block;
          padding-top: 0px;
          padding-right: 0px;
          line-height: 1.5;
          width: 1000px;
          margin: auto;
        }
        .main-title {
          margin-top: 50px;
          line-height: 4rem; 
          font-weight: 900;
          width: 300px;
          font-size: 60px;
          margin-bottom: 20px;
        }
        
        .section-2-closer {
          font-size: 22px;
        }
        .section-2-opener {
          font-size: 35px;
          font-weight: 700;
        }
        
        
         
           
        
        @media (min-width: 1700px) {
          .dashboard_container{
            width: 1200px;
          }
          
          
        }

        @media (min-width: 1200px) and (max-width: 1700px) { 
          .dashboard_container{
            width: 1200px;
          }
          .main_text_container {
            padding-left: 30px;
            width: 550px;
          }
          .main-contents {
            display: block;
            padding-top: 0px;
            padding-right: 0px;
            line-height: 1.5;
            width: 1000px;
            margin: auto;
          }
          .main-title {
            margin-top: 50px;
            line-height: 4rem; 
            font-weight: 900;
            width: 300px;
            font-size: 60px;
            margin-bottom: 20px;
          }
          
          .section-2-closer {
            font-size: 22px;
          }
          .section-2-opener {
            font-size: 35px;
            font-weight: 700;
          }
          
        
         
        }

        @media (min-width: 800px) and (max-width: 1200px) {
          .main_text_container {
            width: 700px;
            margin: 0;
            left: 0;
            top: 0;
          }
          .main-contents {
            display: block;
            line-height: 1.5;
            width: 700px;
            margin: auto;
          }
          .main-title {
            line-height: 4rem; 
            font-weight: 900;
            width: 300px;
            font-size: 50px;
            margin-bottom: 20px;
          }
          .main-title {
            margin-top: 50px;
            line-height: 4rem; 
            font-weight: 900;
            width: 300px;
            font-size: 60px;
            margin-bottom: 20px;
            

          }
         
          
          .section-2-closer {
            font-size: 22px;
          }
          .section-2-opener {
            font-size: 35px;
            font-weight: 700;
          }
           
          
       }   

       
       @media (max-width: 800px){
          .main_text_container {
            width: 90%;
            margin: auto;
            min-width: 330px;
            left: 0;
            top: 0;
          }
          .main-contents {
            display: block;
            line-height: 1.5;
            width: 100%;
            margin: auto;            
          }
          .main-title {
            line-height: 50px; 
            font-weight: 900;
            width: 300px;
            font-size: 40px;
            margin-top: 50px;
            margin-bottom: 20px;
          }
           
          .section-2-closer {
            font-size: 18px;
          }
          .section-2-opener {
            font-size: 30px;
            font-weight: 700;
          }
          
          
           
          .instructions {
            font-size: 16px;
          }
        
          
       }
      `}
      </style>
    </div>)}
