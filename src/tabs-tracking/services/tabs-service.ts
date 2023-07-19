import { TrackingTab } from "../types/tracking-tab";

const UNDEFINED_TAB = "UNDEFINED";
const UNLOADED_TAB_STATUS = "unloaded";

export async function getTabsByQuery(query: chrome.tabs.QueryInfo) {
    let tabs = await chrome.tabs.query(query);
    console.log(tabs);

    return tabs.map(tab => ({
        id: tab.id,
        windowId: tab.windowId,
        url: tab.url,
        title: tab.title ?? UNDEFINED_TAB,
        favIconUrl: tab.favIconUrl,
        discarded: tab.discarded || tab.status == UNLOADED_TAB_STATUS
    }) as TrackingTab);
};
