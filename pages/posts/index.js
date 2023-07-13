import PostItem from "@/components/PostItem"
import domain from "@/utils/config"
import axios from "axios"
import { router } from "next/router"


export default function index({postData}) {
    //console.log(postData)

    async function deletePost(post_id){
      try {
        await axios.delete(`${domain}/posts/${post_id}`)
        alert(`Successfully deleted`)
        router.push('/posts')
      } catch (error) {
        console.log(error)
      }
    
    }

    const posts = postData.map(
        (post) => {
            return (
                
                //<PostItem post={post} />

                  <tr key={post._id}>
                    <th>{post._id}</th>
                    <td>{post.title}</td>
                    <td>{post.imageurl}</td>
                    <td>{post.details}</td>
                    <td>
                        <button onClick={()=>{router.push(`/posts/${post._id}`)}}  className="btn btn-sm btn-warning">Edit</button>
                        <button onClick={()=>{deletePost(post._id)}}  className="btn btn-sm btn-danger">Delete</button>
                    </td>
                  </tr>

                )
        }
    )

    return (
      <>
        <h1>Post Index : </h1>
        <table className="table">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Title</th>
                    <th scope="col">imageurl</th>
                    <th scope="col">details</th>
                    <th scope="col">#</th>
                  </tr>
                </thead>
                <tbody>
                    {posts}
                </tbody>
        </table>
      </>
    )
  }

  export async function getStaticProps() {
    try {
        const response = await axios.get(`${domain}/posts`)

        return{
            props:{
                postData: response.data
            }
        }
    } catch (error) {
        
    }
  }