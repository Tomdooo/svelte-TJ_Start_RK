<script>
    import {modal, user} from "../../../stores.js";
    import {createEventDispatcher} from "svelte";
    const dispatch = createEventDispatcher();

    export let trainings = []
</script>

<div id="table-list">
    <table id="trainings_table">
        <tr>
            <th>Záčátek</th>
            <th>Konec</th>
            <th>Typ tréninku</th>
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
                    {#if training.member === null && training.team !== null}
                        {training.team.name}
                    {:else if training.member !== null && training.team === null}
                        {training.member.firstName} {training.member.lastName}
                    {:else}
<!--                        Tým nebo Uživatel vymazán-->
                        -
                    {/if}
                </td>
                {#if $user.scope === "ADMIN" || $user.scope === "MODERATOR" || $user.id === training.member?.id}
                    <td id="update_table" on:click={() => modal.set({show: true, type: "update_training", details: training})}>
                        Upravit
                    </td>
                    <td id="delete-table" on:click={() => dispatch('del', training)}>
                        Odstranit
                    </td>
                {:else}
                    <td></td>
                    <td></td>
                {/if}
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