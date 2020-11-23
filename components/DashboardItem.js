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
         .name_container {
           display: flex;
         }
        .tooltip {
          width: 15px;
          margin-left: 5px;
        }
        .name {
          font-weight: 700;
        }
        .value {
          font-size: 1.2rem;
        }
        .dashboard_item_container {
          width: 220px;
        } 
        .dashboard_item {
          text-align: left;
          border-radius: 10px;
          width: 220px;
          -webkit-box-shadow: 3px 3px 3px 0px rgba(0,0,0,0.2);
          -moz-box-shadow: 3px 3px 3px 0px rgba(0,0,0,0.2);
          box-shadow: 3px 3px 3px 0px rgba(0,0,0,0.2);
          align-self: center;
          justify-self: center;
          margin: 0 auto 20px auto;
          padding: 20px;

         }
      `}</style>
    </div>
  )
}

