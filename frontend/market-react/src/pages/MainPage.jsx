import React, {useState} from "react";
import styled from "styled-components";
import PostList from "../components/PostList";
import Button from "../ui/Button";
import {useNavigate} from "react-router-dom";
import PostListItemData from "../PostListItemData.json"


const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
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
  font-size: 55px;
  font-weight: 900;
  margin: 0;
  display: inline-block;
  background: linear-gradient(to right, #6198e5 0%, #f6a09e 90%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const ListContainer = styled.div`
  margin: 0 20px;
  border: 1px solid #000000;
  border-radius: 8px;
`;
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`
const TopBtnContainer = styled.div`
  display: inline-block;
`


console.log(PostListItemData);

function MainPage(props) {

    const navigate = useNavigate();

    const [isClickedY, setIsClickedY] = useState(false);
    const [isClickedS, setIsClickedS] = useState(false);


    const FilterYBtnState = () => {
        setIsClickedY(!isClickedY);
    }
    const FilterSBtnState = () => {
        setIsClickedS(!isClickedS);
    }


    return (
        <Wrapper>
            <Header>
                <MainTitleText>띵지마켓</MainTitleText>
                <TopBtnContainer>
                    <Button title="🔍" bg_color="#B6C0FFFF" topBtn/>
                    <Button title="☰" bg_color="#B6C0FFFF" topBtn/>
                </TopBtnContainer>
            </Header>

            <Container>
                <ButtonContainer>
                    <Button title="자연캠" bg_color="#B6C0FFFF" onClick={FilterYBtnState} state={isClickedY}/>
                    <Button title="인문캠" bg_color="#B6C0FFFF" onClick={FilterSBtnState} state={isClickedS}/>
                </ButtonContainer>

                <ListContainer>
                    <PostList
                        posts={PostListItemData}
                        onClickItem={(item) => {
                            navigate(`/post/${item.id}`);
                            console.log(item.id)
                        }}
                        stateY={isClickedY}
                        stateS={isClickedS}
                    />
                </ListContainer>

                <ButtonContainer>
                    <Button
                        onClick={() => {
                            navigate("/post-write")
                        }}
                        title="글쓰기"
                        bg_color="#93a1ff"
                    >
                        글쓰기
                    </Button>
                </ButtonContainer>
            </Container>
        </Wrapper>
    );
}

export default MainPage;