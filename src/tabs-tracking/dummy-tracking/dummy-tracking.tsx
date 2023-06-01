import { YouTube } from "@mui/icons-material";
import { Button, Tooltip } from "@mui/material";
import { TrackingTabData } from "../types/tracking-tab-data";

export function DummyTracking() {
    const dummyData: TrackingTabData[] = [
        {
            favIconUrl: "https://www.youtube.com/s/desktop/286e6262/img/favicon_32x32.png",
            title: "(2) Vertical Slice Architecture, not Layers! - YouTube",
            url: "https://www.youtube.com/watch?v=L2Wnq0ChAIA"
        },
        {
            favIconUrl: "https://www.youtube.com/s/desktop/edbfd7e1/img/favicon_32x32.png",
            title: "(4) YouTube",
            url: "https://www.youtube.com/feed/history"
        },
        {
            favIconUrl: "https://www.youtube.com/s/desktop/321056ae/img/favicon_32x32.png",
            title: "Introduction to Context Mapping - Michael Plöd - DDD Europe 2022 - YouTube",
            url: "https://www.youtube.com/watch?v=k5i4sP9q2Lk"
        }
    ];

    const toUiComponent = (tab: TrackingTabData) => {
        return (
            <Tooltip title={tab.url}>
                <Button variant="contained" startIcon={<YouTube />} color="error" disableElevation>{tab.title}</Button>
            </Tooltip>
        );
    }

    return (
        <div className="dummy-tracking">
            {dummyData.map(toUiComponent)}
        </div>
    )
}