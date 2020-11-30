import matter from 'gray-matter'
import BlogList from '../components/BlogList'
import Section_1 from '../components/Section_1'
import Footer from '../components/Footer'
import Link from 'next/link'
import { getPosts } from '../api/posts';

const Index = props => {
  return (
  
      <section>
        <Section_1 page="blog_main" background_color="#9A5EA4">
          <div className="mainContents">
            <div className="main_text_container">
              <h1 className="mainTitle">
                Welcome to the Official FinNexus Blog
              </h1>
              <div className="mainContentsText_1">
              <ul>
              {props.posts.map(post => (
                <li key={post.id}>
                  <Link href={`blog/[slug]`} as={`blog/${post.slug}`}>
                    <a>{post.title}</a>
                  </Link>
                </li>
              ))}
 
  </ul>
              </div>
            </div>
          </div>
        </Section_1>
        {/* <div className="blog_list_container">
          <BlogList allBlogs={props.allBlogs} />
        </div> */}
          
        <Footer>
          
        </Footer>
        <style jsx>
        {`
          .blog_list_container {
            margin-bottom: 50px;
          }
          .main_text_container {
            width: 600px;
            margin: auto;
          }
          .mainContentsText_1 {
            text-align: justify;
            text-justify: auto;
          }
          .mainContents {
            margin: auto;
            width: 1000px;
            margin-top: 0px;
          }
          .mainTitle {
            line-height: 150px; 
            font-size: 45px;
           }
        `}
      </style>
      
      </section>
  
  )
}
Index.getInitialProps = async () => {
  const posts = await getPosts();
  console.log(posts)
  return { posts: posts }
}

export default Index

// export async function getStaticProps() {
//   const siteConfig = await import(`../data/config.json`)
//   //get posts & context from folder
//   const posts = (context => {
//     const keys = context.keys()
//     const values = keys.map(context)

//     const data = keys.map((key, index) => {
//       // Create slug from filename
//       const slug = key
//         .replace(/^.*[\\\/]/, '')
//         .split('.')
//         .slice(0, -1)
//         .join('.')
//       const value = values[index]
//       // Parse yaml metadata & markdownbody in document
//       const document = matter(value.default)
//       return {
//         frontmatter: document.data,
//         markdownBody: document.content,
//         slug,
//       }
//     })
//     return data
//   })(require.context('../posts', true, /\.md$/))

//   return {
//     props: {
//       allBlogs: posts,
//     },
//   }
// }
