<script>
    import {createEventDispatcher} from "svelte"
    const dispatch = createEventDispatcher()

    export let month = 11;
    export let year = 2022;
    export let today = null; // Date
    export let offset = 2;

    export let labels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    // Calendar
    $: calendarArray = makeCalendarArray(month, year, offset)

    function makeCalendarArray (month, year, offset) {
        let days = new Date(year, month, 0).getDate();  // number of days in month

        let first = new Date(year, month, 1 - days).getDay() - offset   // map first day in month to current offset
        if (first < 0) {
            first += 7;
        }

        let day = - first - days;   // calculate first day in calendar

        let whileTo = 0 // setup number of weeks in month for while stop
        if (days%7 !== 0) {
            whileTo = 7
        }

        const calendar = []     // initialize
        let week = []

        while (day < whileTo) {     // while : first calendar day to whileTo
            week.push(new Date(year, month, day+1))

            if (week.length === 7) {    // cut off week
                calendar.push(week)
                week = []
            }

            day++
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
</script>


<div class="calendar">
    <div class="header row">
        {#each reorderedLabels as label}
            <div class="cell">{label}</div>
        {/each}
    </div>

    {#each calendarArray as row}
        <div class="row">
            {#each row as cell}
                <div class="cell" style={cell.getDay() === 0? "background: #039be5" : ""} on:click={() => dispatch("day_click", {date: cell})}>{cell.getDate()}</div>
            {/each}
        </div>
    {/each}
</div>


<style>
    .calendar {
        display: flex;
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