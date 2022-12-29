<script>
    import TableUsers from "../../components/TableUsers.svelte";
    import {onMount} from "svelte";
    import {PUBLIC_API_URL} from "$env/static/public";
    import {token} from "../../stores.js";

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
</script>


<TableUsers
    members={members}
/>

<button on:click={async () => {members = await load()}}>reload</button>