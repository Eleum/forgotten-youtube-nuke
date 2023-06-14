import { TrackingTab } from "./tracking-tab";

export interface TrackingPeriod {
    title: string,
    from: Date | undefined,
    items: TrackingTab[]
}