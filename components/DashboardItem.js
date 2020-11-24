import Tippy from '@tippyjs/react'
import "../node_modules/tippy.js/dist/tippy.css"

export default function DashboardItem(props) {
  // const StringContent = () => (
  //   <Tippy content="Hello">
  //     <button>My button</button>
  //   </Tippy>
  // );
   
  // const JSXContent = () => (
  //   <Tippy content={<span>Tooltip</span>}>
  //     <button>My button</button>
  //   </Tippy>
  // );
  
  return (
    <div className="dashboard_item_container">
      <div className="box dashboard_item">
        <div className="name_container">
          <div className="name">
            {props.name}
          </div>
          <Tippy content={<span>{props.description}</span>}>
            <img className="tooltip" src="info_5.svg" />
          </Tippy>
        </div>
        <div className="value">
          {props.value} {props.units}
        </div>
      </div>
      <style jsx>{`
        .dashboard_item {
          max-height: 120px;
        }
         .name_container {
           display: flex;
         }
        .tooltip {
          width: 15px;
          height: 15px;
          margin-left: 5px;
        }
        .name {
          font-weight: 700;
        }
        .value {
          font-size: 1.2rem;
        }
        .dashboard_item_container {
          width: 250px;
        } 
        .dashboard_item {
          text-align: left;
          border-radius: 10px;
          width: 250px;
          -webkit-box-shadow: 3px 3px 3px 0px rgba(0,0,0,0.2);
          -moz-box-shadow: 3px 3px 3px 0px rgba(0,0,0,0.2);
          box-shadow: 3px 3px 3px 0px rgba(0,0,0,0.2);
          align-self: center;
          justify-self: center;
          margin: 0 auto 20px auto;
          padding: 20px;
         } 

        @media (min-width: 1700px) {
          .dashboard_item_container {
            width: 250px;
          } 
          .dashboard_item {
            width: 250px;
          }
        }
        @media (min-width: 1200px) and (max-width: 1700px) { 
          .dashboard_item_container {
            width: 220px;
          } 
          .dashboard_item {
            width: 220px;
          }
        }

        @media (min-width: 800px) and (max-width: 1200px) {
          .dashboard_item_container {
            width: 200px;
          } 
          .dashboard_item {
            width: 200px;
          }
       }    
       @media (max-width: 800px){
          .dashboard_item_container {
            width: 80%;
            min-width: 150px;
          } 
          .dashboard_item {
            width: 80%;

            min-width: 150px;
          }

          .name, .value, .tooltip {
            font-size: 14px;
          }
          .tooltip {
            width: 10px;
          }
       }
      `}</style>
    </div>
  )
}

