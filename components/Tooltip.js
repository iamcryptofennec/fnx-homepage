import Tippy from '@tippyjs/react'
import "../node_modules/tippy.js/dist/tippy.css"

export default function Tooltip(props) {
  
  return (
    <div>      
      <Tippy content={<span>{props.text}</span>}>
        <img className="tooltip" src="info_5.svg" />
      </Tippy>

      <style jsx>{`
        
        .tooltip {
          width: 18px;
          height: 18px;
          margin-left: 5px;
        }
       
       @media (max-width: 800px){
          
          .tooltip {
            width: 14px;
          }
       }
      `}</style>
    </div>
  )
}

