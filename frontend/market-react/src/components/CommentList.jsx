import React from "react";
import CommentListItem from "./CommentListItem";
import styled from "styled-components";


const Wrapper = styled.div`
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
    `


const CommentList = (props) => {

    const {comments} = props;


    return (
        <Wrapper>
            {comments.map((comment, index) => {
                return (
                    <CommentListItem
                        key={comment.id}
                        comment={comment}
                    />
                )
            })}
        </Wrapper>
    );
}

export default CommentList;