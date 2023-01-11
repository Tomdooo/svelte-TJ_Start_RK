<script>
    import {onMount} from "svelte";
    import {PUBLIC_API_URL} from "$env/static/public";
    import {modal, reloadData, token, user} from "../../stores.js";
    import TableTeams from "../../components/db/tables/TableTeams.svelte";

    let teams = []

    onMount(async () => {
        teams = await load()
    })

    async function load() {
        const res = await fetch(PUBLIC_API_URL+'/teams', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + $token
            }
        })


        if (res.ok) {
            return await res.json() || []
        }

        return []
    }

    /*****************************************/
    // Reload
    reloadData.subscribe(async value => {
        teams = await load()
        reloadData.set(false)
    })

    /*********************/
    // Delete
    let canDelete = true;

    async function del(e){
        if (!canDelete) return;
        canDelete = false

        if (confirm("Opravdu to chcete smazat?") === true) {
            const res = await fetch(PUBLIC_API_URL + `/teams/${e.detail.id}`, {
                method: "DELETE",
                headers: {
                    "Authorization": `Bearer ${$token}`
                },
            })

            if (!res.ok) {
                alert("Smazání se nepovedlo, zkuste to znovu.")
                return canDelete = true
            }

            teams = await load()   // unique
        }
        return canDelete=true;
    }
</script>

{#if $user.scope === "ADMIN" || $user.scope === "MODERATOR"}
    <button on:click={async () => {modal.set({show: true, type: "add_team", details: {}})}}>Přidat</button>
{/if}
<button on:click={async () => {teams = await load()}}>Znovu načíst obsah</button>

<TableTeams
        teams={teams}
        on:del={del}
/>
