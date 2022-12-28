<script>
    import TableUsers from "../../components/TableUsers.svelte";
    import {onMount} from "svelte";
    import {PUBLIC_API_URL} from "$env/static/public";
    import {token} from "../../stores.js";

    let members = []

    onMount(async () => {
        const res = await fetch(PUBLIC_API_URL+'/members', {
            headers: {
                Authorization: "Bearer " + $token
            }
        })

        if (res.ok) {
            members = await res.json()
        }
    })
</script>


<TableUsers
    members={members}
/>