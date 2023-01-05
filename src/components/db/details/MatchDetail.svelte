<script>
    import {modal} from "../../../stores.js";

    export let data

    let start = new Date(data.start)
    start = (new Date(start.getTime() - start.getTimezoneOffset() * 60000).toISOString()).slice(0, -1)
    // let end = new Date(data.end)
    // end = (new Date(end.getTime() - end.getTimezoneOffset() * 60000).toISOString()).slice(0, -1)
</script>

<form>
    <h2>Detail zápasu</h2><br>

    <label for="header">Liga:</label><br>
    <input type="text" name="header" id="header" value={data.league} disabled/><br>

    <label id="start-label" for="start">Start:</label><br>
    <input type="datetime-local" name="start" id="start" value={start} disabled><br>

    <label id="homeTeam-label" for="homeTeam">Domácí:</label><br>
    <input type="text" name="team" id="homeTeam" value={data.homeTeam?.name || "-"} disabled><br>

    <label id="awayTeam-label" for="awayTeam">Hosté:</label><br>
    <input type="text" name="team" id="awayTeam" value={data.awayTeam?.name || "-"} disabled><br>

    <label for="note">Poznámka:</label><br>
    <input type="text" name="note" id="note" value={data.note} disabled><br>

    <button type="button" on:click={() => modal.set({show: true, type: "update_match", details: data})}>Upravit</button>
</form>