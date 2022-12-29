<script>
    import TableUsers from "../../components/TableUsers.svelte";
    import {onMount} from "svelte";
    import {PUBLIC_API_URL} from "$env/static/public";
    import {token} from "../../stores.js";
    import axios from 'axios';

    let members = []

    onMount(async () => {
        members = await load()
    })

    async function load() {
        const res = await fetch(PUBLIC_API_URL+'/members', {
            method: 'GET',
            // credentials: 'include',
            // mode: "cors",
            headers: {
                // 'Content-Type': 'application/x-www-form-urlencoded',
                // 'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + $token

                // 'Authorization': 'Basic ' + btoa("vasek:Password123@")
            }
        })

        if (res.ok) {
            return await res.json() || []
        }

        // const res = await axios.get(PUBLIC_API_URL + '/members', {
        //
        // })

        return []
    }
</script>


<TableUsers
    members={members}
/>
<button on:click={async () => {members = await load()}}>reload</button>