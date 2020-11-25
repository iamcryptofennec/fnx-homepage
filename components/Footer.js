 

export default function Footer() {
  
  return (
   
    <footer>
      <div className="footer_1">
        <p className="socials-title">
            Join the FinNexus community 
        </p>
          <div className="socials-grid">
            <a className="social-link" href="https://twitter.com/fin_nexus/">
              <img className="social-logo" src="/twitter.svg" alt="social-logo" />
            </a>
            <a className="social-link" href="https://t.me/FinNexusOfficial">
              <img className="social-logo" src="/telegram.svg" alt="social-logo" />
            </a>
            <a className="social-link" href="https://medium.com/finnexus/">
              <img className="social-logo" src="/medium.svg" alt="social-logo" />
            </a>
            <a className="social-link" href="https://www.linkedin.com/company/finnexus/">
              <img className="social-logo" src="/linkedin.svg" alt="social-logo" />
            </a>
            <a className="social-link" href="https://www.facebook.com/FinNexus/">
              <img className="social-logo" src="/facebook.svg" alt="social-logo" />
            </a>
            <a className="social-link" href="https://discord.gg/bCDMHN7">
              <img className="social-logo" src="/discord.svg" alt="social-logo" />
            </a>
            <a className="social-link wechat">
              <img className="social-logo" src="/wechat.svg" alt="social-logo" />
            </a>
            <a className="social-link" href="https://github.com/FinNexus">
              <img className="social-logo" src="/github.svg" alt="social-logo" />
            </a>
            <a className="social-link" href="mailto:info@finnexus.io">
              <img className="social-logo" src="/email.svg" alt="social-logo" />
            </a>
          </div>
      </div>
      <div className="footer_2">
        <img className="logo" src="/fnxLogo.svg" alt="FinNexus" width="150" height="100" />
      </div>
      <div className="footer_3">© 2020 FinNexus. All Rights Reserved.</div>
 
      <style jsx>{`
        
      /*
* Prefixed by https://autoprefixer.github.io
* PostCSS: v7.0.29,
* Autoprefixer: v9.7.6
* Browsers: last 4 version
*/

 
  
      
       
        footer {
          width: 1400px;
          -webkit-box-pack: end;
          -ms-flex-pack: end;
          justify-content: flex-end;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-orient: vertical;
          -webkit-box-direction: normal;
          -ms-flex-direction: column;
          flex-direction: column;
          color: #F1F1F2;
          background-color: #224099;
          height: 300px;
          overflow: hidden;
          border-radius: 200px 200px 0 0;
          position: static;
          margin: auto;
        }
        .footer_1 {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center;
          margin-top: auto;
          margin-bottom: auto;
        }
        
        
        .footer_3 {
          font-size: 12px;
        }
        .social-logo {
          width: 30px;
          margin: 5px;
        }
        @media (min-width: 1700px) {
          .footer_1 {
            height: 180px;
          }
          .footer_3 {
            background-color: #1d357a;
            text-align: center;
            height: 20px;
            line-height: 20px;
          }
          .logo {
            height: 80px;
          } 
          .footer_2 {
            text-align: center;
            background-color: #203c88;
            height: 80px;
          }
          .socials-title {
            padding: 50px 0;
            height: 180px;
            font-size: 25px;
            width: 200px;
            line-height: 40px;
            margin-right: 100px;
           }
          .socials-grid {
            width: 200px;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-wrap: wrap;
                flex-wrap: wrap;
            -webkit-box-pack: center;
                -ms-flex-pack: center;
                    justify-content: center;
            -webkit-box-align: center;
                -ms-flex-align: center;
                    align-items: center;
            height: 80px;
            margin-left: 100px;
            padding: 50px 0;
          }
          
          .social-logo {
            width: 30px;
            margin-right: 15px;
            line-height: 40px;
          }
         
          footer {
            width: 1600px;
            margin: auto;
          }
          
          
        
        }

        @media (min-width: 1200px) and (max-width: 1700px) {
          .footer_1 {
            height: 180px;
          }
          .footer_3 {
            background-color: #1d357a;
            text-align: center;
            height: 20px;
            line-height: 20px;
          }
          .logo {
            height: 80px;
          } 
          .social-logo {
            width: 30px;
            margin-right: 15px;
            line-height: 0px;
          }
          .footer_2 {
            text-align: center;
            background-color: #203c88;
            height: 80px;
          }
          .socials-title {
            font-size: 25px;
            width: 200px;
            line-height: 40px;
            margin: auto;
            margin-right: 50px;
           }
          .socials-grid {
            max-width: 200px;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-wrap: wrap;
                flex-wrap: wrap;
            -webkit-box-pack: center;
                -ms-flex-pack: center;
                    justify-content: center;
            -webkit-box-align: center;
                -ms-flex-align: center;
                    align-items: center;
            height: 80px;
            margin: auto;
            margin-left: 50px;
          }
          
        
         
          footer {
            width: 80%;
            min-width: 1000px;
            margin: auto;
          }
          
          
          
        }

  

        @media (min-width: 800px) and (max-width: 1200px) {           
          .footer_1 {
            height: 180px;
          }
          .footer_3 {
            background-color: #1d357a;
            text-align: center;
            height: 20px;
            line-height: 20px;
          }
          .logo {
            height: 80px;
          } 
          .social-logo {
            width: 30px;
            margin-right: 15px;
            line-height: 0px;
          }
          .footer_2 {
            text-align: center;
            background-color: #203c88;
            height: 80px;
          }
          .socials-title {
            font-size: 25px;
            width: 200px;
            line-height: 40px;
            margin: auto;
            margin-right: 50px;
           }
          .socials-grid {
            max-width: 200px;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-wrap: wrap;
                flex-wrap: wrap;
            -webkit-box-pack: center;
                -ms-flex-pack: center;
                    justify-content: center;
            -webkit-box-align: center;
                -ms-flex-align: center;
                    align-items: center;
            height: 80px;
            margin: auto;
            margin-left: 50px;
          }
          
        
         
          footer {
            width: 80%;
            min-width: 500px;
            margin: auto;
            border-radius: 100px 100px 0 0;
          }
          
          
           
        }
        @media (max-width: 800px) {
          .footer_1 {
            height: 180px;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          .footer_3 {
            background-color: #1d357a;
            text-align: center;
            height: 20px;
            line-height: 20px;
          }
          .logo {
            height: 80px;
          } 
          .social-logo {
            width: 30px;
            margin-right: 15px;
            line-height: 0px;
          }
          .footer_2 {
            text-align: center;
            background-color: #203c88;
            height: 80px;
          }
          .socials-title {
            font-size: 25px;
            width: 400px;
            height: 50%;
            text-align: center;
           }
          .socials-grid {
            max-width: 200px;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-wrap: wrap;
                flex-wrap: wrap;
            -webkit-box-pack: center;
                -ms-flex-pack: center;
                    justify-content: center;
            -webkit-box-align: center;
                -ms-flex-align: center;
                    align-items: center;
            height: 50%;
         
      
          }
          
      
          footer {
            width: 100%;
            min-width: 330px;
            margin: auto;
            border-radius: 100px 100px 0 0;
            height: 400px;
          }
          
          
        }
      `}</style>
    </footer>
  )
}
