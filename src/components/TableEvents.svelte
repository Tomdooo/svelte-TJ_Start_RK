<script>
    //TODO doplnit z DB

    import Modal from "./modal/Modal.svelte";
    import AddEvent from "./AddEvent.svelte";
    import {modal} from "../stores.js";

    let events = [
        {
            type: "Turnaj",
            note: "aaaa",
            start: "3922-12-10T14:00:00.000+00:00",
            end: "3922-12-10T14:45:00.000+00:00",
            ministration: {
                id: 3 //TODO vyhledat membra podle id
            }
        },
        {
            type: "Turnaj",
            note: "aaaa",
            start: "3923-01-10T14:00:00.000+00:00",
            end: "3923-01-10T14:45:00.000+00:00",
            ministration: {
                id: 4
            }
        }
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
                    {event.start}
                </td>
                <td id="end-td">
                    {event.end}
                </td>
                <td id="ministration-td">
                    {event.ministration.id}
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