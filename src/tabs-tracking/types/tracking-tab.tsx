export interface TrackingTab {
    id?: number;
    windowId: number;
    url: string;
    title?: string;
    favIconUrl?: string;
    discarded: boolean;
}

export interface TrackingTabWithDate extends TrackingTab {
    date: Date
}