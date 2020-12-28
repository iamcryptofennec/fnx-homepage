import Footer from '../components/Footer'
import Section_1 from '../components/Section_1'
import TeamMember from '../components/TeamMember'

export default function Home() {
  return (
    <div className="appContainer">
      <div className="sizeRestrictor">
        <main>
          <Section_1 background_color="#9A5EA4">
            <div className="main-contents">
              <div className="main_text_container">
                <h1 className="main-title">
                  About FinNexus
                </h1>
                <div className="main-aside">
                  <p className="section-2-text"> <em><span className="section-2-opener">Redefining finance </span></em>
                  <span  className="section-2-closer">is FinNexus's founding mission. The project was initiated by a group of blockchain industry veterans in 2019 with a focus on offerring new DeFi products that offer greater diversity, convenience, and value to investors.</span> </p>
                </div>
                <img className="about_bg" src="logo_FNX_about.svg" />
              </div>
            </div>
          </Section_1>
      
          
          <div id="team" className="team-section">
            <div className="team-size-restrictor">
            
            <div className="team">
            <div className="orgs_title_container exchanges_title">
              <div className="flex team_main_header_container">
                <div className="org_logo_spacer">
                  <img  className="team_logo" src="FNX_team.svg"></img>
                </div>
                <div className="team-title">MEET THE TEAM</div>
              </div>
              <div className="flex">
                <div className="team_subtitle ">The FinNexus team is a diverse group of individuals with a wide range of experience within both the blockchain and cryptocurrency industry as well top finance and tech organizations.</div>
              </div>
            </div>
              
              
            <div className="team_members_container">
              <a target="_blank" href="https://www.linkedin.com/in/boris-yang-371297199/"><TeamMember name="Boris Yang" title="Founder & CEO" image="BorisYang.png" /></a>
              <a target="_blank" href="https://www.linkedin.com/in/%E9%9B%A8-%E7%94%B0-375a7127/"><TeamMember delay="100" name="Ryan Tian" title="Financial Specialist" image="RyanTian.png"/></a>
              <a target="_blank" href=" https://www.linkedin.com/in/%E5%BB%BA%E5%BC%BA-%E5%90%95-4400b5168/"><TeamMember delay="200" name="Lü Jianqiang" title="CTO" image="lu_jianqiang.png" /></a>
              <a target="_blank" href="https://www.linkedin.com/in/qinggang-jia-074757131"><TeamMember delay="300" name="Jia Qinggang" title="Senior Developer" image="jia_qinggang.png" /></a>
              <a target="_blank" href="https://www.linkedin.com/in/%E7%8F%8A%E7%8F%8A-%E9%BB%84-80b6291b9"><TeamMember delay="400" name="Sarah Huang" title="Community Architect" image="sarah_huang.png" /></a>
              <a target="_blank" href="https://www.linkedin.com/in/sardar-veerender-singh-6325a7119/"><TeamMember delay="500" name="Veerender Singh" title="Community Manager" image="VeerenderSingh.png" /></a>
              {/* <a target="_blank" href="http://linkedin.com/in/jacky-wang-776458173"><TeamMember delay="600" name="Wang Jie" title="CMO" image="wang_jie.png" /></a> */}
              </div>
            </div>
           
            <div className="team advisor-team">
            <div className="orgs_title_container exchanges_title">
              <div className="flex team_main_header_container">
                <div className="org_logo_spacer">
                  <img  className="team_logo" src="FNX_team.svg"></img>
                </div>
                <div className="team-title">ADVISORY GROUP</div>
              </div>
              <div className="flex">
                <div className="team_subtitle ">FinNexus's advisory group uses their rich experiences in cryptocurrency, finance, business strategy, and marketing to play an active role in guiding the project's strategic direction.</div>
              </div>
            </div>

           
          
              <div className="team_members_container">
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
        <div className="orgs_title_container">
          <div className="flex team_main_header_container">
            <div className="org_logo_spacer">
              <img  className="team_logo" src="FNX_partners.svg"></img>
            </div>
            <div className="team-title">PARTNERS</div>
          </div>
        </div>
        <div className="organization_container">
          <div className="organization_grid">
          <a className="org_img_link" target="_blank" href="https://www.hillstonepe.co/"><img className="org_img" src="/hillstone.png"/></a> 
            <a className="org_img_link" target="_blank" href="https://consensus-lab.com/"><img className="org_img" src="/consensuslab.png"/></a>
            <a className="org_img_link" target="_blank" href="http://newggc.com/"><img className="org_img" src="/genesis.png"/></a>
            <a className="org_img_link" target="_blank" href="https://bandprotocol.com/"><img className="org_img" src="/band_protocol.png"/></a> 
            <a className="org_img_link" target="_blank" href="https://www.cardinal.vc/"><img className="org_img" src="/cardinal_capital.png"/></a>
            <a className="org_img_link" target="_blank" href="https://chain.link/"><img className="org_img" src="/chainlink.png"/></a>
            <a className="org_img_link" target="_blank" href="https://elrond.com/"><img className="org_img" src="/elrond.png"/></a> 
            <a className="org_img_link" target="_blank" href="https://kardiachain.io/"><img className="org_img" src="/kardiachain.png"/></a>
            <a className="org_img_link" target="_blank" href="https://kyros.ventures/"><img className="org_img" src="/kyros_venture.png"/></a>
            <a className="org_img_link" target="_blank" href="https://trgc.io/"><img className="org_img" src="/trg_capital.png"/></a>
            <a className="org_img_link" target="_blank" href="http://wanchain.org/"><img className="org_img" src="/wanchain_partner.png"/></a>
            <a className="org_img_link" target="_blank" href="https://www.bkex.vc/"><img className="org_img" src="/bkex_capital.png"/></a>
          </div>
        </div>

        <div className="orgs_title_container exchanges_title">
          <div className="flex team_main_header_container">
            <div className="org_logo_spacer">
              <img  className="team_logo" src="FNX_exchange2.svg"></img>
            </div>
            <div className="team-title">EXCHANGES</div>
          </div>
        </div>
        <div className="organization_container">
          <div className="organization_grid">
            <a  className="org_img_link" target="_blank" href="https://www.bkex.com/"><img className="org_img" src="/bkex.png"/></a>
            <a className="org_img_link" target="_blank" href="https://www.bitrue.com/"><img className="org_img" src="/bitrue.png"/></a>
            <a  className="org_img_link" target="_blank" href="https://bitmax.io/"><img className="org_img" src="/bitmax.png"/></a>
            <a className="org_img_link" target="_blank" href="https://www.hoo.com/"><img className="org_img" src="/hoo.png"/></a>
            <a  className="org_img_link" target="_blank" href="https://www.jbex.com/"><img className="org_img" src="/jubi.png"/></a>
            <a className="org_img_link" target="_blank" href="https://uniswap.org/"><img className="org_img" src="/uniswap.png"/></a>
          </div>
        </div>
         <Footer />
      </div>

      <style jsx>{`
      .org_logo_spacer {
          width: 50px;
          flex-shrink: 0;
          margin-right: 15px;
          margin-left: 0px;
        }
         
      .orgs_title_container {
        width: 650px;
        margin: auto;
        margin-bottom: 10px;
      }
      .exchanges_title {
        margin-top: 20px;
      }
      .organization_grid {
        display: grid;
        margin: auto;
        grid-template-columns: 200px  200px  200px;
        grid-template-rows: repeat(130px);
        column-gap: 25px;
        row-gap: 10px;
      }
      .organization_container {
        width: 700px;
        margin: auto;
        margin-bottom: 70px;
      }
      .org_img {
        border-radius: 15px;
        box-shadow: 4px 4px 0 0 rgba(0,0,0,0.15);
        margin: 0;
        z-index: 1000;
    
        justify-self: center;
      }

      .org_img:hover {
        -webkit-transform: scale(1.05, 1.05);
                -ms-transform: scale(1.02, 1.02);
                    transform: scale(1.02, 1.02);  
      }
      
         
        .flex {
          display: flex;
        }
        .team_logo {
          vertical-align: middle;
         }
        .team_logo_spacer {
          width: 50px;
          flex-shrink: 0;
          margin-right: 15px;
         
        }
        .team_subtitle {
          color: rgb(111,44,144);
          font-style: italic;
          margin-bottom: 15px;
        }
        .section_1_large_bg{
          display: none;
        }
         .sub-section-header {
          color: rgb(111,44,144);  
        }
        
        .team_members_container{
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          margin: auto;
          flex-wrap: wrap;
          width: 700px; 
        }
        .team_main_header_container {
          margin-top: 30px;
          align-items: center;
          font-style: italic;
        }
        .team-title {
           font-weight: 700;
          line-height: 70px;
          font-size: 40px;
          color: rgb(111,44,144);
 
         }
        .team {
          justify-content: center;
          margin: auto;
          display: flex;
          flex-direction: column;
          flex-wrap: wrap;
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
          margin: 0px auto;
          padding-bottom: 50px;
          display: flex;
          flex-wrap: wrap;
          /* background-color: rgba(159, 102, 169, 0.2); */
        }
        .team-size-restrictor {
          max-width: 1920px;
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
            height: 320px;
            left: 550px;
            bottom: 250px;
            width: 890px;
            position: relative;
            transform: scale(1, 1);
            opacity: 50%;
          }
          .advisor-team {
          margin-top: 50px;
        }
        @media (min-width: 1700px) {
          .organization_grid {
            margin-top: 30px;
            grid-template-columns: 200px  200px  200px;
            width: 650px;
            grid-template-rows: repeat(130px);
          }
          .team_header_size_restrictor {
            width: 700px;
            margin: auto;
          } 
          .team-section {
            padding-bottom: 50px;
          }
          .main_text_container {
            width: 430px;
          }
          .main-contents {
            display: block;
            padding-top: 0px;
            padding-right: 0px;
            line-height: 1.5;
            width: 1000px;
            margin: auto;
          }
         
          
         
          .team {
            width: 90%;
            max-width: 1600px;
          }
          .team-title {
            margin: 0px;
            font-size: 55px;
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
           
            font-size: 70px;
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
          .organization_grid {
            grid-template-columns: 200px  200px  200px;
            grid-template-rows: repeat(130px);
            width: 650px;
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
            
            font-size: 60px;
            margin-bottom: 20px;
          }
         
          .about_bg{
            left: 520px;
            bottom: 280px;
            width: 400px;
            position: relative;
            transform: scale(1, 1);
          }
          .section-2-text {
            width: 450px;
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

          .team_header_size_restrictor {
            width: 700px;
            margin: auto;
          } 
          .team-size-restrictor {
            width: 1000px;
          }
          .team_members_container {
             width: 700px; 
             justify-content: space-between;
          }
          .team {
            width: 90%;
            max-width: 1000px;
          }
          .team-title {
            font-size: 55px;
           }
          .partners-title {
            width: 1000px;
            font-size: 40px;
          }
          .exchanges-title {
            width: 1000px;
            font-size: 40px;
          }     
          
          .team-section {
            padding-bottom: 50px;
          }
          .team_logo {
          vertical-align: middle;
         }
        .team_logo_spacer {
          width: 50px;
          flex-shrink: 0;
          margin-right: 15px;
        }
          .team_subtitle {
            color: rgb(111,44,144);
            font-style: italic;
            margin-bottom: 15px;
          }
        }

        @media (min-width: 800px) and (max-width: 1200px) {
          .organization_grid {
            grid-template-columns: 200px  200px  200px;
            grid-template-rows: repeat(130px);
          }
          .organization_container {
            width: 650px;
          }
          .main_text_container {
            width: 380px;
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
            margin-top: 50px;
            line-height: 4rem; 
            font-weight: 900;
         
            font-size: 60px;
            margin-bottom: 20px;
            

          }
         
          .about_bg{
            left: 400px;
            bottom: 270px;
            width: 340px;
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
        
          .team_members_container {
            justify-content: space-between;
            width: 700px;
          }
          .team_header_size_restrictor {
            width: 600px;
            margin: auto;
          }
          .team {
            width: 90%;
            max-width: 1000px;
          }
          .team-title {
            font-size: 40px;
           
          }
          .partners-title {
            width: 1000px;
            font-size: 40px;
          }
          .exchanges-title {
            width: 1000px;
            font-size: 40px;
          }     
         
       }   

       
       @media (max-width: 800px){
          .main_text_container {
            width: 60%;
            margin: auto;
            min-width: 300px;
    
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
        
            font-size: 40px;
            margin-top: 50px;
            margin-bottom: 20px;
          }
           
          .section-2-closer {
            font-size: 22px;
          }
          .section-2-opener {
            font-size: 30px;
            font-weight: 700;
          }
          .about_bg{
            left: 00px;
            bottom: 0px;
            width: 400px;
            position: static;
            transform: scale(1, 1);
            opacity: 15%;
            display: none;
          }
          
           
          .instructions {
            font-size: 16px;
          }
            
          .team-size-restrictor {
            width: 1000px;
          }
          .team_members_container {
           width: 100%;
           max-width: 600px;
           min-width: 360px;
           justify-content: center;
          }
          
          .team_header_size_restrictor {
            width: 300px;
            margin: auto;
          }
          .team {
            width: 100%;
            max-width: 1000px;
          }
          .team-title {
            font-size: 32px;
           }
          .partners-title {
            width: 1000px;
            font-size: 40px;
          }
          .exchanges-title {
            width: 1000px;
            font-size: 40px;
          }     
        
          .team_logo_spacer {
            margin-left: 0;
          }
          .team_subtitle {
            margin-left: 0;
            font-size: 14px;
            line-height: 18px;
          }
          .organization_grid {
            grid-template-columns:  235px 235px;
            grid-template-rows: repeat(130px);
          }
          .organization_container {
            width: 520px;
          }
          .partners-title {
            width: 520px;
            font-size: 40px;
          }
          .exchanges-title {
            width: 600px;
            font-size: 40px;
          }    

          .orgs_title_container {
            width: 500px;
           
          }
       }

        
       @media (max-width: 600px){
         .orgs_title_container {
          width: 80%;
          min-width: 300px;
         }
         .org_img {
            border-radius: 15px;
           
         }
        .organization_grid {
          grid-template-columns:  150px 150px;
          grid-template-rows: repeat(130px);
        }
        .organization_container {
          width: 325px;
        }
        }
      `}
      </style>
    </div>)}
