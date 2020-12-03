// import Link from 'next/link'
// import ReactMarkdown from 'react-markdown'

// const BlogList = ({ allBlogs }) => {
//   function truncateSummary(content) {
//     return content.slice(0, 200).trimEnd()
//   }

//   function reformatDate(fullDate) {
//     const date = new Date(fullDate)
//     return date.toDateString().slice(4)
//   }

//   return (
//     <>
//       <ul className="list">
//         {allBlogs.length > 1 &&
//           allBlogs.sort((post1, post2) => {
//             let date1 =  new Date(post1.frontmatter.date)
//             let date2 =  new Date(post2.frontmatter.date)
//             return date2 - date1
//           }).map(post => (
//             <Link key={post.slug} href={{ pathname: `/blog/${post.slug}` }}>
//               <a >
//                 <li className="blog_link">
//                   <h2>{post.frontmatter.title} — {reformatDate(post.frontmatter.date)}</h2>
//                   {/* <div className="hero_image">
//                     <img
//                       src={post.frontmatter.hero_image}
//                       alt={post.frontmatter.hero_image}
//                     />
//                   </div> */}
//                     {/* <p>
//                       <ReactMarkdown
//                         source={truncateSummary(post.markdownBody)}
//                       />
//                     </p> */}
//                 </li>
//               </a>
//             </Link>
//           ))}
//       </ul>
//       <style jsx>
//         {`
//          .blog_link {
//             margin-bottom: 5px;
//          }
//          .list {
//            margin: auto;
//            width: 500px;
//          }
//         `}
//       </style>
//     </>
//   )
// }

// export default BlogList
