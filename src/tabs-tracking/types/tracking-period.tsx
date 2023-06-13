import { TrackingTab } from "./tracking-tab";

export interface TrackingPeriod {
    from: Date | undefined,
    items: TrackingTab[]
}