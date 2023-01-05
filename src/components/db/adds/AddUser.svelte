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

    export let data = {
        firstName: "",
        lastName: "",
        username: "",
        password: "",
        role: "USER",
        team: null
    }

    async function add() {
        if (data.firstName.length === 0 || data.lastName.length === 0 || data.username.length === 0 || data.password.length === 0) return;   // check if is not empty (required)

        const res = await fetch(PUBLIC_API_URL + `/members`, {
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


<form>
    <h2>Nový člen</h2><br>

    <label for="firstName">Jméno:</label><br>
    <input type="text" name="firstName" id="firstName" bind:value={data.firstName} required><br>

    <label id="lastName-label" for="lastName">Příjmení:</label><br>
    <input type="text" name="lastName" id="lastName" bind:value={data.lastName} required><br>

    <label id="username-label" for="username">Přihlašovací jméno:</label><br>
    <input  type="text" name="username" id="username" bind:value={data.username} required><br>

    <label id="password-label" for="password">Heslo:</label><br>
    <input type="password" name="password" id="password" bind:value={data.password}><br>

    <label for="role">Role:</label><br>
    <select name="role" id="role" bind:value={data.role} required>
        <option value={"USER"}>Uživatel</option>
        <option value={"MODERATOR"}>Moderátor</option>
        <option value={"ADMIN"}>Administrátor</option>
    </select><br>

    <label for="team">Tým:</label><br>
    <select name="team" id="team" bind:value={data.team}>
        <option value={null}>...</option>
        {#each teams as team}
            <option value={{id:team.id}}>{team.name}</option>
        {/each}
    </select><br>

    <button type="button" on:click={add}>Přidat člena</button>
</form>
