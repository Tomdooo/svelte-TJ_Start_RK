<script>
    import {onMount} from "svelte";
    import {modal, reloadData, token} from "../../../stores.js";
    import {PUBLIC_API_URL} from "$env/static/public";

    export let data = {}

    delete data.homeTeam?.name
    delete data.awayTeam?.name

    data.homeTeam = data.homeTeam || {id: null}
    data.awayTeam = data.awayTeam || {id: null}

    data.start = new Date(data.start)
    data.start = (new Date(data.start.getTime() - data.start.getTimezoneOffset() * 60000).toISOString()).slice(0, -1);
    data = data

    ///////////////////////////

    let teams = [];

    onMount(async () => {
        const res = await fetch(PUBLIC_API_URL+'/teams', {
            method: "GET",
            headers: {
                Authorization: `Bearer ${$token}`
            }
        })

        if (res.ok) {
            teams = await res.json()
        }

        data = data
    })

    /*****************************************/
    let canUpdate = true

    async function update() {
        if (!canUpdate) return;
        canUpdate = false

        data.start = new Date(data.start)

        let body = {...data}
        if (body.homeTeam.id === null) body.homeTeam = null
        if (body.awayTeam.id === null) body.awayTeam = null

        const res = await fetch(PUBLIC_API_URL+'/matches', {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${$token}`
            },
            body: JSON.stringify(body)
        })

        if (!res.ok) {
            alert("Úprava se nepovedla, zkuste to znovu.")
            return canUpdate = true
        }

        reloadData.set(true)
        modal.set({show: false, type: "", details: {}})
    }
</script>


<form>
    <h2>Upravit zápas</h2><br>

    <label for="header">Liga:</label><br>
    <select name="header" id="header" bind:value={data.league} required>
        <option>2. liga</option>
        <option>Divize</option>
        <option>Východočeská soutěž B</option>
        <option>Neregistrování 1. liga</option>
        <option>Neregistrování 2. liga</option>
        <option>Neregistrování 8. liga</option>
    </select><br>

    <label id="start-label" for="start">Start:</label><br>
    <input type="datetime-local" name="start" id="start" bind:value={data.start} required><br>

    <label id="homeTeam-label" for="homeTeam">Domácí:</label><br>
    <select name="team" id="homeTeam" bind:value={data.homeTeam.id} required>
        {#each teams as team}
            <option value={team.id}>{team.name}</option>
        {/each}
    </select><br>

    <label id="awayTeam-label" for="awayTeam">Hosté:</label><br>
    <select name="team" id="awayTeam" bind:value={data.awayTeam.id} required>
        {#each teams as team}
            <option value={team.id}>{team.name}</option>
        {/each}
    </select><br>

    <label for="note">Poznámka:</label><br>
    <input type="text" name="note" id="note" bind:value={data.note} required><br>

    <button type="button" on:click={update}>Upravit zápas</button>
</form>

<style>

</style>