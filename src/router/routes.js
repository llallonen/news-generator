import About from "../pages/About"
import Login from "../pages/Login"
import NotFound from "../pages/NotFound"
import PostIdPage from "../pages/PostIdPage"
import Posts from "../pages/Posts"

const privateRoutes = [
    {path: '/about', component: About, exact: true},
    {path: '/posts', component: Posts, exact: true},
    {path: '/posts/:id', component: PostIdPage, exact: true},
    {path: '*', component: NotFound, exact: false }
]


const publicRoutes = [
    {path: '/login', component: Login, exact: true},
    {path: '/about', component: About, exact: true},
    {path: '*', component: Login, exact: false }
]


export { privateRoutes, publicRoutes };