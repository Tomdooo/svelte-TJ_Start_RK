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
                    date: new Date(2022, 12, -5),
                    text: "Konec světa byl před 10 lety Konec světa byl před 10 lety",
                    color: "#123456"
                },
                {
                    date: new Date(2022, 12, -14),
                    text: "Konec světa byl před 10 lety"
                },
                {
                    date: new Date(2022, 12, -20),
                    text: "Konec světa byl před 10 lety"
                },
                {
                    date: new Date(2022, 12, -20),
                    text: "Konec světa"
                }
            ]
        }
    />
</div>


<style>

</style>