import { YouTube } from "@mui/icons-material";
import { Button, Tooltip } from "@mui/material";
import { TrackingTab } from "../../types/tracking-tab";

export function DummyTracking() {
    const dummyData: TrackingTab[] = [
        {
            windowId: 1,
            url: "https://www.youtube.com/watch?v=L2Wnq0ChAIA",
            title: "21313213123 - YouTube",
            favIconUrl: "https://www.youtube.com/s/desktop/286e6262/img/favicon_32x32.png",
            discarded: true
        },
        {
            windowId: 1,
            url: "https://www.youtube.com/feed/history",
            title: "(4) YouTube",
            favIconUrl: "https://www.youtube.com/s/desktop/edbfd7e1/img/favicon_32x32.png",
            discarded: false
        },
        {
            windowId: 1,
            url: "https://www.youtube.com/watch?v=k5i4sP9q2Lk",
            title: "qweqrfasdadafga - YouTube",
            favIconUrl: "https://www.youtube.com/s/desktop/321056ae/img/favicon_32x32.png",
            discarded: false
        }
    ];

    const toUiComponent = (tab: TrackingTab) => {
        return (
            <Tooltip title={tab.url}>
                {tab.discarded ? (
                    <Button variant="outlined" startIcon={<YouTube /> } color="error">{tab.title}</Button>
                ) : (
                    <Button variant="contained" startIcon={<YouTube />} color="error" disableElevation>{tab.title}</Button>
                )}
            </Tooltip>
        );
    }

    return (
        <div className="dummy-tracking">
            {dummyData.map(toUiComponent)}
        </div>
    )
}