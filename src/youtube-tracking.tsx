import { useEffect, useState } from "react";

export function YoutubeTracking() {
    const MISSING_PERMISSION_TAB = "Extension is missing \"tab\" permission";
    const UNDEFINED_TAB = "UNDEFINED TAB";

    const [urls, setUrls] = useState<string[]>([]);

    useEffect(() => {
        const getTabsByQuery = async (query: chrome.tabs.QueryInfo) => {
            if (!chrome.tabs) {
                console.error(MISSING_PERMISSION_TAB);
                return;
            }

            let tabs = await chrome.tabs.query(query);

            console.log(tabs);

            setUrls(tabs.map(tab => tab.url ?? UNDEFINED_TAB));
        }

        let query : chrome.tabs.QueryInfo = {
            currentWindow: true
        };

        getTabsByQuery(query);
    }, []);

    const toUrlComponent = (url: string) => {
        return(
            <li>{url}</li>
        );
    }

    return(
        <div className="youtube-tracking">
            <h2>YOUTUBE TRACKING AREA</h2>
            <ul>{urls.map(toUrlComponent)}</ul>
        </div>
    );
}