<script>
    import {onMount} from "svelte";
    import {modal, reloadData, token} from "../../../stores.js";
    import {PUBLIC_API_URL} from "$env/static/public";

    export let data = {}
    data.team = {id: null};


    data=data;

    let teams =[
    ];

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

        const res = await fetch(PUBLIC_API_URL+'/members', {
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
<form id="login-form">
    <h2>Nový člen</h2><br>

    <label id="firstName-label" for="firstName">Jméno:</label><br>
    <input type="text" name="firstName" id="firstName" placeholder="" bind:value={data.firstName} required><br>

    <label id="lastName-label" for="lastName">Příjmení:</label><br>
    <input type="text" name="lastName" id="lastName" placeholder="" bind:value={data.lastName} required><br>

    <label id="username-label" for="username">Uživatelský jméno:</label><br>
    <input type="text" name="username" id="username" placeholder="" bind:value={data.username} required><br>

    <label for="team">Tým:</label><br>
    <select name="team" id="team" bind:value={data.team.id} required>
        {#each teams as team}
            <option value={team.id}>{team.name}</option>
            {/each}
    </select><br>

    <label for="role">Role:</label><br>
    <select name="role" id="role" bind:value={data.role} required>
        <option value="USER">Uživatel</option>
        <option value="ADMIN">Administrator</option>
        <option value="MODERATOR">Moderator</option>
    </select><br>

    <label for="password">Heslo:</label><br>
    <input type="password" name="password" id="password" bind:value={data.password} required><br>

    <button type="button" on:click={update}>Upravit uživatele</button>
</form>

<style>
</style>