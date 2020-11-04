import Navbar from './Navbar'

export default function Section_1(props) {
  
    return (
        <div>
         <header className="section_1">
            <Navbar />
            {props.children}
          </header>
        <style jsx>{` 
       
          * {
            -webkit-box-sizing: border-box;
                    box-sizing: border-box;
            position: relative;
            font-family: 'Noto Sans', sans-serif;
          }
       
          html, body {
            font-weight: 700;
            overflow: visible;
            padding: 0;
            width: 100%;
            margin: 0;
            background-color: #F1F1F2; 
            min-width: 360px;
          }
          ::-webkit-scrollbar {
            display: none;
            width: 0;
            -ms-overflow-style: none;
            scrollbar-width: none;
          }

       
          @media (min-width: 1700px) {
            .section_1 {
              border-radius: ${props.is_blog_main ? " 0 0 100px 100px" : "0 0 200px 200px"};
             
              background-color: ${props.background_color};
              background-size: 100% 800px;
              margin: auto;
              height: ${props.is_blog_main ? "250px" : "500px"};
              color: #F1F1F2;
              overflow: hidden;
              height: 500px;  
              width: 80%;
            }
          
          
          }
  
          @media (min-width: 1200px) and (max-width: 1700px) {
            
            .section_1 {
              border-radius: ${props.is_blog_main ? " 0 0 100px 100px" : "0 0 200px 200px"};
              background-color: ${props.background_color};
              background-size: 100% 800px;
              margin: auto;
              margin-bottom: 60px;
              color: #F1F1F2;
              overflow: hidden;
              height: ${props.is_blog_main ? "250px" : "500px"};
              width: 95%;
            }
          
           
              
          }
  
          @media (min-width: 700px) and (max-width: 1200px) {
            .section_1 {
              height: ${props.is_blog_main ? "250px" : "500px"};;
              border-radius: 0 0 100px 100px;
              background-color: ${props.background_color};
              background-size: 100% 800px;
              margin: auto;
              width: 100%;
              color: #F1F1F2;
              overflow: hidden;
              min-width: 00px;
            }
             
           
          }
  
          @media (max-width: 700px) {
           
         
            .section_1 {
              height: ${props.is_blog_main ? "250px" : "580px"};
              border-radius: 0 0 70px 70px;
              background-color: ${props.background_color};
              background-size: 100% 800px;
              margin: auto;
              width: 100%;
              color: #F1F1F2;
              overflow: hidden;
              min-width: 00px;
            }
          
          }
   
  
  
        `}</style>
      </div>
    )
  }
  
  