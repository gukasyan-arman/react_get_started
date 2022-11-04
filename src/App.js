import React, { useEffect, useMemo, useRef, useState } from "react";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import "./styles/App.css";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import PostFilter from "./components/ PostFilter";
import MyModal from "./components/UI/myModal/MyModal";
import { usePosts } from "./components/hooks/usePosts";
import axios, { Axios } from "axios";
import PostService from "./api/PostService";
import Loader from "./components/UI/loader/Loader";
import { useFetching } from "./components/hooks/useFetching";
import { getPageCount, getPagesArr } from "./utils/pages";
import Pagination from "./components/UI/pagination/Pagination";

function App() {

	const [posts, setPosts] = useState([])
	const [filter, setFilter] = useState({sort: "", query: ""})
	const [modal, setModal] = useState(false)
	const [totalPages, setTotalPages] = useState(0)
	const [limit, setLimit] = useState(10)
	const [page, setPage] = useState(1)
	const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

	const [fetchPosts, isPostLoading, postError] = useFetching(async (limit, page) => {
		const response = await PostService.getAll(limit, page);
		setPosts(response.data)
		const totalCount = response.headers['x-total-count']
		setTotalPages(getPageCount(totalCount, limit))
	})

	console.log(totalPages)

	useEffect(() => {
		fetchPosts(limit, page)
	}, [page]) 

	const createPost = (newPost) => {
		setPosts([...posts, newPost])
		setModal(false)
	}

	const removePost = (post) => {
		setPosts(posts.filter(p => p.id !== post.id))
	}

	const changePage = (page) => {
		setPage(page)
	}

	return (
		<div className="App">
			<button onClick={fetchPosts} >GET POSTS</button>
			<MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>
				Создать пост
			</MyButton>
			<MyModal visible={modal} setVisible={setModal}>
				<PostForm create={createPost} />
			</MyModal>
			<hr style={{margin: "15px 0"}} /> 
			<PostFilter
				filter={filter} setFilter={setFilter}
			/>
			{postError && 
				<h1>Произошла ошибка: {postError}</h1>
			}
			{isPostLoading
				? 
				<div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}>
					<Loader />
				</div>
				: <PostList remove={removePost} posts={sortedAndSearchedPosts} title={"Spisok"}/>
			}
			<Pagination
				page={page} 
				changePage={changePage}
				totalPages={totalPages}
			/>
		</div>
	);
}

export default App;
