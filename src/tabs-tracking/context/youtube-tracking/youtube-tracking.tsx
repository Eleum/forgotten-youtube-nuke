import { useEffect, useState } from "react";
import { getTabsByQuery } from "../../services/tabs-service";
import { TrackingTab } from "../../types/tracking-tab";
import { storeTabsData } from "../../services/storage-service";
import { toTabComponent } from "../../services/components-service";

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

    return (
        <div className="content-tracking" id="youtube-tracking">
            <h2 className="content-tracking-title">YOUTUBE TRACKING AREA</h2>
            <div className="periods-content">
                {tabs.map(toTabComponent)}
            </div>
        </div>
    );
}