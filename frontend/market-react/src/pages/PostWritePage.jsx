import React from "react";
import Button from "../ui/Button";
import {useNavigate} from "react-router-dom";
import TextInput from "../ui/TextInput";
const PostWritePage = () => {

    const navigate = useNavigate();


    return (
        <>
            <Button onClick={() => {
                navigate("/")
            }}
                    title="메인페이지로"
                    bg_color="#B39EFFFF"
            />

            <h1>Post Write Page - 글쓰기</h1>
            <TextInput />
        </>
    );
}
export default PostWritePage;