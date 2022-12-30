import useFetch from "./useFetch";
function App() {

const {isLoading , error , data:posts} = useFetch("https://jsonplaceholder.typicode.com/posts");
console.log(posts);
if(isLoading) {
  return (
    <p style={{display:"flex",justifyContent:"center",alignItems:"center",fontSize:"2rem"}}>Loading...</p>
  )
}
if(error) {
  return (
    <p style={{display:"flex",justifyContent:"center",alignItems:"center",fontSize:"2rem"}}>Error</p>
  )
}
  return (
    <div className="posts">
      <h2>List of all Posts</h2>
     <ul>
      {posts.map((post) => {
        return (
          <>
          <li key={post.userId}>{post.title}</li>
          </>
         
        )
      })}
     </ul>
    </div>
  );
}

export default App;
