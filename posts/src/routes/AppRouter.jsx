import { Route, Routes } from "react-router-dom";
import Feed from "../pages/Feed";
import Posts from "../pages/Posts";
import Update from "../pages/Update";
import More from "../pages/More";
import Error from "../pages/Error";

export default function AppRouter() {
    return (
        <Routes>
            <Route path={"/"} element={<Feed />} />
            <Route path={"/posts"} element={<Posts />} />
            <Route path={"/update/:id"} element={<Update />} />
            <Route path={"/more/:id"} element={<More />} />
            <Route path={"*"} element={<Error />} />
        </Routes>
    )
}
