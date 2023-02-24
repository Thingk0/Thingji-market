import React from "react";
import styled from "styled-components";

const Comment = styled.div`
  border: 1px solid dimgray;
  border-radius: 8px;
  padding: 10px 20px;
  margin: 3px;
  display: inline;
`


const CommentListItem = (props) => {

    const {comment} = props;


    return (
        <>
            <Comment>
                <p>댓글 id: <b>{comment.id}</b></p>
                {comment.content}
            </Comment>
        </>

    );

}

export default CommentListItem;
