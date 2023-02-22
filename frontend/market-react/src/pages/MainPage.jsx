import React from "react";
import styled from "styled-components";
import PostList from "../components/PostList";
import Button from "../ui/Button";
import {useNavigate} from "react-router-dom";
import PostListItemData from "../PostListItemData.json"

const Wrapper = styled.div`
  padding: 16px;
  width: calc(100% - 32px);
  border: solid 1px black;
`;

const Container = styled.div`
  width: 100%;
  border: solid 1px #000000;
`;

const MainTitleText = styled.p`
  font-size: 40px;
  font-weight: bold;
`;

const ListContainer = styled.div`
  padding: 8px 16px;
  border: 1px solid #000000;
  border-radius: 8px;
`;

console.log(PostListItemData);

function MainPage(props) {

    const navigate = useNavigate();


    return (
        <Wrapper>
            <MainTitleText>띵지마켓
                <Button title="🔍" bg_color="lightblue"/>
                <Button title="메뉴" bg_color="lightblue"/>
            </MainTitleText>

            <Container>
                <Button title="자연캠" bg_color="#B6C0FFFF"/>
                <Button title="인문캠" bg_color="#B6C0FFFF"/>

                <ListContainer>
                    <PostList
                        posts={PostListItemData}
                        onClickItem={(item) => {
                            navigate(`/post/${item.id}`);
                            console.log(item.id)
                        }}
                    />
                </ListContainer>

                <Button
                    onClick={() => {
                    navigate("/post-write")
                    }}
                    title="글쓰기"
                    bg_color="#93a1ff"
                >
                    글쓰기
                </Button>

            </Container>
        </Wrapper>
    );
}

export default MainPage;