<script>

    import {onMount} from "svelte";
    import {modal, reloadData, token} from "../../../stores.js";
    import {PUBLIC_API_URL} from "$env/static/public";

    export let data = {}

    data.team = data.team || {id: null}

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

    /*****************************************/
    let canUpdate = true
    ;
    async function update() {
        if (!canUpdate) return;
        canUpdate = false

        let body = {...data}
        if (body.team.id === null) body.team = null

        const res = await fetch(PUBLIC_API_URL+'/members', {
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
    <h2>Upravit člena</h2><br>

    <label for="firstName">Jméno:</label><br>
    <input type="text" name="firstName" id="firstName" bind:value={data.firstName} required><br>

    <label id="lastName-label" for="lastName">Příjmení:</label><br>
    <input type="text" name="lastName" id="lastName" bind:value={data.lastName} required><br>

    <label for="team">Tým:</label><br>
    <select name="team" id="team" bind:value={data.team.id} required>
        <!--        <option value={null}>...</option>-->
        {#each teams as team}
            <option value={team.id}>{team.name}</option>
        {/each}
    </select><br>

    <label id="username-label" for="username">Přihlašovací jméno:</label><br>
    <input  type="text" name="username" id="username" bind:value={data.username} required><br>

    <label for="role">Role:</label><br>
    <select name="role" id="role" bind:value={data.role} required>
        <option value={"USER"}>Uživatel</option>
        <option value={"MODERATOR"}>Moderátor</option>
        <option value={"ADMIN"}>Administrátor</option>
    </select><br>

    <button type="button" on:click={() => modal.set({show: true, type: "update_user_password", details: data})}>Změnit heslo</button>
    <button type="button" on:click={update}>Upravit člena</button>
</form>

<style>

</style>