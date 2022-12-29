<script>
    //TODO doplnit z DB

    import Modal from "./modal/Modal.svelte";
    import AddEvent from "./AddEvent.svelte";
    import {modal} from "../stores.js";

    export let events = [
    ]
</script>
<div id="table-list">
    <table id="events_table">
        <tr>
            <th>Typ</th>
            <th>Začátek</th>
            <th>Konec</th>
            <th>Služba</th>
            <th>Poznámka</th>
            <th></th>
            <th></th>
        </tr>
        {#each events as event}
            <tr>
                <td id="type-td">
                    {event.type}
                </td>
                <td id="start-td">
                    {new Date(event.start).toLocaleTimeString(undefined, {
                        day:'2-digit',
                        month:'2-digit',
                        year:'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                    })}
                </td>
                <td id="end-td">
                    {new Date(event.end).toLocaleTimeString(undefined, {
                        day:'2-digit',
                        month:'2-digit',
                        year:'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                    })}
                </td>
                <td id="ministration-td">
                    {event.ministration.firstName}  {event.ministration.lastName}
                </td>
                <td id="note-td">
                    {event.note}
                </td>
                <td id="update_table" on:click={() => modal.set({show: true, details: {}})} style="cursor: pointer;">
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
    #type-td, #start-td, #end-td, #ministration-td,
    #note-td {
        background-color: #ffffff;
        border: #333 1px solid;
        border-collapse: collapse;
    }
</style>