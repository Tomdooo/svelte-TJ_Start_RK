<script>
    import {onMount} from "svelte";
    import {PUBLIC_API_URL} from "$env/static/public";
    import {reloadData, token} from "../../stores.js";
    import TableTrainings from "../../components/db/tables/TableTrainings.svelte";

    let trainings = []

    onMount(async () => {
        trainings = await load()
    })

    async function load() {
        const res = await fetch(PUBLIC_API_URL+'/trainings', {
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
        trainings = await load()
        reloadData.set(false)
    })

    /*********************/
    // Delete
    let canDelete = true;

    async function del(e){
        if (!canDelete) return;
        canDelete = false

        if (confirm("Opravdu to chcete smazat?") === true) {
            const res = await fetch(PUBLIC_API_URL + `/trainings/${e.detail.id}`, {
                method: "DELETE",
                headers: {
                    "Authorization": `Bearer ${$token}`
                },
            })

            if (!res.ok) {
                alert("Smazání se nepovedlo, zkuste to znovu.")
                return canDelete = true
            }

            trainings = await load()   // unique
        }
        return canDelete=true;
    }
</script>


<TableTrainings
        trainings={trainings}
        on:del={del}
/>
<button on:click={async () => {trainings = await load()}}>reload</button>