<script>
    import {onMount} from "svelte";
    import {PUBLIC_API_URL} from "$env/static/public";
    import {modal, reloadData, token} from "../../stores.js";
    import TableEvents from "../../components/db/tables/TableEvents.svelte";

    let events = []

    onMount(async () => {
        events = await load()
    })

    async function load() {
        const res = await fetch(PUBLIC_API_URL+'/events', {
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
        events = await load()
        reloadData.set(false)
    })

    /*********************/
    // Delete
    let canDelete = true;

    async function del(e){
        if (!canDelete) return;
        canDelete = false

        if (confirm("Opravdu to chcete smazat?") === true) {
            const res = await fetch(PUBLIC_API_URL + `/events/${e.detail.id}`, {
                method: "DELETE",
                headers: {
                    "Authorization": `Bearer ${$token}`
                },
            })

            if (!res.ok) {
                alert("Smazání se nepovedlo, zkuste to znovu.")
                return canDelete = true
            }

            events = await load()   // unique
        }
    }
</script>


<TableEvents
        events={events}
        on:del={del}
/>
<button on:click={async () => {events = await load()}}>reload</button>