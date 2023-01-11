<script>
    import {modal, user} from "../../../stores.js";

    export let data


    let start = new Date(data.start)
    start = (new Date(start.getTime() - start.getTimezoneOffset() * 60000).toISOString()).slice(0, -1)
    let end = new Date(data.end)
    end = (new Date(end.getTime() - end.getTimezoneOffset() * 60000).toISOString()).slice(0, -1)
    let ministration = (data.ministration?.firstName || "") + " " + (data.ministration?.lastName || "")
</script>

<form>
    <h2>Detail akce</h2><br>

    <label id="nameAction-label" for="nameAction">Typ:</label><br>
    <input type="text" name="nameAction" id="nameAction" placeholder="" value={data.type} disabled><br>

    <label id="start-label" for="start">Start:</label><br>
    <input type="datetime-local" name="start" id="start" value={start} disabled><br>

    <label id="end-label" for="end">Konec:</label><br>
    <input type="datetime-local" name="end" id="end" value={end} disabled><br>

    <label for="note">Poznámka:</label><br>
    <input type="text" name="note" id="note" value={data.note} disabled><br>

    <label for="ministration">Služba:</label><br>
    <input type="text" name="ministration" id="ministration" value={ministration} disabled><br>

    {#if $user.scope === "ADMIN" || $user.scope === "MODERATOR"}
        <button type="button" on:click={() => modal.set({show: true, type: "update_event", details: data})}>Upravit</button>
    {/if}
</form>