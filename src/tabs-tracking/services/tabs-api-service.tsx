import { TrackingTabData } from "../types/tracking-tab-data";

const UNDEFINED_TAB = "UNDEFINED TAB";

export async function getTabsByQuery(query: chrome.tabs.QueryInfo) : Promise<TrackingTabData[]> {
    let tabs = await chrome.tabs.query(query);
    console.log(tabs);

    return tabs.map(tab => ({
        favIconUrl: tab.favIconUrl,
        url: tab.url,
        title: tab.title ?? UNDEFINED_TAB
    }) as TrackingTabData);
};

export default {};