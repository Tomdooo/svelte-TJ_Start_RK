<script>
    import {createEventDispatcher} from "svelte";
    import {modal, user} from "../../../stores.js";

    const dispatch = createEventDispatcher();

    export let matches = []
</script>

<div id="table-list">
    <table id="matches_table">
        <tr>
            <th>Liga:</th>
            <th>Začátek</th>
            <th>Domací</th>
            <th>Hosté</th>
            <th>Poznámka</th>
            {#if $user.scope === "ADMIN" || $user.scope === "MODERATOR"}
                <th></th>
                <th></th>
            {/if}
        </tr>
        {#each matches as match}
            <tr>
                <td id="header-td">
                    {match.league}
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
                    {#if match.homeTeam === null}
<!--                        Tým vymazaný-->
                        -
                    {:else}
                        {match.homeTeam.name}
                    {/if}
                </td>
                <td id="awayTeam-td">
                    {#if match.awayTeam === null}
<!--                        Tým vymazaný-->
                        -
                    {:else}
                        {match.awayTeam.name}
                    {/if}
                </td>
                <td id="note-td">
                    {match.note}
                </td>
                {#if $user.scope === "ADMIN" || $user.scope === "MODERATOR"}
                    <td id="update_table" on:click={() => modal.set({show: true,type: "update_match",details: match})}>
                        Upravit
                    </td>
                    <td id="delete-table" on:click={() => dispatch('del', match)}>
                        Odstranit
                    </td>
                {/if}
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