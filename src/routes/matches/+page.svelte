<script>
    import {onMount} from "svelte";
    import {PUBLIC_API_URL} from "$env/static/public";
    import {token} from "../../stores.js";
    import TableMatches from "../../components/TableMatches.svelte";

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

</script>


<TableMatches
        matches={matches}
/>
<button on:click={async () => {matches = await load()}}>reload</button>