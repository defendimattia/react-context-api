
export default function PostList({ list }) {


    return (
        <>
            <h1>postlist</h1>
            <ul>
                {list.map(el => <li key={el.id}><a href={`http://localhost:5173/postlist/${el.id}`}>{el.title}</a></li>)}
            </ul>
        </>

    )

}
