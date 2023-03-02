import React, {useState} from "react";
import Button from "../ui/Button";
import {useNavigate} from "react-router-dom";
import TextInput from "../ui/TextInput";
import styled, {css} from "styled-components";
import {ButtonContainer} from "./MainPage";


const DivBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
`
const CheckBoxContainer = styled.div`
  width: 30%;
  border: 2px solid black;
  border-radius: 8px;
  padding: 10px;
  margin-right: 3%;
  font-size: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`
const CheckBox = styled.input`
  zoom: 2;
  cursor: pointer;
`

const InputBox = styled.div`
  ${(props) =>
          `width: ${props.width};`
  };
  white-space: pre-wrap;
  padding: 10px;
  border: 2px solid black;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f2f2f5;
  margin: 1%;
`
const ImgBox = styled.img.attrs(props => ({
    src: `https://cdn-icons-png.flaticon.com/512/685/685655.png`,
    accept: "image/jpg, image/png, image/jpeg",
}))`;
  width: 100%;
  height: 100%;
  background-size: contain;
  position: center;
`
const InputFile = styled.input`
  display: none;
`
const Label = styled.label`
  cursor: pointer;
`
const FileText = styled.p`
  margin: 0;
  font-weight: bold;
  font-size: 20px;
`
const FileName = styled.p`
  font-size: 18px;
  //text-align: center;
  margin: 0;
`

const TextBoxes = styled.form`
  margin: 5% 0;
`


const PostWritePage = () => {

    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [location, setLocation] = useState("");
    const [content, setContent] = useState("");
    const [fileName, setFileName] = useState("선택된 파일 없음");

    const onChange = (event) => {
        let fileNames = "";
        for (let i = 0; i < event.target.files.length; i++) {
            if (i !== event.target.files.length-1){
                fileNames += event.target.files[i].name + ', \n';
            }else fileNames += event.target.files[i].name;
        }
        setFileName(fileNames)
    }

    console.log(fileName) //파일 이름


    return (
        <>
            <Button onClick={() => {
                navigate("/")
            }}
                    title="메인페이지로"
                    bg_color="#B39EFFFF"
            />

            <DivBox>
                <InputBox width="70px" >
                    <Label htmlFor="input"><ImgBox/></Label>
                    <FileText>파일선택</FileText>
                    <InputFile onChange={onChange} type="file" id="input" multiple/>
                </InputBox>

                <CheckBoxContainer>
                    <Label htmlFor="Y"><CheckBox type="checkbox" id="Y"></CheckBox>자연 캠퍼스</Label>
                    <Label htmlFor="S"><CheckBox type="checkbox" id="S"></CheckBox>인문 캠퍼스</Label>
                </CheckBoxContainer>
            </DivBox>


            <InputBox width="90%">
                <FileName>{fileName}</FileName>
            </InputBox>

            <TextBoxes>
                <TextInput
                    value={title}
                    onChange={(event) =>
                        setTitle(event.target.value)
                    }
                    height="40px" c
                    placeholder="제목"
                />
                <TextInput
                    value={price}
                    onChange={(event) =>
                        setPrice(event.target.value)
                    }
                    height="40px" c
                    placeholder="가격"
                />
                <TextInput
                    value={location}
                    onChange={(event) =>
                        setLocation(event.target.value)
                    }
                    height="40px" c
                    placeholder="위치"
                />
                <TextInput
                    value={content}
                    onChange={(event) =>
                        setContent(event.target.value)
                    }
                    height="300px"
                    placeholder="내용"
                />
            </TextBoxes>

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
        </>
    );
}
export default PostWritePage;