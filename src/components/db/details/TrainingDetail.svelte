<script>
    import {modal, user} from "../../../stores.js";

    export let data

    let start = new Date(data.start)
    start = (new Date(start.getTime() - start.getTimezoneOffset() * 60000).toISOString()).slice(0, -1)
    let end = new Date(data.end)
    end = (new Date(end.getTime() - end.getTimezoneOffset() * 60000).toISOString()).slice(0, -1)
</script>

<form>
    <h2>Detail tréninku</h2><br>

    <label for="header">Typ tréninku:</label><br>
    <input type="text" name="header" id="header" placeholder="" value={data.header} disabled><br>

    <label id="start-label" for="start">Start:</label><br>
    <input type="datetime-local" name="start" id="start" value={start} disabled><br>

    <label id="end-label" for="end">Konec:</label><br>
    <input type="datetime-local" name="end" id="end" value={end} disabled><br>

    <label for="note">Poznámka:</label><br>
    <input type="text" name="note" id="note" value={data.note} disabled><br>

    <label for="track">Dráha:</label><br>
    <input type="text" name="track" id="track" value={data.track} disabled><br>

    <label for="member">Člen:</label><br>
    <input type="text" name="member" id="member" value={(data.member?.firstName)? (data.member?.firstName + " " + data.member?.lastName) : "-"} disabled><br>

    <label for="team">Tým:</label><br>
    <input type="text" name="team" id="team" value={data.team?.name || "-"} disabled><br>

    {#if $user.scope === "ADMIN" || $user.scope === "MODERATOR" || $user.id === data.member?.id}
        <button type="button" on:click={() => modal.set({show: true, type: "update_training", details: data})}>Upravit</button>
    {/if}
</form>