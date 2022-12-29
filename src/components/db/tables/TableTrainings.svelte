<script>
    //TODO doplnit z DB
    export let trainings = [
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
                    {new Date(training.start).toLocaleTimeString(undefined, {
                        day:'2-digit',
                        month:'2-digit',
                        year:'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                    })}
                </td>
                <td id="end-td">
                    {new Date(training.end).toLocaleTimeString(undefined, {
                        day:'2-digit',
                        month:'2-digit',
                        year:'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                    })}
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
                        {training.team.name}
                    {:else}
                        {training.member.firstName} {training.member.lastName}
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