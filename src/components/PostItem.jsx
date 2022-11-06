import React, { PureComponent } from 'react';
import MyButton from './UI/button/MyButton';
import DeleteButton from './UI/button/DeleteButton';
import {useNavigate} from 'react-router-dom'

function PostItem(props) {
	const navigate = useNavigate();
	return (
		<div>
			<div className="post">
				<div className="post__content">
					<strong>{props.post.id}. {props.post.title}</strong>
					<div>
						{props.post.body}
					</div>
				</div>
				<div className="post__btns">
					<MyButton onClick={() => {navigate(`/posts/${props.post.id}`)}}>
						Открыть
					</MyButton>
					<DeleteButton onClick={() => props.remove(props.post)}>
						Удалить
					</DeleteButton>
				</div>
			</div>
		</div>
	)

}

export default PostItem;