import Footer from '../components/Footer'
import Section_1 from '../components/Section_1'
import TeamMember from '../components/TeamMember'
import PartnerCarousel from '../components/PartnerCarousel'
import ExchangesCarousel from '../components/ExchangesCarousel'
import Link from 'next/link'



export default function Home() {
  return (
    <div className="appContainer">
      <div className="sizeRestrictor">
        <main>
          <Section_1 background_color="#224099">
            <div className="main-contents">
              <div className="main_text_container">
                <h1 className="main-title">
                  About FinNexus...
                </h1>
                <div className="main-aside">
                  <p className="section-2-text"> <em><span className="section-2-opener">Redefining finance </span></em>
                  <span  className="section-2-closer">is FinNexus's founding mission. The project was initiated by a group of blockchain industry veterans in 2019 with a focus on offerring new DeFi products that offer greater diversity, convenience, and value to investors.</span> </p>
                </div>
                <img className="about_bg" src="bgshape_01.svg" />
              </div>
            </div>
          </Section_1>
      
          
          <div id="team" className="team-section">
            <div className="team-size-restrictor">
            
            <div className="team core-team">
              <div className="team-header-container">
                <h3 className="team-title">Meet the Team</h3>
              </div>
            <div className="team-member-container">
              <a target="_blank" href="https://www.linkedin.com/in/boris-yang-371297199/"><TeamMember name="Boris Yang" title="Founder & CEO" image="BorisYang.png" /></a>
              <a target="_blank" href="https://www.linkedin.com/in/%E9%9B%A8-%E7%94%B0-375a7127/"><TeamMember delay="100" name="Ryan Tian" title="Financial Specialist" image="RyanTian.png"/></a>
              <a target="_blank" href=" https://www.linkedin.com/in/%E5%BB%BA%E5%BC%BA-%E5%90%95-4400b5168/"><TeamMember delay="200" name="Lü Jianqiang" title="CTO" image="lu_jianqiang.png" /></a>
              <a target="_blank" href="https://www.linkedin.com/in/qinggang-jia-074757131"><TeamMember delay="300" name="Jia Qinggang" title="Senior Developer" image="jia_qinggang.png" /></a>
              <a target="_blank" href="https://www.linkedin.com/in/%E7%8F%8A%E7%8F%8A-%E9%BB%84-80b6291b9"><TeamMember delay="400" name="Sarah Huang" title="Chief Community Manager" image="sarah_huang.png" /></a>
              <a target="_blank" href="https://www.linkedin.com/in/sardar-veerender-singh-6325a7119/"><TeamMember delay="500" name="Veerender Singh" title="Community Manager" image="VeerenderSingh.png" /></a>
              {/* <a target="_blank" href="http://linkedin.com/in/jacky-wang-776458173"><TeamMember delay="600" name="Wang Jie" title="CMO" image="wang_jie.png" /></a> */}
              </div>
            </div>
           
            <div className="team advisor-team">
              <div className="team-header-container">
                <h3 className="section-header em-3 team-title">Advisory Group</h3>
              </div>
              <div className="team-member-container">
              <a target="_blank" href="https://www.linkedin.com/in/nicholaskrapels/"><TeamMember name="Nicholas Krapels" title="Strategy Advisor" image="NicholasKrapels.png" /></a>
              <a target="_blank" href="https://www.linkedin.com/in/noah-maizels/"><TeamMember delay="100" name="Noah Maizels" title="Marketing & Web Dev" image="NoahMaizels.png" /></a>
              <a target="_blank" href="https://www.linkedin.com/in/%E7%BF%8A%E9%92%A6-%E5%BC%A0-7b81521ba/"><TeamMember delay="200" name="Eason Zhang" title="FP of River Capital" image="EasonZhang.png" /></a>
              <a target="_blank" href="https://www.linkedin.com/in/jack-lu-57995469/"><TeamMember delay="300" name="Jack Lu" title="Wanchain Founder" image="JackLu.png" /></a>
              <a target="_blank" href="https://www.linkedin.com/in/joewong1/"><TeamMember delay="400" name="Joe Wong" title="Growth Advisor" image="joe_wong.png" /></a>
              <a target="_blank" href="https://www.linkedin.com/in/a1choi"><TeamMember delay="500" name="Aaron Choi" title="BD Advisor" image="aaron_choi.png" /></a>
           
              </div>
            
            </div>
 
            </div>
           
          </div>
          
        </main>
        <p className="partners-title sub-section-header">Partners</p>
        <div className="carousel-container">
          <PartnerCarousel />
        </div>
        <p className="exchanges-title sub-section-header">Exchanges</p>
        <div className="carousel-container">
          <ExchangesCarousel />
        </div>
         <Footer />
      </div>

      <style jsx>{`

        .section_1_large_bg{
          display: none;
        }
         .sub-section-header {
          color: #9F66A9;   
        }
        .carousel-container {
          padding-bottom: 3rem;
          max-width: 80%;
          margin: auto auto 5rem;
          width: 1000px;
          bottom: 2.5em;
          overflow-y: visible;
        }
        .team-member-container{
          display: flex;
          flex-direction: row;
          justify-content: center;
          margin: auto;
          flex-wrap: wrap;
        }
        .team-header-container {
          margin-bottom: 0rem;
          text-align: center
        }
        .team {
          justify-content: center;
          margin: auto;
          margin-top: 100px;
          padding: 0px 0px;
          padding-bottom: 100px;
          display: flex;
          flex-direction: column;
          flex-wrap: wrap;
          background-color: rgb(208, 180, 213);
          border-radius: 50px;
          border: 15px solid rgba(159, 102, 169, 0.08);
          max-width: 1000px;
        }
        .team_bg_image {
          position: absolute;
          bottom: 500px;
          right: -500px;
          width: 800px;
          z-index: -10;
        }
        .team-section {
          bottom: 150px;
          width: 100%;
          justify-content: center;
          margin: 100px auto;
          padding-bottom: 100px;
          display: flex;
          flex-wrap: wrap;
          background-color: rgba(159, 102, 169, 0.2);
        }
        .team-size-restrictor {
          max-width: 1920px;
        }
        .team-title {
          margin: 0 auto;
          font-weight: 700;
          font-size: 40px;
          color: #9F66A9;
          width: 250px;
          margin-top: 20px;
          max-width: 80%;
        }
        .partners-title {
          width: 1000px;
          max-width: 80%;
          margin: auto;
          margin-bottom: 20px;
          font-weight: 700;
          font-size: 40px;
        }
        .exchanges-title {
          width: 1000px;
          max-width: 80%;
          margin: auto;
          margin-bottom: 20px;
          font-weight: 700;
          font-size: 40px;
        }
        .section_1_large_bg {
          position: relative;
          width: 650px;
          right: -10rem;
          top: 800px;
          z-index: 1
        }
       
        main {
          width: 100%;
          margin: auto;
          overflow: visible
        }    
        .appContainer {
          overflow: hidden
        }      
        h4 {
          font-weight: 900;
          margin: 0;
          padding: 0;
          line-height: 1.5rem
        }
        h5 {
          font-weight: 900;
          margin: 0;
          padding: 0
        }
         
           
          .section-2-closer {
            font-size: 26px;
            font-style: italic;
          }
          .section-2-opener {
            font-size: 35px;
            font-weight: 700;
            font-style: italic;
          }
         
         .about_bg{
            left: 800px;
            bottom: 400px;
            width: 1900px;
            position: relative;
            transform: scale(1, 1);
          }
        @media (min-width: 1700px) {
          .team-section {
            padding-bottom: 100px;
          }
          .main_text_container {
            width: 650px;
          }
          .main-contents {
            display: block;
            padding-top: 0px;
            padding-right: 0px;
            line-height: 1.5;
            width: 1200px;
            margin: auto;
          }
          .about_bg{
            left: 800px;
            bottom: 300px;
            width: 1900px;
            position: relative;
            transform: scale(1, 1);
          }
          
         
          .team {
            width: 90%;
            max-width: 1000px;
          }
          .team-title {
            font-size: 40px;
            width: 250px;
            padding-bottom: 40px;
          }
          .main_text_container {
             width: 650px;
          }
          .main-contents {
            display: block;
            padding-top: 0px;
            padding-left: 20px;
            padding-right: 0px;
            line-height: 1.5;
            width: 1200px;
            margin: auto;
          }
          .main-title {
            margin-top: 50px;
            line-height: 4rem; 
            font-weight: 900;
            width: 300px;
            font-size: 50px;
            margin-bottom: 20px;
          }
         
          .team-size-restrictor {
            width: 1000px;
          }
         
          .section-2-closer {
            font-size: 20px;
          }
          .section-2-opener {
            font-size: 35px;
            font-weight: 700;
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
         
          .about_bg{
            left: 650px;
            bottom: 300px;
            width: 1900px;
            position: relative;
            transform: scale(1, 1);
          }
          .section-2-closer {
            font-size: 22px;
          }
          .section-2-opener {
            font-size: 35px;
            font-weight: 700;
          }
           
          .section_1_large_bg {
            width: 400px;
            right: 5rem;
            top: 1rem; 
          }     
          .team-size-restrictor {
            width: 1000px;
          }
          .team-member-container {
           width: 100%;
          }
          .team {
            width: 90%;
            max-width: 1000px;
          }
          .team-title {
            font-size: 40px;
            padding-bottom: 40px;
            width: 250px;
          }
          .partners-title {
            width: 1000px;
            font-size: 40px;
          }
          .exchanges-title {
            width: 1000px;
            font-size: 40px;
          }     
          .carousel-container {
            padding-bottom: 3rem;
            width: 1000px;
          }   
          .team-section {
            padding-bottom: 100px;
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
         
          .about_bg{
            left: 500px;
            bottom: 00px;
            width: 700px;
            position: relative;
            transform: scale(1, 1);
          }
          .section-2-closer {
            font-size: 22px;
          }
          .section-2-opener {
            font-size: 35px;
            font-weight: 700;
          }
           
          .instructions {
            font-size: 16px;
          }
          .section_1_large_bg {
            width: 400px;
            right: 5rem;
            top: 1rem; 
          }     
          .team-size-restrictor {
            width: 1000px;
          }
          .team-member-container {
           width: 100%;
           max-width: 1000px;
          }
          .team {
            width: 90%;
            max-width: 1000px;
          }
          .team-title {
            font-size: 40px;
            width: 250px;
            padding-bottom: 40px;
          }
          .partners-title {
            width: 1000px;
            font-size: 40px;
          }
          .exchanges-title {
            width: 1000px;
            font-size: 40px;
          }     
          .carousel-container {
            padding-bottom: 3rem;
            width: 1000px;
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
          .about_bg{
            left: 500px;
            bottom: 00px;
            width: 700px;
            position: relative;
            transform: scale(1, 1);
          }
          
           
          .instructions {
            font-size: 16px;
          }
          .section_1_large_bg {
            width: 400px;
            right: 5rem;
            top: 1rem; 
          }     
          .team-size-restrictor {
            width: 1000px;
          }
          .team-member-container {
           width: 100%;
           max-width: 1000px;
          }
          .team {
            width: 90%;
            max-width: 1000px;
          }
          .team-title {
            font-size: 40px;
            width: 250px;
            padding-bottom: 20px;
          }
          .partners-title {
            width: 1000px;
            font-size: 40px;
          }
          .exchanges-title {
            width: 1000px;
            font-size: 40px;
          }     
          .carousel-container {
            padding-bottom: 3rem;
            width: 1000px;
          }   
          
       }
      `}
      </style>
    </div>)}
