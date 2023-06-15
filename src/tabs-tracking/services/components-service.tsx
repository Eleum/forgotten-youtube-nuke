import { ExpandMore, YouTube } from "@mui/icons-material";
import { Accordion, AccordionSummary, Typography, AccordionDetails, Button, Tooltip } from "@mui/material";
import { TrackingPeriod } from "../types/tracking-period";
import { TrackingTab } from "../types/tracking-tab";

export function toPeriodComponent(period: TrackingPeriod) {
    const discarded = period.items.filter(item => item.discarded);

    return (
        <div key={period.title}>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMore />} disabled={period.items.length == 0}>
                    <Typography variant="subtitle2">
                        {`${period.title.toUpperCase()} `}
                        {discarded.length == 0 ? "" : `(${discarded.length})`}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div className="period-details">
                        {period.items.map(toTabComponent)}
                    </div>
                </AccordionDetails>
            </Accordion>
        </div>
    );
};

function toTabComponent(tab: TrackingTab) {
    return (
        <Tooltip key={tab.id} title={tab.url}>
            {tab.discarded ? (
                <Button variant="outlined" startIcon={<YouTube />} color="error">{tab.title}</Button>
            ) : (
                <Button variant="contained" startIcon={<YouTube />} color="error" disableElevation>{tab.title}</Button>
            )}
        </Tooltip>
    );
}