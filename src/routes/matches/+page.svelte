<script>
    import {onMount} from "svelte";
    import {PUBLIC_API_URL} from "$env/static/public";
    import {modal, reloadData, token, user} from "../../stores.js";
    import TableMatches from "../../components/db/tables/TableMatches.svelte";

    let matches = []

    onMount(async () => {
        matches = await load()
    })

    async function load() {
        const res = await fetch(PUBLIC_API_URL+'/matches', {
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

    // Reload
    reloadData.subscribe(async value => {
        matches = await load()
        reloadData.set(false)
    })

    // Delete
    let canDelete = true;

    async function del(e){
        if (!canDelete) return;
        canDelete = false

        if (confirm("Opravdu to chcete smazat?") === true) {
            const res = await fetch(PUBLIC_API_URL + `/matches/${e.detail.id}`, {
                method: "DELETE",
                headers: {
                    "Authorization": `Bearer ${$token}`
                },
            })

            if (!res.ok) {
                alert("Smazání se nepovedlo, zkuste to znovu.")
                return canDelete = true
            }

            matches = await load()   // unique
        }
        return canDelete=true;
    }

</script>

{#if $user.scope === "ADMIN" || $user.scope === "MODERATOR"}
    <button on:click={async () => {modal.set({show: true, type: "add_match", details: {}})}}>Přidat</button>
{/if}
<button on:click={async () => {matches = await load()}}>Znovu načíst obsah</button>

<TableMatches
        matches={matches}
        on:del={del}
/>
