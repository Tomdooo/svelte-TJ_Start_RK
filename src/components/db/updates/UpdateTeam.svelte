<script>
    import {onMount} from "svelte";
    import {modal, reloadData, token} from "../../../stores.js";
    import {PUBLIC_API_URL} from "$env/static/public";

    export let data = {}

    data = data


    /*****************************************/
    let canUpdate = true

    async function update() {
        if (!canUpdate) return;
        canUpdate = false

        const res = await fetch(PUBLIC_API_URL+'/teams', {
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


<form>
    <h2>Upravit tým</h2><br>

    <label id="name-label" for="name">Název:</label><br>
    <input type="text" name="name" id="name" bind:value={data.name} required><br>

    <button type="button" on:click={update}>Upravit tým</button>
</form>

<style>

</style>