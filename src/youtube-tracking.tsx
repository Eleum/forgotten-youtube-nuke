import { useState } from "react";

export function YoutubeTracking() {
    const [url, seUrl] = useState("");

    return(
        <div className="youtube-tracking">
            <p>hehe I'm the YoutubeTracking component</p>
        </div>
    );
}