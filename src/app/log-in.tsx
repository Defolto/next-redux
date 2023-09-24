"use client";

import { useState } from "react";
import { logIn, logOut } from "@/redux/features/auth-slice";
import { useDispatch } from "react-redux/es/exports";
import { AppDispatch } from "@/redux/store";

export default function LogIn() {
    const [userName, setUserName] = useState("");

    const dispatch = useDispatch<AppDispatch>();

    const onClickLogIn = () => {
        dispatch(logIn(userName));
    };
    const onClickToggle = () => {};
    const onClickLogOut = () => {
        dispatch(logOut());
    };

    return (
        <div>
            <input
                type="text"
                onChange={(e) => {
                    setUserName(e.target.value);
                }}
            />
            <br />
            <button onClick={onClickLogIn}>Log In</button>
            <br />
            <button onClick={onClickLogOut}>Log Out</button>
            <br />
            <button>Toggle Moderator Status</button>
        </div>
    );
}
