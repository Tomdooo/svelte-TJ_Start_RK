<script>
    import TableUsers from "../../components/db/tables/TableUsers.svelte";
    import {onMount} from "svelte";
    import {PUBLIC_API_URL} from "$env/static/public";
    import {modal, reloadData, token, user} from "../../stores.js";

    /////
    if ($user.scope !== "ADMIN") window.location.replace("/");
    /////

    let members = []

    onMount(async () => {
        members = await load()
    })

    async function load() {
        const res = await fetch(PUBLIC_API_URL+'/members', {
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
        members = await load()
        reloadData.set(false)
    })

    /*********************/
    // Delete
    let canDelete = true;

    async function del(e){
        if (!canDelete) return;
        canDelete = false

        if (confirm("Opravdu to chcete smazat?") === true) {
            const res = await fetch(PUBLIC_API_URL + `/members/${e.detail.id}`, {
                method: "DELETE",
                headers: {
                    "Authorization": `Bearer ${$token}`
                },
            })

            if (!res.ok) {
                alert("Smazání se nepovedlo, zkuste to znovu.")
                return canDelete = true
            }

            members = await load()   // unique
        }
        return canDelete=true;
    }
</script>


<button on:click={async () => {modal.set({show: true, type: "add_user", details: {}})}}>Přidat</button>
<button on:click={async () => {members = await load()}}>Znovu načíst obsah</button>

<TableUsers
    members={members}
    on:del={del}
/>
