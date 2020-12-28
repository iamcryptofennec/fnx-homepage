// Import getSinglePost function
import { getSinglePost } from '../../api/posts';
import Section_1 from '../../components/Section_1'
import Footer from '../../components/Footer'

// PostPage page component
const PostPage = (props) => {
  // Render post title and content in the page from props
  return (
    <div>
      <Section_1 is_blog_main={true} background_color="#224099">
        <h1 className="mainTitle">
          FinNexus Blog
        </h1>
      </Section_1>
      <div className="blogContainer">
        <h1 >{props.post === undefined ? "" : props.post.title}</h1>
        <div className="blogSubContainer" dangerouslySetInnerHTML={{ __html: props.post === undefined ? "" : props.post.html}} />
      </div>
      <div className="spacer_50">
      </div>
      <Footer> 
      </Footer>
      
      <style jsx>
          {`
          .spacer_50 {
            margin: 50px 0;
          }
          h1 {
            font-size: 3rem;
            font-weight: 700;
          }
          h2 {
            font-size: 2.5rem;
            font-weight: 700;
          }
          h3 {
            font-size: 1.8rem;
            font-weight: 700;
          }
          .blogContainer {
            width: 50%;
          }

          .mainTitle {
            line-height: 40px; 
            font-size: 35px;
            text-align: center;
          }
          @media (min-width: 1700px) {
            .blogContainer {
              width: 50%;
              margin: auto;
            }
            
          
          }
            @media (min-width: 1200px) and (max-width: 1700px) { 
              .blogContainer {
                width: 60%;
                max-width: 850px;
                margin: auto;
              }
             
              .main-title {
                line-height: 4rem; 
                font-weight: 900;
                width: 300px;
                font-size: 60px;

              }
             
              .dashboard_container{
                margin: 50px auto;
                width: 1000px;
              }
            }

            @media (min-width: 800px) and (max-width: 1200px) {
              
              .blogContainer {
                width: 60%;
                margin: auto;
              }

              .dash_title {
                min-width: 770px;
                width: 80%;
                margin: 30px auto;
              }
              
              .dashboard_container{
                margin: 50 px auto;
                width: 800px;
                min-width: 60%;
              }
 
          }   

          @media (max-width: 800px){
            .blogContainer {
              max-width: 600px;
              width: 85%;
              margin: auto;
            }

            .dash_grid {
              display: grid;
              grid-template-columns: repeat(2, 50%);
              justify-items: center;
              align-items: center;
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
            .main_text_container {
              margin: auto;
            }
           
          }
        `}
      </style>
    </div>
  )
}

 
// PostPage.getInitialProps = async (params) => {
//   const post = await getSinglePost(params.query.slug);
//   return { post: post }
// };

export const getStaticProps = async (context) => {
  const post = await getSinglePost(context.params.slug);
  return {props: { post: post }}
}


export async function getStaticPaths() {
  return {
    paths: [
      // String variant:
      '/blog/first-post',
      '/blog/welcome',
      '/blog/the-editor',
      '/blog/publishing-options',
      '/blog/admin-settings',
      '/blog/organzing-content',
      '/blog/apps-integrations',
      '/blog/themes'
    ],
    fallback: true,
  }
}

export default PostPage