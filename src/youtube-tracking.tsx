import { useEffect, useState } from "react";
import { TrackingTabData } from "./types/tracking-tab-data";

export function YoutubeTracking() {
    const UNDEFINED_TAB = "UNDEFINED TAB";

    const [tabs, setTabs] = useState<TrackingTabData[]>([]);

    useEffect(() => {
        const getTabsByQuery = async (query: chrome.tabs.QueryInfo) => {
            let tabs = await chrome.tabs.query(query);

            console.log(tabs);

            setTabs(tabs.map(tab => ({
                favIconUrl: tab.favIconUrl,
                url: tab.url,
                title: tab.title ?? UNDEFINED_TAB
            }) as TrackingTabData));
        }

        let query: chrome.tabs.QueryInfo = {
            currentWindow: true
        };

        getTabsByQuery(query);
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