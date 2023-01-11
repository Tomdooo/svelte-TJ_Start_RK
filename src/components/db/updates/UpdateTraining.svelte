<script>
    import {modal, reloadData, token, user} from "../../../stores.js";
    import {PUBLIC_API_URL} from "$env/static/public";
    import {onMount} from "svelte";


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

        data = data
    })

    ///////////

    export let data = {}

    data.start = new Date(data.start)
    data.start = (new Date(data.start.getTime() - data.start.getTimezoneOffset() * 60000).toISOString()).slice(0, -1);
    data.end = new Date(data.end)
    data.end = (new Date(data.end.getTime() - data.end.getTimezoneOffset() * 60000).toISOString()).slice(0, -1)

    data.member = data.member || {id: null}
    data.team = data.team || {id: null}

    data = data

    ///////////

    /*****************************************/
    let canUpdate = true;

    async function update() {
        if (!canUpdate) return;
        canUpdate = false

        if (data.start < data.end) {
            let body = {...data}

            body.start = new Date(body.start)
            body.end = new Date(body.end)

            if (body.member.id === null) body.member = null;
            if (body.team.id === null) body.team = null;

            const res = await fetch(PUBLIC_API_URL + '/trainings', {
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

        } else {
            canUpdate = true
            return alert("Začátek musí být před koncem")
        }
    }
</script>


<form>
    <h2>Upravit trénink</h2><br>

    <label for="header">Typ tréninku:</label><br>
    <input type="text" name="header" id="header" placeholder="" bind:value={data.header} required><br>

    <label id="start-label" for="start">Start:</label><br>
    <input type="datetime-local" name="start" id="start" bind:value={data.start} required><br>

    <label id="end-label" for="end">Konec:</label><br>
    <input type="datetime-local" name="end" id="end" bind:value={data.end} required><br>

    <label for="note">Poznámka:</label><br>
    <input type="text" name="note" id="note" bind:value={data.note} required><br>

<!--    <label for="track">Dráha:</label><br>-->
<!--    <select name="track" id="track" bind:value={data.track} required>-->
<!--        <option value={1}>1.</option>-->
<!--        <option value={2}>2.</option>-->
<!--        <option value={3}>3.</option>-->
<!--        <option value={4}>4.</option>-->
<!--    </select><br>-->

    {#if $user.scope === "ADMIN" || $user.scope === "MODERATOR"}
        <label for="member">Člen:</label><br>
        <select name="member" id="member" bind:value={data.member.id}>
            {#each members as member}
                <option value={member.id}>{member.firstName} {member.lastName}</option>
            {/each}
        </select><br>

        <label for="team">Tým:</label><br>
        <select name="team" id="team" bind:value={data.team.id}>
            {#each teams as team}
                <option value={team.id}>{team.name}</option>
            {/each}
        </select><br>
    {/if}

    <button type="button" on:click={update}>Upravit trénink</button>
</form>

<style>

</style>