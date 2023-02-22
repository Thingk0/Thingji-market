import React from "react";
import {useNavigate, useParams} from "react-router-dom";
import Button from "../ui/Button";

const PostViewPage = () => {

    const { postId } = useParams();
    const navigate = useNavigate();

    return (
        <>
            <Button
                title="메인페이지로"
                onClick={() => {
                    navigate("/")
                }}
                bg_color="#B39EFFFF"
            />


            <h1>Post View Page - 상세페이지</h1>
            <h2>글 id : {postId}</h2>
        </>


    )
}

export default PostViewPage