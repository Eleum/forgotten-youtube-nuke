import { TrackingTab } from "../types/tracking-tab";
import { TrackingTabDataModel } from "../types/tracking-tab-data-model";

const UNDEFINED_TAB_ID = "UNDEFINED-TAB-ID";
const SESSION_STORAGE_KEY = "SESSION-TABS";

export function storeTabsData(...tabs: TrackingTab[]) {
    const generateId = (tab: TrackingTab) => {
        return `${tab.windowId}.${tab.id ?? UNDEFINED_TAB_ID}`;
    };

    const now = Date.now();

    let models = tabs.map(tab => ({
        id: generateId(tab),
        openedDateTimestamp: now
    }) as TrackingTabDataModel);

    return chrome.storage.session.set({
        [SESSION_STORAGE_KEY]: models
    }).then(() => {
        console.log("Value is set");
    }).catch(reason => {
        console.error(`Error setting session's tab data: ${reason}`);
    });
}

export default {};
