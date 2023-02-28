import React, {useState} from "react";
import styled from "styled-components";
import PostListItem from "./PostListItem";


// todo 버튼 ON/OFF 기능 - V

const PostList = (props) => {


    const {posts, onClickItem, stateY, stateS} = props;


    if (stateY) {
        const filterdCampus = posts.filter((post) => post.campus.includes("YONGIN"));
        console.log(filterdCampus)
    }
    if (stateS) {
        const filterdCampus = posts.filter((post) => post.campus.includes("SEOUL"));
        console.log(filterdCampus)
    }


    return (
        <div>
            {posts.map((post, index) => {
                return (
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