import { BrowserRouter, Route, Routes } from "react-router-dom"
import Homepage from "./pages/Homepage"
import AboutUs from "./pages/AboutUs"
import PostList from "./pages/PostList"
import PostPage from "./pages/PostPage"
import DefaultLayout from "./layouts/DefaultLayout"
import "./App.css"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route element={<DefaultLayout />}>
            <Route index element={<Homepage />} />
            <Route path="/aboutus" element={<AboutUs />} />

            <Route path="/postlist">
              <Route index element={<PostList />} />
              <Route path=":id" element={<PostPage />} />
            </Route>

            <Route path="*" element={<h1>Pagina non trovata!</h1>} />
          </Route>

        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
