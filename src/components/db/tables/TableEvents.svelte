<script>
    import {modal, user} from "../../../stores.js";
    import {createEventDispatcher} from "svelte";

    const dispatch = createEventDispatcher();

    export let events = []
</script>
<div id="table-list">
    <table id="events_table">
        <tr>
            <th>Typ</th>
            <th>Začátek</th>
            <th>Konec</th>
            <th>Služba</th>
            <th>Poznámka</th>
            {#if $user.scope === "ADMIN" || $user.scope === "MODERATOR"}
                <th></th>
                <th></th>
            {/if}
        </tr>
        {#each events as event}
            <tr>
                <td id="type-td">
                    {event.type}
                </td>
                <td id="start-td">
                    {new Date(event.start).toLocaleTimeString(undefined, {
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                    })}
                </td>
                <td id="end-td">
                    {new Date(event.end).toLocaleTimeString(undefined, {
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                    })}
                </td>
                <td id="ministration-td">
                    {#if event.ministration === null}
<!--                        Uživatel vymazán-->
                        -
                    {:else}
                        {event.ministration.firstName}  {event.ministration.lastName}
                    {/if}
                </td>
                <td id="note-td">
                    {event.note}
                </td>
                {#if $user.scope === "ADMIN" || $user.scope === "MODERATOR"}
                    <td id="update_table" on:click={() => modal.set({show: true, type: "update_event", details: event})}>
                        Upravit
                    </td>
                    <td id="delete-table" on:click={() => dispatch('del', event)}>
                        Odstranit
                    </td>
                {/if}
            </tr>
        {/each}
    </table>
</div>

<style>
    #type-td, #start-td, #end-td, #ministration-td,
    #note-td {
        background-color: #ffffff;
        border: #333 1px solid;
        border-collapse: collapse;
    }
</style>