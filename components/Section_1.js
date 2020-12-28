import Navbar from './Navbar'

export default function Section_1(props) {
  
    return (
        <div className="section_1_container">
          <header className="section_1">
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

          .section_1 {
            margin-bottom: 60px;
            z-index: 1;
          }
          .section_1_container {
            z-index: 1;
          }
          @media (min-width: 1700px) {
            .section_1 {
              border-radius: ${props.is_blog_main ? "0" : "0 0 200px 200px"};
             
              background-color: ${props.background_color};
              background-size: 100% 800px;
              margin: auto;
              height: ${props.is_blog_main ? "150px" : "500px"};
              color: #F1F1F2;
              overflow: hidden;
              margin-bottom: 60px;
              width: ${props.is_blog_main ? "100%" : "80%"}
            }
          
          
          }
  
          @media (min-width: 1200px) and (max-width: 1700px) {
            
            .section_1 {
              border-radius: ${props.is_blog_main ? "0" : "0 0 200px 200px"};
              background-color: ${props.background_color};
              background-size: 100% 800px;
              margin: auto;
              color: #F1F1F2;
              overflow: hidden;
              height: ${props.is_blog_main ? "150px" : "550px"};
              width: ${props.is_blog_main ? "100%" : "95%"};
              margin-bottom: 60px;
            }
          
           
              
          }
  
          @media (min-width: 700px) and (max-width: 1200px) {
            .section_1 {
              height: ${props.is_blog_main ? "150px" : "550px"};;
              border-radius: ${props.is_blog_main ? "0" : " 0 0 100px 100px"};
              background-color: ${props.background_color};
              background-size: 100% 800px;
              margin: auto;
              width: 100%;
              color: #F1F1F2;
              overflow: hidden;
              min-width: 00px;
              margin-bottom: 60px;
            }
             
           
          }
  
          @media (max-width: 800px) {
           
            .section_1 {
              height: ${props.is_dashboard ? "350px" : "580px"};
              height: ${props.is_blog_main ? "150px" : "580px"};
              border-radius: ${props.is_blog_main ? "0" : "0 0 70px 70px"};
              background-color: ${props.background_color};
              background-size: 100% 800px;
              margin: auto;
              width: 100%;
              color: #F1F1F2;
              overflow: hidden;
              min-width: 00px;
              margin-bottom: 60px;
            }
          
          }
   
  
  
        `}</style>
      </div>
    )
  }
  
  