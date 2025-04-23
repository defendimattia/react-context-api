import { useContext } from "react"
import ListContext from "../contexts/ListContext"

export default function PostList() {

    const { list } = useContext(ListContext)

    return (
        <ul>
            {list.map(el => <li key={el.id}><a href={`http://localhost:5173/postlist/${el.id}`}>{el.title}</a></li>)}
        </ul>
    )
}