<script>
    import Calendar from "../../components/Calendar.svelte";

    let date = new Date()

    function handleDayClick(e) {
        console.log(e.detail)
    }
</script>


<div>
<!--    <Calendar {plugins} {options} />-->
<!--    <button on:click={updateOptions}>Change slot duration</button>-->
    <Calendar
        month={date.getMonth()+1}
        year={date.getFullYear()}
        today={date}
        offset={1}
        labels={["Ne", "Po", "Út", "St", "Čt", "Pá", "So"]}
        on:day_click={handleDayClick}
        events={
            [
                {
                    date: new Date("21-11-2022"),
                    text: "Konec světa byl před 10 lety"
                },
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
        }
    />
</div>


<style>

</style>