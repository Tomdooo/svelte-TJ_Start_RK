<script>
    import {onMount} from "svelte";
    import {PUBLIC_API_URL} from "$env/static/public";
    import {token} from "../../stores.js";
    import TableTrainings from "../../components/TableTrainings.svelte";

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

</script>


<TableTrainings
        trainings={trainings}
/>
<button on:click={async () => {trainings = await load()}}>reload</button>