"use client";
import React, { useEffect } from "react";

export default function ErrorPage({ error }: { error: Error }) {
    useEffect(() => {
        console.error(`${error}`);
    }, [error]);

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="text-center text-red-500">
                Error user fetch data
            </div>
        </div>
    )
}


