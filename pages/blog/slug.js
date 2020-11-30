import * as React from 'react'
import matter from 'gray-matter'
import ReactMarkdown  from 'react-markdown'
import 'github-markdown-css'
import showdown from 'showdown'
import Interweave from 'interweave'
const glob = require('glob')

 
export default function BlogTemplate({ frontmatter, markdownBody, siteTitle }) {
  function reformatDate(fullDate) {
    const date = new Date(fullDate)
    return date.toDateString().slice(4)
  }

  /*
   ** Odd fix to get build to run
   ** It seems like on first go the props
   ** are undefined — could be a Next bug?
   */
  let converter = new showdown.Converter()
  let text = markdownBody
  let html = converter.makeHtml(markdownBody)

  if (!frontmatter) return <></>
  
  return (
   
      <article className="blog_article">
        {/* <figure className=" ">
          <img
            src={frontmatter.hero_image}
            alt={` ${frontmatter.title}`}
          />
        </figure> */}
        <div className="">
          {/* <h1>{frontmatter.title}</h1> */}
          <h3>{reformatDate(frontmatter.date)} — By: {frontmatter.author}</h3>
          

        </div>
        <div className="markdown-body markdown">
          {/* <ReactMarkdown allowDangerousHtml={true} source={markdownBody} /> */}
          <Interweave containerTagName="interweave" allowElements={true} content={html}/>

        </div>
    
      <style jsx>
        {`
             
            .markdown {
              color: #4a4a4a;
            
            }
            .markdown img {
              width: 100px;
            }
           .blog_article {
              padding: 20px;
              width: 1000px;
              margin: auto;
              border: 5px double rgba(0,0,0,0.41);
              border-radius: 10px 10px 10px 10px;
           }
           p, h1 {
             font-size: 62px;
           }
           h2 {
             font-size: 1.5rem;
           }
           h3 {
             font-size: 1.3rem;
           }
        `}
      </style>
      </article>
  )
}

export async function getStaticProps({ ...ctx }) {

  const { slug } = ctx.params
  const content = await import(`../../posts/${slug}.md`)
  const config = await import(`../../data/config.json`)
  const data = matter(content.default)

  return {
    props: {
      siteTitle: config.title,
      frontmatter: data.data,
      markdownBody: data.content,
    },
  }
}

export async function getStaticPaths() {
  //get all .md files in the posts dir
  const blogs = glob.sync('posts/**/*.md')

  //remove path and extension to leave filename only
  const blogSlugs = blogs.map(file =>
    file
      .split('/')[1]
      .replace(/ /g, '-')
      .slice(0, -3)
      .trim()
  )

  // create paths with `slug` param
  const paths = blogSlugs.map(slug => `/blog/${slug}`)
  return {
    paths,
    fallback: false,
  }
}
