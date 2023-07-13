import domain from "@/utils/config"
import axios from "axios"
import { useRouter } from "next/router"
import { useState } from "react"


export default function postID({post}) {
  const router = useRouter()
  const [title, setTitle] = useState(post.title)
  const [imageurl, setImageurl] = useState(post.imageurl)
  const [details, setDetails] = useState(post.details)

  // function that send data to the server DB
  async function editPost(){
    const postUpdate = {title, imageurl, details }

    console.log(postUpdate)
    try {
        await axios.put(`${domain}/posts/${post._id}`, postUpdate)
        alert('Success updating post')

        router.push('/posts')
    } catch (error) {
        console.log(error)
    }
}

    return (
      <>
        

        <div className="container">
            <div className="row mt-5">
            <h4>Edit Post id : { router.query.id }</h4>
                <div className="col-12">
                    
          
            <div className="mb-3">
                <label htmlFor="firstName" className="form-label">
                Title
                </label>
                <input type="text" className="form-control" id="firstName" 
                name="title" 
                value={title}
                onChange={(e)=>{
                    setTitle(e.target.value);
                }}/>
            </div>
            <div className="mb-3">
                <label htmlFor="firstName" className="form-label">
                Image Url
                </label>
                <input type="text" className="form-control" id="firstName" 
                name="imageurl"
                value={imageurl}
                onChange={(e)=>{
                    setImageurl(e.target.value);
                }} />
            </div>
            <div className="mb-3">
                <label htmlFor="lastName" className="form-label">
                content
                </label>
                <textarea type="text" className="form-control" id="lastName" 
                name="details"
                value={details}
                onChange={(e)=>{
                    setDetails(e.target.value);
                }} />
            </div>
            
            
            <button onClick={editPost} className="btn btn-primary">
                Update
            </button>
            

                 </div>
            </div>
        </div>
      </>
    )
  }

  export async function getServerSideProps(context){
    const response = await axios.get(`${domain}/posts/${context.query.id}`)
    return {
      props: {
        post: response.data,
      }
    }
  }
  