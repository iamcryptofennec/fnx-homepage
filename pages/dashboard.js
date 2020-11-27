import Footer from '../components/Footer'
import DashboardItem from '../components/DashboardItem'
import Section_1 from '../components/Section_1'
import { useState, useEffect } from 'react'
import fetch from 'node-fetch'
import dummy from "./dummy.json"
import numeral from "numeral"

let includedItems = [
  'fpoTvl',
  'fpoTvlEth',
  'fpoTvlWan',
  'ethCurrentTotalSupply',
  'wanCurrentTotalSupply',
  'maxAmount', 
  'minted', 
  'currentTotalSupply', 
  'opReserves', 
  'teamAndFounders', 
  'communityRewards', 
  'institutional',
  'burned',
  'fnxCirculatingSupply',
  'effectiveCirculatingSupply',
]


export default function Dashboard() {
  const [fnx_dashboard_elements, set_dashboard_fnx_elements] = useState([])
  const [fpo_dashboard_elements, set_dashboard_fpo_elements] = useState([])

  // Set number formatting default
  numeral.defaultFormat("0,0");


  useEffect(() => {
     fetch("https://fnx-api.herokuapp.com/api/v1")
     .then(res => res.json())
     .then(data => {
        const fnx_elements = []
        const fpo_elements = []
        Object.entries(data).forEach(key_value_arr => {
          let key = key_value_arr[0]
          let dash_item = key_value_arr[1]
          const value = Math.round(dash_item.value)
          const formattedNum = numeral(value).format()
          
          if (includedItems.includes(key)) {
            if (key === "fpoTvlEth") {
              dash_item.name = "Ethereum TVL"
            }
            if (key === "fpoTvlWan") {
              dash_item.name = "Wanchain TVL"
            }
            const newElement = <DashboardItem
              name={dash_item.name} 
              description={dash_item.description} 
              value={formattedNum} units={dash_item.units}
            />
            if (dash_item.dapp === "FPO") {
              fpo_elements.push(newElement)
            }
            else if (dash_item.dapp === "N/A") {
              fnx_elements.push(newElement)
            }
          }
        })
       
        let totalFnx = data.eth_fnxPoolTotal.value + data.wan_fnxPoolTotal.value
        let stakeRate = Math.round((totalFnx / data.fnxCirculatingSupply.value) * 1000) /10
        stakeRate
        const stakeRateElement = <DashboardItem
          name={"Staking Rate"} 
          description={"The percentage of circulating FNX which is locked in FPO"} 
          value={stakeRate} units={"%"}
        />
            
        fpo_elements.push(stakeRateElement)
            

        set_dashboard_fpo_elements(fpo_elements)
        set_dashboard_fnx_elements(fnx_elements)
      }) 
   }, [])

  return (
    <div className="appContainer">
      <div className="sizeRestrictor">
        <main>
          <Section_1 page="dashboard" background_color="#9A5EA4">
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
            <h1 className="dash_title">FNX Token</h1>
            <div className="dash_subsection dash_grid">
              {fnx_dashboard_elements}
            </div>
            <h1 className="dash_title">FinNexus Options</h1>
            <div className="dash_subsection dash_grid">
              {fpo_dashboard_elements}
            </div>
          </div>
          
          
        </main>
        
         <Footer />
      </div>

      <style jsx>{`
        .dash_title {
          font-size: 48px;
          font-weight: 700;
          margin: 30px auto;
          width: 1200px;
        }
        .dash_grid {
          display: grid;
          grid-template-columns: repeat(3, 33%);
          justify-items: center;
          align-items: center;
        }
        
        .full_width {
          width: 100%;
          background-color: pink;
        }

        .dashboard_container{
          margin: 50px auto;
          width: 1000px;
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
            .dash_title {
              width: 1200px;
            }
            .fnx_circle {
              width: 300px;
              height: 300px;
            }
            .dashboard_container{
              margin: 50px auto;
              width: 1000px;
            }
          
        }

        @media (min-width: 1200px) and (max-width: 1700px) { 
         
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
          
          .dashboard_container{
            margin: 50px auto;
            width: 1000px;
          }
        }

        @media (min-width: 800px) and (max-width: 1200px) {
          .dash_title {
            min-width: 770px;
            width: 80%;
            margin: 30px auto;
          }
          
          .dashboard_container{
            margin: 50 px auto;
            width: 800px;
            min-width: 70%;
          }
          .main_text_container {
            width: 400px;
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
          .fnx_circle {
            width: 250px;
            height: 250px;
            left: 380px;
            bottom: 250px; 
          }
          .fnx_circle_content {
            width: 200px;
            height: 200px;
            font-size: 110px;
            line-height: 200px;
          }
       }   

       
       @media (max-width: 800px){
         .main-aside {
           width: 100%;
 
         }
          .dash_grid {
            display: grid;
            grid-template-columns: repeat(2, 50%);
            justify-items: center;
            align-items: center;
          }
          .dash_title {
            max-width: 770px;
            width: 95%;
            margin: 30px auto;
          }
          .dashboard_container{
            margin: 50 px auto;
            width: 95%;
          }
          .main_text_container {
            width: 80%;
            max-width: 400px;
            margin: auto;
            min-width: 260px;
            left: 0;
            top: 0;
            padding: 0;
          }
          .main-contents {
            display: block;
            line-height: 1.5;
            width: 80%;
            margin: auto;
                        
          }
          .main-title {
            line-height: 42px; 
            font-weight: 900;
            width: 90%;
            font-size: 36px;
            margin-top: 10px;
            margin-bottom: 20px;
          }
           
          .section-2-closer {
            font-size: 18px;
          }
          .section-2-opener {
            font-size: 26px;
            font-weight: 700;
            line-height: 36px;
            width: 80%;
          }
          
          .fnx_circle {
            display: none;
          }
          .fnx_circle_content {
            display: none;
          }
          .instructions {
            font-size: 16px;
          }
        
          
       }
      `}
      </style>
    </div>)}
