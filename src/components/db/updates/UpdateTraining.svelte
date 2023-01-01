<script>
    import {onMount} from "svelte";
    import {modal, reloadData, token} from "../../../stores.js";
    import {PUBLIC_API_URL} from "$env/static/public";

    export let data = {}
    data.start = new Date(data.start)
    data.end = new Date(data.end)

    data.start = (new Date(data.start.getTime() - data.start.getTimezoneOffset() * 60000).toISOString()).slice(0, -1);

    data.end = (new Date(data.end.getTime() - data.end.getTimezoneOffset() * 60000).toISOString()).slice(0, -1)

    data = data

    let members = [];

    onMount(async () => {
        const res = await fetch(PUBLIC_API_URL+'/members', {
            method: "GET",
            headers: {
                Authorization: `Bearer ${$token}`
            }
        })

        if (res.ok) {
            members = await res.json()
        }
    })

    let teams = [];

    onMount(async () => {
        const res = await fetch(PUBLIC_API_URL+'/teams', {
            method: "GET",
            headers: {
                Authorization: `Bearer ${$token}`
            }
        })

        if (res.ok) {
            members = await res.json()
        }
    })

    /*****************************************/
    let canUpdate = true
    ;
    async function update() {
        if (!canUpdate) return;
        canUpdate = false

        const res = await fetch(PUBLIC_API_URL+'/trainings', {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${$token}`
            },
            body: JSON.stringify(data)
        })

        if (!res.ok) {
            alert("Úprava se nepovedla, zkuste to znovu.")
            return canUpdate = true
        }

        reloadData.set(true)
        modal.set({show: false, type: "", details: {}})
    }
</script>

<!-- TODO dodělat menu -->
<form id="login-form" >
    <h2>Nová trénning</h2><br>

    <label for="header">Typ tréningu:</label><br>
    <input type="text" name="header" id="header" placeholder="Klasický tréning" bind:value={data.header} required><br>

    <label id="start-label" for="start">Start:</label><br>
    <input type="datetime-local" name="start" id="start" bind:value={data.start}  required><br>

    <label id="end-label" for="end">Konec:</label><br>
    <input  type="datetime-local" name="end" id="end" bind:value={data.end} required><br>

    <label for="note">Poznámka:</label><br>
    <input type="text" name="note" id="note" bind:value={data.note} required><br>

    <label for="track">Dráha:</label><br>
    <select name="track" id="track" bind:value={data.track} required>
        <option value={1}>1.</option>
        <option value={2}>2.</option>
        <option value={3}>3.</option>
        <option value={4}>4.</option>
    </select><br>

    <button type="button" on:click={update}>Upravit tréning</button>
</form>

<style>

</style>