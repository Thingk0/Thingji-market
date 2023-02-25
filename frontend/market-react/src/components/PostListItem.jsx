import React from "react";
import styled from "styled-components";


const ItemDiv = styled.div`
  width: 80%;
  margin: 5%;
  padding: 10px 20px;
  border: solid 1px black;
  border-radius: 8px;
  cursor: pointer;

  :hover {
    background: lightgray;
  }

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const ImgBox = styled.img.attrs({
    src: `https://cdn-icons-png.flaticon.com/512/2438/2438159.png`
})`;
  border: 1px solid grey;
  border-radius: 8px;
  padding: 5px;
  width: 100px;
  height: 100px;
  margin: 5px 20px 5px 0;
`
const Title = styled.p`
  font-weight: bold;
  margin: 15px 0;
`

const TextContainer = styled.div`
  width: 65%;
`

const ItemStatus = styled.p`
  margin: 0;
  ${(props) =>
          props.color &&
          `color: ${props.color};
      `}
`

const PriceHeart = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 3% 0;
  font-weight: bold;
  font-size: 18px;
`


const PostListItem = (props) => {

    const {post, onClick} = props;
    const campus = post.campus === "YONGIN" ? "용인캠" : "서울캠";
    const itemStatus = post.itemStatus === "SALE" ? "판매중" : "판매 완료";
    const itemColor = itemStatus === "판매중" ? "green" : "tomato";


    return (
        <>
            <ItemDiv onClick={onClick}>
                <ImgBox/>
                    <TextContainer>
                        <Title>{post.itemName}</Title>
                        <ItemStatus color={itemColor}>{itemStatus}</ItemStatus>
                        <div>{campus} {post.location}</div>
                        <PriceHeart>
                            <div>{post.price}원</div>
                            <div>❤️ {post.like}</div>
                        </PriceHeart>

                    </TextContainer>
            </ItemDiv>
        </>
    );
}

export default PostListItem;