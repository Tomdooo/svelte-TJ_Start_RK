<script>
    import {modal, user} from "../../../stores.js";
    import {createEventDispatcher} from "svelte";
    const dispatch = createEventDispatcher();
    export let teams = []
</script>
<div id="table-list">
    <table id="teams-table">
        <tr>
            <th>Jméno</th>
            {#if $user.scope === "ADMIN" || $user.scope === "MODERATOR"}
                <th></th>
                <th></th>
            {/if}
        </tr>
        {#each teams as team}
            <tr>
                <td id="name-td">
                    {team.name}
                </td>
                {#if $user.scope === "ADMIN" || $user.scope === "MODERATOR"}
                    <td id="update_table" on:click={() => modal.set({show: true, type: "update_team", details: team})}>
                        Upravit
                    </td>
                    <td id="delete-table" on:click={() => dispatch('del', team)}>
                        Odstranit
                    </td>
                {/if}
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