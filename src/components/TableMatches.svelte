<script>
    //TODO doplnit z DB
    export let matches = [
    ]
</script>

<div id="table-list">
    <table id="matches_table">
        <tr>
            <th>Liga:</th>
            <th>Začátek</th>
            <th>Domací</th>
            <th>Hosté</th>
            <th>Poznámka</th>
            <th></th>
            <th></th>
        </tr>
        {#each matches as match}
            <tr>
                <td id="header-td">
                    {match.header}
                </td>
                <td id="start-td">
                    {new Date(match.start).toLocaleTimeString(undefined, {
                        day:'2-digit',
                        month:'2-digit',
                        year:'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                    })}
                </td>
                <td id="homeTeam-td">
                    {match.teams.at(0).name}
                </td>
                <td id="awayTeam-td">
                    {match.teams.at(1).name}
                </td>
                <td id="note-td">
                    {match.note}
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
    #header-td, #start-td, #homeTeam-td, #awayTeam-td,
    #note-td {
        background-color: #ffffff;
        border: #333 1px solid;
        border-collapse: collapse;
    }
</style>