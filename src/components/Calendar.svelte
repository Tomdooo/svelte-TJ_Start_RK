<script>
    import {createEventDispatcher} from "svelte"
    const dispatch = createEventDispatcher()

    export let month = 12;
    export let year = 2022;
    export let today = null; // Date
    export let offset = 0;

    export let labels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    export let events = []
    /*
    [
        {
            date: new Date("21-12-2022"),
            text: "Konec světa byl před 10 lety"
        },
        {
            date: new Date("21-12-2022"),
            text: "Konec světa byl před 10 lety"
        },
        {
            date: new Date("12-12-2022"),
            text: "Konec světa"
        }
    ]
    * */

    // Calendar
    $: calendarArray = makeCalendarArray(month, year, offset, events)

    function makeCalendarArray (month, year, offset, events) {
        let days = new Date(year, month, 0).getDate();  // number of days in month
        console.log("Days: " + days)
        console.log("Date: " + new Date(year, month))

        let first = new Date(year, month, 1 - days).getDay() - offset   // map first day in month to current offset
        if (first < 0) {
            first += 7;
        }

        let day = - first - days;   // calculate first day in calendar

        let whileTo = 0 // setup number of extra shown days in month for 'for' loop stop
        while((day - whileTo) % 7 !== 0) {
            whileTo += 1
        }

        const calendar = []     // initialize

        for (let i = day; i < whileTo; i += 1) {     // while : first calendar day to whileTo
            let date = new Date(year, month, i+1)
            calendar.push({
                date,
                events: events.filter(v => sameDay(v.date, date))
            })
        }

        return calendar;
    }

    // Labels
    $: reorderedLabels = reorderLabels(labels, offset);

    function reorderLabels(labels, offset) {
        let reorderedLabels = []
        for (let i = 0; i < 7; i++) {
            reorderedLabels.push(labels[indexWithOffset(i, offset, 7)])
        }
        return reorderedLabels
    }

    // Index with offset
    function indexWithOffset(index, offset, max) {
        if (index + offset < max) {
            return index + offset;
        }

        return index + offset - max;
    }

    // Compare if is same day
    function sameDay(d1, d2) {
        return d1.getFullYear() === d2.getFullYear() &&
                d1.getMonth() === d2.getMonth() &&
                d1.getDate() === d2.getDate();
    }

    $: console.log(calendarArray)
</script>


<div class="calendar">
    {#each reorderedLabels as label}
        <div class="cell">{label}</div>
    {/each}

    <!--{#each calendarArray as row}-->
    <!--    <div class="row">-->
    <!--        {#each row as cell}-->
    <!--            <div class="cell" style={cell.getDay() === 0? "background: #039be5" : ""} on:click={() => dispatch("day_click", {date: cell})}>{cell.getDate()}-->
    <!--                {#each events.filter(v => sameDay(v.date, cell)) as event}-->
    <!--                    <div>-->
    <!--                        {test(event)}-->
    <!--                    </div>-->
    <!--                {/each}-->
    <!--            </div>-->
    <!--        {/each}-->
    <!--    </div>-->
    <!--{/each}-->
    {#each calendarArray as cell}
        <div class="cell" style={cell.date.getDay() === 0? "background: #039be5" : ""} on:click={() => dispatch("day_click", {date: cell.date})}>
            {cell.date.getDate()}
            {#each cell.events as event}
                <div style="background: red">
                    {event.text}
                </div>
            {/each}
        </div>
    {/each}
</div>


<style>
    .calendar {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
        flex-direction: column;
        align-items: center;
        background: greenyellow;
        width: 100%;
    }

    .header {
        background: #212529;
        color: white;
    }

    .cell {
        width: calc(100% / 7);
        text-align: center;
    }

    .row {
        width: 100%;
        display: flex;
        flex-direction: row;
    }
</style>