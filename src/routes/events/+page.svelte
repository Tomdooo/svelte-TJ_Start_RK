<script>
    import {onMount} from "svelte";
    import {PUBLIC_API_URL} from "$env/static/public";
    import {token} from "../../stores.js";
    import TableEvents from "../../components/TableEvents.svelte";

    // let events = []
    //
    // onMount(async () => {
    //     events = await load()
    // })
    //
    // async function load() {
    //     const res = await fetch('http://localhost:8080/events', {
    //         method: 'GET',
    //         credentials: 'include',
    //         mode: "no-cors",
    //         headers: {
    //             // 'Content-Type': 'application/x-www-form-urlencoded',
    //             'Authorization': 'Bearer ' + $token
    //             // 'Authorization': "Basic " + btoa("vasek:Password123@")
    //         }
    //     })
    //
    //     console.log(res)
    //
    //     // if (res.ok) {
    //         const e = await res.json()
    //         console.log("events: " + e)
    //         return e
    //     // }
    //     //
    //     // return []
    // }
    //
    // $: console.log(events)

    export let data

    $: console.log(data)
</script>


<TableEvents
        events={data.fetched}
/>
<!--<button on:click={async () => {events = await load()}}>reload</button>-->