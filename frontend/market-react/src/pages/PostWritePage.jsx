import React from "react";
import Button from "../ui/Button";
import {useNavigate} from "react-router-dom";

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

            <h1>Post Write Page</h1>
        </>
    );
}
export default PostWritePage;