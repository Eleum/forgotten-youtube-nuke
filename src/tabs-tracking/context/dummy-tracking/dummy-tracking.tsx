import { TrackingTab, TrackingTabWithDate } from "../../types/tracking-tab";
import { TrackingPeriod } from "../../types/tracking-period";
import { addDays, addMonths, addWeeks, minTime, setDay, startOfMonth, startOfToday, startOfWeek } from "date-fns";
import { toPeriodComponent } from "../../services/components-service";

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

    const today = new Date();
    const thisWeek = addDays(today, -3);
    const lastWeek = addWeeks(today, -1);
    const twoWeeksAndMore1 = setDay(addWeeks(today, -2), 1);
    const twoWeeksAndMore2 = setDay(addWeeks(today, -2), 3);
    const month = addDays(addWeeks(addMonths(today, -1), -1), -2);
    const other = addDays(addWeeks(addMonths(today, -2), -2), -4);

    const dates = [today, thisWeek, lastWeek, twoWeeksAndMore1, twoWeeksAndMore2, month, other];

    let data = Array
        .from(Array(10), (x, i) => i + 1)
        .map(() => ({
            id: crypto.randomUUID(),
            date: dates[~~(Math.random() * (6 - 0 + 1) + 0)],
            ...dummyData[~~(Math.random() * (2 - 0 + 1) + 0)]
        }) as TrackingTabWithDate);

    const fromToday = startOfToday();
    const fromThisWeek = startOfWeek(fromToday);
    const fromLastWeek = startOfWeek(addWeeks(fromToday, -1));
    const fromTwoWeeks = startOfWeek(addWeeks(fromToday, -2));
    const fromThisMonth = startOfMonth(addMonths(fromToday, -1));

    const periods = [
        [fromToday, "today"],
        [fromThisWeek, "this week"],
        [fromLastWeek, "last week"],
        [fromTwoWeeks, "two weeks ago"],
        [fromThisMonth, "this month"],
        [undefined, "other"]
    ].map(period => ({
        title: period[1],
        from: period[0],
        items: []
    }) as TrackingPeriod);

    AssignTabsToPeriods(data, periods);

    return (
        <div className="content-tracking" id="dummy-tracking">
            <h2 className="content-tracking-title">DUMMY</h2>
            <div className="periods-content">
                {periods.map(toPeriodComponent)}
            </div>
        </div>
    );
}

function AssignTabsToPeriods(tabs: TrackingTabWithDate[], periods: TrackingPeriod[]) {
    tabs.forEach(tab => {
        let assigned = false;

        for (let i = 0; i < periods.length; i++) {
            if (tab.date >= (periods[i].from ?? minTime)) {
                periods[i].items.push(tab);
                assigned = true;
                break;
            }
        }

        if (assigned) return;

        console.error(`Unable to assign the tab ${tab.id} to a period`);
    });
}
