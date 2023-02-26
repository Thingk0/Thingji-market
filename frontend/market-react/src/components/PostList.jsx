import React from "react";
import styled from "styled-components";
import PostListItem from "./PostListItem";


//todo PostListItem map 함수로 뿌리기

const PostList = (props) => {

    const { posts, onClickItem } = props;


    return (
        <div>
            {posts.map((post, index) => {
                return(
                    <PostListItem
                        key={post.id}
                        post={post}
                        onClick={() => {
                            onClickItem(post);
                        }}
                    />
                );
            })}
        </div>
    )
}

export default PostList;