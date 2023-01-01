<script>
    import {onMount} from "svelte";
    import {PUBLIC_API_URL} from "$env/static/public";
    import {modal, reloadData, token} from "../../../stores.js";

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
    })

    /********************************************/

    export let date;
    export let data = {
        header: "",
        note: "",
        league: "",
        start: null,
        homeTeam: null,
        awayTeam: null
    }

    // Setup dates to input
    if (date) {
        data.start = (new Date(date.getTime() - date.getTimezoneOffset() * 60000).toISOString()).slice(0, -1);
    }

    data = data
    ///////////////////////////

    async function add() {
        if (data.header.length === 0 || data.league.length === 0 || !data.start || !data.homeTeam || !data.awayTeam) return;   // check if is not empty (required)

        const res = await fetch(PUBLIC_API_URL + `/matches`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${$token}`,
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(data)
        })

        if (!res.ok) {
            return alert("Přidání se nepodařilo, zkuste to znovu.")
        }

        reloadData.set(true)
        modal.set({show: false, type: "", details: {}})
    }
</script>

<!-- TODO dodělat menu -->
<form id="login-form" on:click|preventDefault>
    <h2>Nový zápas</h2><br>

    <label for="heading">Titulek:</label><br>
    <input type="heading" name="heading" id="heading" bind:value={data.header} required><br>

    <label for="header">Liga:</label><br>
    <select name="header" id="header" bind:value={data.league} required>
        <option value="2. liga">2. liga</option>
        <option value="Divize">Divize</option>
        <option value="Východočeská soutěž B">Východočeská soutěž B</option>
        <option value="Neregistrování 1. liga">Neregistrování 1. liga</option>
        <option value="Neregistrování 2. liga">Neregistrování 2. liga</option>
        <option value="Neregistrování 8. liga">Neregistrování 8. liga</option>
    </select><br>

    <label id="homeTeam-label" for="homeTeam">Domácí:</label><br>
    <select name="team" id="homeTeam" bind:value={data.homeTeam} required>
        <option value={null}>...</option>
        {#each teams as team}
            <option value={{id:team.id}}>{team.name}</option>
        {/each}
    </select><br>

    <label id="awayTeam-label" for="awayTeam">Hosté:</label><br>
    <select name="team" id="awayTeam" bind:value={data.awayTeam} required>
        <option value={null}>...</option>
        {#each teams as team}
            <option value={{id:team.id}}>{team.name}</option>
        {/each}
    </select><br>


    <label id="start-label" for="start">Start:</label><br>
    <input type="datetime-local" name="start" id="start" bind:value={data.start} required><br>

    <label for="note">Poznámka:</label><br>
    <input type="text" name="note" id="note" bind:value={data.note} required><br>

    <button type="button" on:click={add}>Přidat nový zápas</button>
</form>

<style>

</style>