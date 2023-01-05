<script>
    import {onMount} from "svelte";
    import {PUBLIC_API_URL} from "$env/static/public";
    import {modal, reloadData, token} from "../../../stores.js";

    let members = [];

    onMount(async () => {
        const res = await fetch(PUBLIC_API_URL + '/members', {
            method: "GET",
            headers: {
                Authorization: `Bearer ${$token}`
            }
        })

        if (res.ok) {
            members = await res.json()
        }
    })

    /********************************************/

    export let date;
    export let data = {
        type: "",
        note: "",
        start: null,
        end: null,
        ministration: {
            id: null
        }
    }

    // Setup dates to input
    if (date) {
        data.start = (new Date(date.getTime() - date.getTimezoneOffset() * 60000).toISOString()).slice(0, -1);
        data.end = (new Date(date.getTime() - date.getTimezoneOffset() * 60000).toISOString()).slice(0, -1);
    }

    data = data

    ///////////////////////////

    async function add() {
        if (data.type.length === 0 || !data.start || !data.end || data.ministration.id === null) return;   // check if is not empty (required)

        if (data.start < data.end) {
            const res = await fetch(PUBLIC_API_URL + `/events`, {
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
        } else {
            return alert("Začátek musí být před koncem")
        }
    }

</script>


<form id="login-form" on:click|preventDefault>
    <h2>Nová akce</h2><br>

    <label id="nameAction-label" for="nameAction">Typ:</label><br>
    <input type="text" name="nameAction" id="nameAction" placeholder="" bind:value={data.type} required><br>

    <label id="start-label" for="start">Start:</label><br>
    <input type="datetime-local" name="start" id="start" bind:value={data.start} required><br>

    <label id="end-label" for="end">Konec:</label><br>
    <input type="datetime-local" name="end" id="end" bind:value={data.end} required><br>

    <label for="note">Poznámka:</label><br>
    <input type="text" name="note" id="note" bind:value={data.note}><br>

    <label for="ministration">Služba:</label><br>
    <select name="ministration" id="ministration" bind:value={data.ministration.id} required>
        {#each members as member}
            <option value={member.id}>{member.firstName} {member.lastName}</option>
        {/each}
    </select><br>

    <button type="button" on:click={add}>Přidat akci</button>
</form>

<style>

</style>