import React from "react";
import {useNavigate, useParams} from "react-router-dom";
import Button from "../ui/Button";
import data from "../PostListItemData.json"
import styled from "styled-components";
import CommentList from "../components/CommentList";

const ImgDiv = styled.div`
  width: calc(100% - 32px);
  height: 50px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid grey;
  border-radius: 8px;
  text-align: center;
`;
const PostContent = styled.p`
  width: calc(100% - 32px);
  padding: 16px;
  display: flex;
  border: 1px solid grey;
  border-radius: 8px;
`;
const Heart = styled.p`
  margin-left: 87%;
  font-size: 25px;
`;
const StatusContainer = styled.div`
  display: flex;
  flex-direction: row;
`
const ItemStatus = styled.div`
  margin: 0 8px;
  font-weight: bold;
  ${(props) =>
    props.color &&
    `color: ${props.color};
      `}
`
const PostViewPage = () => {
    const { postId } = useParams();
    const navigate = useNavigate();

    const post = data.find((item) => {
        return item.id == postId;
    }); //useParams로 가져온 postId와 일치하는 id를 가진 post 객체 가져옴

    console.log(post)

    const campus = post.campus === "YONGIN" ? "용인캠" : "서울캠";
    const itemStatus = post.itemStatus === "SALE" ? "판매중" : "판매 완료";
    const itemColor = itemStatus === "판매중" ? "green" : "tomato";


    return (
        <>
            <Button
                title="메인페이지로"
                onClick={() => {
                    navigate("/")
                }}
                bg_color="#B39EFFFF"
            />
            <ImgDiv>사진</ImgDiv>
            <Heart>❤️{post.like}</Heart>

            <h2>{post.itemName}</h2>
            <b>가격: {post.price}</b>
            <p>위치: {campus}퍼스 {post.location}</p>

            <StatusContainer>
                <div>판매 상태:</div>
                <ItemStatus color={itemColor}>{itemStatus}</ItemStatus>
            </StatusContainer>

            <hr />
            <PostContent>글 내용 : {post.content}</PostContent>
            <hr />
            <p>댓글</p>

            <CommentList comments={post.comments}/>
        </>
    );
}


export default PostViewPage;