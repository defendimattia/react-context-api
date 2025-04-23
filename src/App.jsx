import { useEffect, useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Homepage from "./pages/Homepage"
import AboutUs from "./pages/AboutUs"
import PostPage from "./pages/PostPage"
import PostCard from "./pages/PostCard"
import DefaultLayout from "./layouts/DefaultLayout"
import "./App.css"
import ListContext from "./contexts/ListContext"

function App() {

  const [list, setList] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(data => setList(data))

  }, [])

  return (
    <>
      <ListContext.Provider value={{list}}>
        <BrowserRouter>
          <Routes>

            <Route element={<DefaultLayout />}>
              <Route index element={<Homepage />} />
              <Route path="/aboutus" element={<AboutUs />} />
              <Route path="/postlist">
                <Route index element={<PostPage />} />
                <Route path=":id" element={<PostCard />} />
              </Route>
              <Route path="*" element={<h1>Pagina non trovata!</h1>} />
            </Route>

          </Routes>
        </BrowserRouter>
      </ListContext.Provider >
    </>
  )
}

export default App
