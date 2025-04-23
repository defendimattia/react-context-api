import { Outlet } from "react-router-dom"
import MainNav from "../components/MainNav"


export default function DefaultLayout() {
    return (
        <>
            <MainNav />
            <Outlet />
        </>

    )
}