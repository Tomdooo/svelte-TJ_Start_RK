<script>
    import "./styles.css"
    import {modal, token, user} from "../stores.js";
    import Nav from "../components/header/Nav.svelte";
    import AddEvent from "../components/AddEvent.svelte";
    import Modal from "../components/modal/Modal.svelte";

    // $: console.log($token)
    export let data;
    if (data.token) {
        token.set(data.token)
        user.set(data.user)
    }


    $:console.log($token)
</script>

<Nav/>

<slot></slot>

<Modal bind:open={$modal.show}>
    <AddEvent/>
</Modal>