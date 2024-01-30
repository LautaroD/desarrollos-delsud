"use client";

import React from "react";
import gif_nosotros from "../../../public/images/gif_nosotros";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

export const Gif = () => {
    return (
        <Player autoplay src={gif_nosotros} keepLastFrame={true}>
            <Controls visible={false} />
        </Player>
    );
};
