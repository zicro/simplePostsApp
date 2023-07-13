import domain from "@/utils/config"
import axios from "axios"
import { useState } from "react"


export default function AddPost() {

    const [title, setTitle] = useState('')
    const [imageurl, setImageurl] = useState('')
    const [details, setDetails] = useState('')

    // function that send data to the server DB
    async function addPost(){
        const post = { title, imageurl, details }

        console.log(post)
        try {
            await axios.post(`${domain}/posts`, post)
            alert('Success adding post')
            router.push('/posts')
        } catch (error) {
            console.log(error)
        }
    }


    return (
      <>
        

        <div className="container">
            <div className="row mt-5">
            <h3>AddPost Page : </h3>
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
            
            
            <button onClick={addPost} className="btn btn-primary">
                Save
            </button>
            

                 </div>
            </div>
        </div>
      </>
    )
  }
  