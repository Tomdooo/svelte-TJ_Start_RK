<script>

    import {onMount} from "svelte";
    import {modal, reloadData, token} from "../../../stores.js";
    import {PUBLIC_API_URL} from "$env/static/public";

    export let data = {}

    data.ministration = data.ministration || {id: null}

    // Setup dates to input
    data.start = new Date(data.start)
    data.end = new Date(data.end)

    data.start = (new Date(data.start.getTime() - data.start.getTimezoneOffset() * 60000).toISOString()).slice(0, -1);
    data.end = (new Date(data.end.getTime() - data.end.getTimezoneOffset() * 60000).toISOString()).slice(0, -1);

    data = data
    ///////////////////////////

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

    /*****************************************/
    let canUpdate = true
    ;
    async function update() {
        if (!canUpdate) return;
        canUpdate = false

        data.start = new Date(data.start)
        data.end = new Date(data.end)

        let body = {...data}
        if (body.ministration.id === null) body.ministration = null

        const res = await fetch(PUBLIC_API_URL+'/events', {
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

<!-- TODO dodělat menu -->
<form id="login-form">
    <h2>Upravit akci</h2><br>

    <label id="nameAction-label" for="nameAction">Typ:</label><br>
    <input type="text" name="nameAction" id="nameAction" placeholder="" bind:value={data.type} required><br>

    <label id="start-label" for="start">Start:</label><br>
    <input type="datetime-local" name="start" id="start" bind:value={data.start} required><br>

    <label id="end-label" for="end">Konec:</label><br>
    <input  type="datetime-local" name="end" id="end" bind:value={data.end} required><br>

    <label for="note">Poznámka:</label><br>
    <input type="text" name="note" id="note" bind:value={data.note}><br>

    <label for="ministration">Služba:</label><br>
    <select name="ministration" id="ministration" bind:value={data.ministration.id} required>
<!--        <option value={null}>...</option>-->
        {#each members as member}
            <option value={member.id}>{member.firstName} {member.lastName}</option>
        {/each}
    </select><br>

    <button type="button" on:click={update}>Upravit akci</button>
</form>

<style>

</style>