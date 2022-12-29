<script>
    //TODO doplnit z DB
    export let teams = [

    ]
</script>
<div id="table-list">
    <table id="teams-table">
        <tr>
            <th>Jméno</th>
            <th></th>
            <th></th>
        </tr>
        {#each teams as team}
            <tr>
                <td id="name-td">
                    {team.name}
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
    #name-td {
        background-color: #ffffff;
        border: #333 1px solid;
        border-collapse: collapse;
    }
</style>