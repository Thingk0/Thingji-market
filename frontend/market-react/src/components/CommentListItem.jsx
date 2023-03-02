import React from "react";
import styled from "styled-components";
const Comment = styled.div`
  width: calc(98% - 32px);
  border: 1px solid dimgray;
  border-radius: 8px;
  padding: 10px 20px;
  margin: 3px;
  display: flex;
  flex-direction: row;
  align-items: center;
`

const ImgBox = styled.img.attrs({
    src: `https://cdn-icons-png.flaticon.com/512/848/848006.png`
})`
  width: 50px;
  height: 50px;
`

const TextContainer = styled.div`
  width: 80%;
  padding: 5px 10px;
`
const Content = styled.p`
  margin: 0;
  padding-left: 10px;
`
const ID = styled.p`
  margin: 7px;
  font-weight: bold;
`




const CommentListItem = (props) => {

    const {comment} = props;


    return (
        <>
            <Comment>
                <ImgBox />
                <TextContainer>
                    <ID>id: <b>{comment.id}</b></ID>
                    <Content>{comment.content}</Content>
                </TextContainer>
            </Comment>
        </>

    );

}

export default CommentListItem;
