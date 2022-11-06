import About from "../pages/About";
import Posts from "../pages/About";
import PostIdPage from "../pages/PostIdPage";


export const routes = [
	{path: '/about', component: About},
	{path: '/posts', component: Posts},
	{path: '/posts/:id', component: PostIdPage},
]