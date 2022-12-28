<script>
    import "./styles.css"
    import {token, user} from "../stores.js";
    import Nav from "../components/header/Nav.svelte";

    // $: console.log($token)
    export let data;
    if (data.token) {
        token.set(data.token)
        user.set(data.user)
    }


</script>

<Nav/>
<slot></slot>