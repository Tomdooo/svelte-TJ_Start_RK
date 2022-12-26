<script>
    //TODO doplnit z DB
    let trainings = [
        {
            start: "3923-01-10T14:00:00.000+00:00",
            end: "3923-01-10T14:45:00.000+00:00",
            header: "1.",
            note: "",
            track: 1,
            member: {
                id: 3 //TODO vyhledat member podle id
            },
            team: null
        },
        {
            start: "3923-01-11T14:00:00.000+00:00",
            end: "3923-01-11T14:45:00.000+00:00",
            header: "2.",
            note: "",
            track: 2,
            member: null,
            team: {
                id: 1 //TODO vyhledat team podle id
            }
        }
    ]
</script>

<div id="table-list">
    <table id="trainings_table">
        <tr>
            <th>Záčátek</th>
            <th>Konec</th>
            <th>Typ tréningu</th>
            <th>Dráha</th>
            <th>Poznámka</th>
            <th>Člen/Team</th>
            <th></th>
            <th></th>
        </tr>
        {#each trainings as training}
            <tr>
                <td id="start-td">
                    {training.start}
                </td>
                <td id="end-td">
                    {training.end}
                </td>
                <td id="header-td">
                    {training.header}
                </td>
                <td id="track-td">
                    {training.track}
                </td>
                <td id="note-td">
                    {training.note}
                </td>
                <td id="memberOrTeam-td">
                    {#if training.member === null}
                        {training.team.id}
                    {:else}
                        {training.member.id}
                    {/if}
                </td>
                <td id="update_table">
                    Upravit
                    <!--  TODO  <a id="update_table" href="/{{this.id}}/update">Upravit</a>-->
                </td>
                <td id="delete-table">
                    Odstranit
                    <!--  TODO  <a id="delete-table" href="/{{this.id}}/delete">Odstranit</a>-->
                </td>
            </tr>
        {/each}
    </table>
</div>
<style>
    #start-td, #end-td, #header-td, #track-td,
    #note-td, #memberOrTeam-td {
        background-color: #ffffff;
        border: #333 1px solid;
        border-collapse: collapse;
    }
</style>