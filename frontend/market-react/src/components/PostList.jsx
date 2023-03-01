import React, {useEffect, useState} from "react";
import styled from "styled-components";
import PostListItem from "./PostListItem";


const PostList = (props) => {
    const {posts, onClickItem, stateY, stateS} = props;

    const [filteredArr, setFilteredArr] = useState(posts)


    useEffect(() => {
        if(stateY){
            const filterdYCampus = posts.filter((post) => post.campus.includes("YONGIN"));
            setFilteredArr(filterdYCampus)
            console.log(filteredArr)
        } else {
            console.log("자연캠: false"); //todo false면 배열에서 지우기
        }
    }, [stateY])

    useEffect(() => {
        if(stateS){
            const filterdSCampus = posts.filter((post) => post.campus.includes("SEOUL"));
            setFilteredArr(filterdSCampus)
            console.log(filteredArr)
        } else {
            console.log("인문캠: false"); //todo false면 배열에서 지우기
        }
    }, [stateS])


    return (
        <div>
            {filteredArr.map((post, index) => {
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