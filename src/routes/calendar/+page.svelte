<script>
    // import "$lib/css/calendar.min.css"
    // import "$lib/js/calendar.min.js"
    // import Calendar from '@event-calendar/core';
    // import TimeGrid from '@event-calendar/time-grid';
    // import DayGrid from '@event-calendar/day-grid';
    // import List from '@event-calendar/list';
    // import ResourceTimeGrid from '@event-calendar/resource-time-grid';
    // import Interaction from '@event-calendar/interaction';
    //
    // let plugins = [TimeGrid, DayGrid, List, ResourceTimeGrid, Interaction];
    // let options = {
    //     view: 'timeGridWeek'
    // };
    //
    // function updateOptions() {
    //     options.slotDuration = '01:00';
    // }


import Calendar from "../../components/Calendar.svelte";
</script>


<div>
<!--    <Calendar {plugins} {options} />-->
<!--    <button on:click={updateOptions}>Change slot duration</button>-->
    <Calendar/>
</div>


<style>

</style>