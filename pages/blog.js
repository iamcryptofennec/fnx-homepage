import Section_1 from '../components/Section_1'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Link from '../components/Link'
import { getPosts } from '../api/posts';
import moment from 'moment'

const Index = props => {
  return (
      <section className="mainSection">
        <Navbar is_blog_main={true} background_color="#224099"/>
        <Section_1 is_blog_main={true} background_color="#224099">
       
          <h1 className="mainTitle">
            FinNexus Blog
          </h1>
        </Section_1>
        <div className="spacer_50">
        </div>
        <div className="dash_grid">
          {props.posts.sort((post1, post2) => {post2.created_at - post1.created_at})
          .map(post => (
            <div className="blogContainer" key={post.id}>
              <Link href={`blog/${post.slug}`}>
                <a className="blog_link">
                  <img src={post.feature_image ? post.feature_image : "https://miro.medium.com/max/3600/1*mgQyl7AysxiYRvoWLJzvNg.png"}></img>
                  <p className="postTitle">
                    {post.title}
                  </p>
                  <p className="excerpt">
                    {post.excerpt ? `${post.excerpt.slice(0, 100)}...` : "No content"}
                  </p>
                  <p className="details ">
                  {post.primary_author.name ? post.primary_author.name : "FinNexus Team"} — {moment(post.published_at).format("MMMM Do YYYY")}
                  </p>
                </a>
              </Link> 
            </div>
          ))}
        </div>
        <div className="spacer_50">
        </div>
        <Footer>
          
        </Footer>
        <style jsx>
          {`
            .mainSection {
              z-index: 1;
            }
            .details {
              font-style: italic;
              color: #8c8c8c;
            }
            .blog_link{
              color: black;
            }
            .blog_link:hover{
              color: black;
            }
            .postTitle {
              font-size: 1.5rem;
              margin-bottom: 7px;
            }
            .excerpt {
              margin-bottom: 5px;
            }
            h1 {
              font-size: 3rem;
              font-weight: 700;
            }
            .spacer_50 {
              margin-bottom: 50px;
            }
            
            .blogContainer{
              padding: 20px;
              z-index: 1;
            }
            .blog_list_container {
              margin-bottom: 50px;
            }
            .mainTitle {
              line-height: 120px; 
              font-size: 35px;
              text-align: center;
            }
            .copyImage {
              width: 15px;
              height: 15px;
              margin-left: 5px;
            }
            .copy:hover {
              cursor: pointer;
              text-decoration: underline;
              text-decoration-style: dotted;
            }
            .dash_title {
              font-size: 48px;
              font-weight: 700;
              margin: 30px auto;
              width: 1200px;
            }
            .small_title {
              font-size: 32px;
            }
            .dash_grid {
              display: grid;
              grid-template-columns: repeat(3, 33%);
              justify-items: center;
              align-items: center;
              margin: auto;
              width: 1200px;
              z-index: 1;
            }
            
            .full_width {
              width: 100%;
              background-color: pink;
            }

            .dashboard_container{
              margin: 50px auto;
              width: 1000px;
            }
            .fnx_circle {
              -webkit-box-shadow: 3px 3px 3px 0px rgba(0,0,0,0.2);
              -moz-box-shadow: 3px 3px 3px 0px rgba(0,0,0,0.2);
              box-shadow: 3px 3px 3px 0px rgba(0,0,0,0.2);
              border-radius: 100%;
              border: 10px solid white;
              width: 300px;
              height: 300px;
              box-sizing: border-box;
              display: flex;
              justify-content: center;
              align-items: center;
              left: 580px;
              bottom: 250px; 
              position: relative;
            }
            .fnx_circle_content {
              box-sizing: border-box;
              border-radius: 100%;
              border: 1px solid #A2D9DA;
              width: 220px;
              height: 220px;
              line-height: 220px;
              text-align: center;
              font-size: 120px;
              font-weight: 700;
            }
            .sub-section-header {
              color: #9F66A9;   
            }
            main {
              width: 100%;
              margin: auto;
              overflow: visible
            }    
            .appContainer {
              overflow: hidden
            }      
            .section-2-closer {
              font-size: 22px;
            }
            .section-2-opener {
              font-size: 35px;
              font-weight: 700;
            }
          @media (min-width: 1700px) {
            .dash_title {
              width: 1200px;
            }
            .fnx_circle {
              width: 300px;
              height: 300px;
            }
            .dashboard_container{
              margin: 50px auto;
              width: 1000px;
            }
          
          }
            @media (min-width: 1200px) and (max-width: 1700px) {            
              .dash_grid {
                width: 1000px;
              }
              .section-2-closer {
                font-size: 22px;
              }
              .section-2-opener {
                font-size: 35px;
                font-weight: 700;
              }
              
              .dashboard_container{
                margin: 50px auto;
                width: 1000px;
              }
            }

            @media (min-width: 800px) and (max-width: 1200px) {
              .dash_grid {
                display: grid;
                grid-template-columns: repeat(2, 50%);
                justify-items: center;
                align-items: center;
                width: 100%;
              }
              .blogContainer{
                padding: 20px 10%;
              }
              .dash_title {
                min-width: 770px;
                width: 80%;
                margin: 30px auto;
              }
              
              .dashboard_container{
                margin: 50 px auto;
                width: 800px;
                min-width: 70%;
              }
              .section-2-closer {
                font-size: 22px;
              }
              .section-2-opener {
                font-size: 35px;
                font-weight: 700;
              }
              .fnx_circle {
                width: 250px;
                height: 250px;
                left: 380px;
                bottom: 250px; 
              }
              .fnx_circle_content {
                width: 200px;
                height: 200px;
                font-size: 110px;
                line-height: 200px;
              }
          }   

          @media (max-width: 800px){
            .main_text_container {
              margin: auto;
            }
            .dash_grid {
              display: grid;
              grid-template-columns: repeat(1, 100%);
              justify-items: center;
              align-items: center;
              width: 100%;
            }
            .blogContainer{
              padding: 20px 15%;
            }
            .dash_title {
              max-width: 770px;
              width: 95%;
              margin: 30px auto;
            }
            .dashboard_container{
              margin: 50 px auto;
              width: 95%;
            }
             
          }
        `}
      </style>
      
      </section>
  
  )
}

export const getStaticProps = async (context) => {
  let posts = await getPosts();

  posts.forEach(post => {
    console.log(post.published_at)
  })
  return { props: { posts: posts }}
}



export default Index

