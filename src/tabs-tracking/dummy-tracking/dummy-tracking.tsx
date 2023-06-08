import { YouTube } from "@mui/icons-material";
import { Button, Tooltip } from "@mui/material";
import { TrackingTabData } from "../types/tracking-tab-data";

export function DummyTracking() {
    const dummyData: TrackingTabData[] = [
        {
            favIconUrl: "https://www.youtube.com/s/desktop/286e6262/img/favicon_32x32.png",
            title: "21313213123 - YouTube",
            url: "https://www.youtube.com/watch?v=L2Wnq0ChAIA",
            discarded: true
        },
        {
            favIconUrl: "https://www.youtube.com/s/desktop/edbfd7e1/img/favicon_32x32.png",
            title: "(4) YouTube",
            url: "https://www.youtube.com/feed/history",
            discarded: false
        },
        {
            favIconUrl: "https://www.youtube.com/s/desktop/321056ae/img/favicon_32x32.png",
            title: "qweqrfasdadafga - YouTube",
            url: "https://www.youtube.com/watch?v=k5i4sP9q2Lk",
            discarded: false
        }
    ];

    const toUiComponent = (tab: TrackingTabData) => {
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