<script>
    import "./styles.css"
    import {modal, token, user} from "../stores.js";
    import Nav from "../components/header/Nav.svelte";
    import AddEvent from "../components/db/add/AddEvent.svelte";
    import Modal from "../components/modal/Modal.svelte";
    import UpdateEvent from "../components/db/updates/UpdateEvent.svelte";

    export let data;
    if (data.token) {
        token.set(data.token)
        user.set(data.user)
    }
</script>

<Nav/>

<slot></slot>

<Modal bind:open={$modal.show}>
    {#if $modal.type === "update_event"}
        <UpdateEvent
            data={$modal.details}
        />
    {:else}
        <AddEvent/>
    {/if}
</Modal>