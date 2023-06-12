import { useEffect, useState } from "react";
import { getTabsByQuery } from "../../services/tabs-api-service";
import { TrackingTab } from "../../types/tracking-tab";
import { storeTabsData } from "../../services/storage-service";

export function YoutubeTracking() {
    const youtubeRegex = /^(?:https?:\/\/)?(?:www\.)?(?:m\.)?(?:youtu\.be\/|youtube\.com\/)/;

    const [tabs, setTabs] = useState<TrackingTab[]>([]);

    useEffect(() => {
        const initializeTabs = async (query: chrome.tabs.QueryInfo) => {
            let tabs = await getTabsByQuery(query);
            console.log(tabs);

            tabs = tabs.filter(tab => tab.url?.match(youtubeRegex));

            setTabs(tabs);
            storeTabsData(...tabs);
        };

        let query: chrome.tabs.QueryInfo = { /*get any tabs*/ };

        initializeTabs(query);
    }, []);

    useEffect(() => {
        const updateBadge = async () => {
            let text = tabs.length.toString();
            console.log(text);

            let actions = [
                chrome.action.setBadgeText({
                    text: text
                }),
                chrome.action.setBadgeBackgroundColor({
                    color: "#5c5c5c"
                })
            ]

            await Promise.all(actions);
        }

        updateBadge();
    }, [tabs]);

    //TODO: move into separate module?
    const toTabComponent = (tab: TrackingTab) => {
        return (
            <li>
                <img src={tab.favIconUrl} style={{ height: 16, width: 16 }}></img>
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