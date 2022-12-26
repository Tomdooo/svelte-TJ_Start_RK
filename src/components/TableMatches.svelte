<script>
    //TODO doplnit z DB
    let matches = [
        {
            header: "aaaaaaaaaaa",
            note: "bbbbbbbbb",
            start: "2022-12-26T10:06:41.000+00:00",
            teams: [
                {
                    id: 1 //TODO vyhledat team podle id
                },
                {
                    id: 2//TODO vyhledat team podle id
                }
            ]
        }
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
                    {match.start}
                </td>
                <td id="homeTeam-td">
                    {match.teams.at(0).id}
                </td>
                <td id="awayTeam-td">
                    {match.teams.at(1).id}
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