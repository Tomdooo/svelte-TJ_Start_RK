<script>
    export let month = 12;
    export let year = 2022;
    export let today = null; // Date
    export let offset = 0;

    export let labels = ['Neděle', 'Pondělí', 'Úterý', 'Středa', 'Čtvrtek', 'Pátek', 'Sobota'];
    export let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    $: calendarArray = makeCalendarArray(month, year, today, offset)

    function makeCalendarArray (month, year, today, offset) {
        let days = new Date(year, month, 0).getDate();

        let first = new Date(year, month, 1 - (offset || 0)).getDay();

        for (let dayInWeek = 0; dayInWeek < 7; dayInWeek++) {
            while (dayInWeek < first) {

            }
        }

        return;
    }
</script>


<div class="calendar">
    <div class="header row">
        {#each labels as label}
            <div class="cell">{label}</div>
        {/each}
    </div>
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

    }

    .row {
        width: 100%;
        display: flex;
        flex-direction: row;
    }
</style>