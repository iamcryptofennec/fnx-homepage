// // Import getSinglePost function
// import { getSinglePost } from '../../api/posts';

// // PostPage page component
// const PostPage = (props) => {
//   // Render post title and content in the page from props
//   return (
//     <div>
//       <h1>{props.post.title}</h1>
//       <div dangerouslySetInnerHTML={{ __html: props.post.html }} />
//     <style jsx>
//       {`
//         p, h1 {
//             font-size: 62px;
//           }
//           h2 {
//             font-size: 1.5rem;
//           }
//           h3 {
//             font-size: 1.3rem;
//           }
//       `}
//     </style>
//     </div>
//   )
// }

// // Pass the page slug over to the "getSinglePost" function
// // In turn passing it to the posts.read() to query the Ghost Content API
// PostPage.getInitialProps = async (params) => {
//   const post = await getSinglePost(params.query.slug);
//   return { post: post }
// };

// export default PostPage