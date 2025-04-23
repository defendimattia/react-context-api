import { useEffect, useState } from "react"

export default function PostList() {

    const [list, setList] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(data => setList(data))

    }, [])

    return (
        <>
            <h1>postlist</h1>
            <ul>
                {list.map(el => <li key={el.id}><a href={`http://localhost:5173/postlist/${el.id}`}>{el.title}</a></li>)}
            </ul>
        </>

    )

}
