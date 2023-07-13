export default function PostItem({post}){
    return (
        <>

        <tr key={post._id}>
          <th scope="row">{post._id}</th>
          <td>{post.title}</td>
          <td>{post.imageurl}</td>
          <td>{post.details}</td>
        </tr>

        </>
    )
}