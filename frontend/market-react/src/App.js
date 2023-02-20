import React from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import MainPage from "./pages/MainPage";
import PostWritePage from "./pages/PostWritePage";


function App() {
    return (
            <BrowserRouter>
                <Routes>
                    <Route index element={<MainPage />} />
                    <Route path="post-write" element={<PostWritePage />} />
                </Routes>
            </BrowserRouter>
    );
}

export default App;