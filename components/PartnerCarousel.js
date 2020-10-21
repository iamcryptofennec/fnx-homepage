import Flickity from 'react-flickity-component'

const flickityOptions = {
  initialIndex: 2,
  freeScroll: true,
  wrapAround: true,
  autoPlay: true,
  autoPlay: 3000,
  hash: true,
  
  
}

function Carousel() {
  return (
    <Flickity
      className='carousel' // default ''
      elementType={'div'} // default 'div'
      options={flickityOptions} // takes flickity options {}
      disableImagesLoaded={false} // default false
      reloadOnUpdate // default false
      static // default false
    >
 
     
      <a className="carousel-cell" target="_blank" href="https://www.hillstonepe.co/"><img src="/hillstone.png"/></a> 
      <a className="carousel-cell" target="_blank" href="https://consensus-lab.com/"><img src="/consensuslab.png"/></a>
      <a className="carousel-cell" target="_blank" href="https://www.genesis-group.com/"><img src="/genesis.png"/></a>
      <a className="carousel-cell" target="_blank" href="https://bandprotocol.com/"><img src="/band_protocol.png"/></a> 
      <a className="carousel-cell" target="_blank" href="https://www.cardinal.vc/"><img src="/cardinal_capital.png"/></a>
      <a className="carousel-cell" target="_blank" href="https://chain.link/"><img src="/chainlink.png"/></a>
      <a className="carousel-cell" target="_blank" href="https://elrond.com/"><img src="/elrond.png"/></a> 
      <a className="carousel-cell" target="_blank" href="https://kardiachain.io/"><img src="/kardiachain.png"/></a>
      <a className="carousel-cell" target="_blank" href="https://kyros.ventures/"><img src="/kyros_venture.png"/></a>
      <a className="carousel-cell" target="_blank" href="https://trgc.io/"><img src="/trg_capital.png"/></a>
      <a className="carousel-cell" target="_blank" href="http://wanchain.org/"><img src="/wanchain.png"/></a>
      <a className="carousel-cell" target="_blank" href="https://www.bkex.vc/"><img src="/bkex_capital.png"/></a>


      <style jsx>{`
     /*
* Prefixed by https://autoprefixer.github.io
* PostCSS: v7.0.29,
* Autoprefixer: v9.7.6
* Browsers: last 4 version
*/
img {
      border-radius: 10px;
      box-shadow: 4px 4px 0 0 rgba(0,0,0,0.1);

    }

 @media (min-width: 1000px)   {
        .carousel-cell {
          width: 20%; /* full width */
          /* height: 50%;   */
          margin-right: 30px;
        }
      }
      
     @media (min-width: 700px) and (max-width: 1000px)   {
        .carousel-cell {
          width: 30%; /* full width */
          /* height: 50%;   */
          margin-right: 30px;
        }
      }
      @media   (max-width: 700px)   {
        .carousel-cell {
          width: 50%; /* full width */
          /* height: 50%;   */
          margin-right: 15px;
        }
      }
      `}</style>
    </Flickity>
  )
}

export default Carousel