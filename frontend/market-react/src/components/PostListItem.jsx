import React from "react";
import styled from "styled-components";


const MDiv = styled.div`
  margin: 30px;
  border: solid 1px black;
`


const PostListItem = (props) => {

    const { post, onClick } = props;

    const campus = post.campus === "YONGIN" ? "용인캠" : "서울";
    const itemStatus = post.itemStatus === "SALE" ? "판매중" : "판매 완료";

    return (
        <>
            <MDiv onClick={onClick}>
                <div><b>{post.itemName}</b> {itemStatus}</div>
                <div>{campus} {post.location}</div>
                <div>{post.price}</div>
                <div>❤️{post.like}</div>
            </MDiv>
        </>


    );
}

export default PostListItem;