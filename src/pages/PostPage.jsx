import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

export default function PostPage() {

    const [post, setPost] = useState(null)
    const [loading, setLoading] = useState(true)
    const { id } = useParams()
    const [url, setUrl] = useState(parseInt(id))
    const navigate = useNavigate()


    useEffect(() => {
        setLoading(true)
        fetch(`https://jsonplaceholder.typicode.com/posts/` + url)
            .then(response => response.json())
            .then(data => {
                setPost(data)
                setLoading(false)
            })
    }, [url])


    if (loading) {
        return <h1>Loading...</h1>
    }

    return <>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        {url > 1 && <button onClick={() => { setUrl(prev => prev - 1) }}>prev</button >}
        {url < 100 && <button onClick={() => { setUrl(prev => prev + 1) }}>next</button>}
    </>


}