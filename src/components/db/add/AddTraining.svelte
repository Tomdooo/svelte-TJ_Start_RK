<script>
    import {onMount} from "svelte";
    import {PUBLIC_API_URL} from "$env/static/public";
    import {modal, reloadData, token} from "../../../stores.js";

    let members = [];
    let teams = [];

    onMount(async () => {
        let res = await fetch(PUBLIC_API_URL+'/members', {
            method: "GET",
            headers: {
                Authorization: `Bearer ${$token}`
            }
        })

        if (res.ok) {
            members = await res.json()
        }

        ///////////

        res = await fetch(PUBLIC_API_URL+'/teams', {
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

    export let data = {
        start: null,
        end: null,
        header: "",
        note: "",
        track: null,
        member: null,
        team: null
    }

    async function add() {
        if (!data.start || !data.end || data.header.length === 0 || !data.track || (!data.member && !data.team)) return;   // check if is not empty (required)

        const res = await fetch(PUBLIC_API_URL + `/trainings`, {
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
    <h2>Nový trénink</h2><br>

<!--    TODO nevím co dát header-->
    <label for="header">Název / Typ:</label><br>
    <input type="text" name="header" id="header" placeholder="Klasický tréning" bind:value={data.header} required><br>

    <label id="start-label" for="start">Start:</label><br>
    <input type="datetime-local" name="start" id="start" bind:value={data.start} required><br>

    <label id="end-label" for="end">Konec:</label><br>
    <input  type="datetime-local" name="end" id="end" bind:value={data.end} required><br>

    <label for="note">Poznámka:</label><br>
    <input type="text" name="note" id="note" bind:value={data.note}><br>

    <label for="track">Dráha:</label><br>
    <select name="track" id="track" bind:value={data.track} required>
        <option value={1}>1.</option>
        <option value={2}>2.</option>
        <option value={3}>3.</option>
        <option value={4}>4.</option>
    </select><br>

    <label for="member">Člen:</label><br>
    <select name="member" id="member" bind:value={data.member}>
        <option value={null}>...</option>
        {#each members as member}
            <option value={{id:member.id}}>{member.firstName} {member.lastName}</option>
        {/each}
    </select><br>

    <label for="team">Tým:</label><br>
    <select name="team" id="team" bind:value={data.team}>
        <option value={null}>...</option>
        {#each teams as team}
            <option value={{id:team.id}}>{team.name}</option>
        {/each}
    </select><br>

    <button type="button" on:click={add}>Přidat trénink</button>
</form>
