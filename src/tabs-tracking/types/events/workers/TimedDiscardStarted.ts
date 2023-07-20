import ApplicationEvent from "../application-event";

export default class TimedDiscardStarted implements ApplicationEvent {
    nextDiscardAt : Date

    constructor(nextDiscardAt: Date) {
        this.nextDiscardAt = nextDiscardAt;
    }
}