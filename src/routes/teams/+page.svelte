<script>
    import {onMount} from "svelte";
    import {PUBLIC_API_URL} from "$env/static/public";
    import {token} from "../../stores.js";
    import TableTeams from "../../components/TableTeams.svelte";

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

</script>


<TableTeams
        teams={teams}
/>
<button on:click={async () => {teams = await load()}}>reload</button>