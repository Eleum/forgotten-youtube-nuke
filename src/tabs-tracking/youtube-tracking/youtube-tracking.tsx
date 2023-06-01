import { useEffect, useState } from "react";
import { getTabsByQuery } from "../services/tabs-api-service";
import { TrackingTabData } from "../types/tracking-tab-data";

export function YoutubeTracking() {
    const youtubeRegex = /^(?:https?:\/\/)?(?:www\.)?(?:m\.)?(?:youtu\.be\/|youtube\.com\/)/;

    const [tabs, setTabs] = useState<TrackingTabData[]>([]);

    useEffect(() => {
        const populateTabsData = async (query: chrome.tabs.QueryInfo) => {
            let tabs = await getTabsByQuery(query);
            console.log(tabs);

            tabs.forEach(tab => {
                if (!tab.url?.match(youtubeRegex)) {
                    tab.title = "UNMATCHED | " + tab.title;
                }
            });

            setTabs(tabs);
        };

        let query: chrome.tabs.QueryInfo = { /*get any tabs*/ };

        populateTabsData(query);
    }, []);

    const toTabComponent = (tab: TrackingTabData) => {
        return (
            <li>
                <img src={tab.favIconUrl} style={{height: 16, width: 16}}></img>
                {tab.title} | {tab.url}
            </li>
        );
    }

    return (
        <div className="youtube-tracking">
            <h2>YOUTUBE TRACKING AREA</h2>
            <ul>{tabs.map(toTabComponent)}</ul>
        </div>
    );
}