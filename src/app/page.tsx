"use client";

import LogIn from "./log-in";
import { useAppSelector } from "@/redux/store";

export default function Home() {
    const userName = useAppSelector((state) => state.authReducer.value.username);
    return (
        <main>
            <LogIn />

            <h1>Usernam: {userName}</h1>
        </main>
    );
}
