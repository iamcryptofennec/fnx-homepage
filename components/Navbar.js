import { useState } from 'react';
import Link from './Link.js'
import { useRouter } from 'next/router'


export default function Navbar(props) {
  const [menu, setMenu] = useState(0);
  const handleMenuClick = () => {
    if (menu === 1) return setMenu(0)
    setMenu(1)
  }
  return (
    <div className="navbar-container">
      <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <div className="navbar-item"  >
            <Link href="/">
              <a className="navbar-item"> <img className="logo" src="/fnxLogo.svg" alt="FinNexus"  /></a>
            </Link>
            
            
           </div>
            <a role="button" onClick={handleMenuClick} className={`navbar-burger  ${menu === 0 ? "" : "is-active"}`} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
              <span className="burger burger-1" aria-hidden="true"></span>
              <span className="burger burger-2" aria-hidden="true"></span>
              <span className="burger burger-3" aria-hidden="true"></span>
            </a>
        </div>

        <div id="basicNavbar" className={`navbar-menu ${menu === 0 ? "" : "is-active"}`}>
          <div className="navbar-end">
          

            {/* <Link href="/">
              <a className="navbar-item">Home</a>
            </Link> */}
            <Link href="https://www.docs.finnexus.io/">
              <a  target="_blank" className="navbar-item">Docs</a>
            </Link>  
            <Link href="/about">
              <a className="navbar-item">About</a>
            </Link>
            <Link href="/blog">
              <a className="navbar-item">Blog</a>
            </Link>
            <Link href="/dashboard">
              <a className="navbar-item">Dashboard</a>
            </Link>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">
                Governance
              </a>
              <div className="navbar-dropdown">
                <Link href="https://forum.finnexus.io/">
                  <a  target="_blank" className="navbar-item">Forum</a>
                </Link>  
                <Link href="https://snapshot.page/#/finnexus">
                  <a  target="_blank" className="navbar-item">Snapshot (Ethereum)</a>
                </Link>
                <Link href="https://vote.wandevs.org/#/">
                  <a  target="_blank" className="navbar-item">Snapshot (Wanchain)</a>
                </Link>
           
              </div>
            </div>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">
                Products
              </a>
              <div className="navbar-dropdown">
                <Link href="https://liquidity.finnexus.io/">
                  <a  target="_blank" className="navbar-item">FNX Mining</a>
                </Link>  
                <Link href="https://options.finnexus.io//">
                  <a  target="_blank" className="navbar-item">FinNexus Options</a>
                </Link>
                <Link href="https://wandora.finnexus.app/#/">
                  <a  target="_blank" className="navbar-item">Wandora Box</a>
                </Link>
                <Link href="https://jackspot.finnexus.app/#/">
                  <a  target="_blank" className="navbar-item">Jack's Pot</a>
                </Link>
              
              </div>
            </div>
          </div>
        </div>
      </nav>


      <style jsx>{`

            .selected {
              text-decoration: underline;
              font-weight: 700;
            }
            .navbar * {
              z-index: 10;
            }
            .navbar-container {
              margin-top: 0px;
              height: 70px;
              z-index: 10;
              background-color: ${props.background_color};
            }
            .navbar-item img {
              width: 140px;
              max-height: 100px;
              position: absolute;
            }
            .logo {
              max-width: 900px;
            } 
            .navbar-item {
              font-size: 16px;
            }
            .navbar,.is-primary .navbar-brand .navbar-item {
              width: 100px;
              height: 50px;
              margin: 0;
              padding: 0;
            }
            .navbar,.is-primary .navbar-brand .navbar-item .navbar-item   {
              width: 100px;
              height: 50px;
              margin: 0;
              padding: 0;
            }

            .navbar-container {
              width: ${props.is_blog_main ? "100%" : "80%"};
              margin: auto;
            }
      
          @media (min-width: 1700px) {
            .navbar-container {
              width: ${props.is_blog_main ? "100%" : "80%"}
            }
            .navbar {
              width: 1000px;
              margin: auto;
            }
            .navbar-item {
              font-size: 20px;
            }
          }
  
          @media (min-width: 1200px) and (max-width: 1700px) {
            .navbar-container {
              width: ${props.is_blog_main ? "100%" : "95%"};
            }
            .navbar {
              width: 900px;
              margin: auto;
            }
              
          }

          @media (min-width: 700px) and (max-width: 1200px) {
            .navbar-container {
              width: 100%;

              min-width: 00px;

            }
             
           
          }
         

          @media (max-width: 800px) {
            .navbar-container {
              width: 100%;
              min-width: 00px;
            }
            .navbar {
              width: 90%;
            }
          }
          @media (min-width: 1024px) and (max-width: 1200px) {}
          @media (min-width: 800px) and (max-width: 1200px) {
            .navbar {
              width: 700px;
              margin: auto;
            }
          }

          @media (max-width: 1024px) {
            
            .navbar {
              margin: 0 auto;
            }
            .navbar-item {
              font-size: 17px;
            }
            .navbar-item img {
              width: 140px;
              max-height: 100px;
              position: absolute;
            }
            .navbar-menu.is-active {
              top: 80px;
              opacity: 1;
              position: absolute;
              pointer-events: auto;
            }
            .navbar-menu {
              -webkit-transition: top .4s ease-in-out;
              -o-transition: top .4s ease-in-out;
              transition: top .4s ease-in-out;
              right: 0px;
              display: block;
              width: 100%;
              position: absolute;  
              top: -600px;
              pointer-events: none;
            }
            .logo {
              max-width: 400px;
              margin-top: 0px;
            }
           }
   
      `}</style>
    </div>
    )}
