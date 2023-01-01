<script>
    import "./styles.css"
    import {modal, token, user} from "../stores.js";
    import Nav from "../components/header/Nav.svelte";
    import AddEvent from "../components/db/add/AddEvent.svelte";
    import Modal from "../components/modal/Modal.svelte";
    import UpdateEvent from "../components/db/updates/UpdateEvent.svelte";
    import UpdateMatch from "../components/db/updates/UpdateMatch.svelte";
    import UpdateTeam from "../components/db/updates/UpdateTeam.svelte";
    import UpdateUser from "../components/db/updates/UpdateUser.svelte";
    import AddUser from "../components/db/add/AddUser.svelte";
    import AddTeam from "../components/db/add/AddTeam.svelte";
    import AddMatch from "../components/db/add/AddMatch.svelte";
    import AddTraining from "../components/db/add/AddTraining.svelte";
    import UpdateTraining from "../components/db/updates/UpdateTraining.svelte";
    import AddChoice from "../components/modal/AddChoice.svelte";
    import AddOwnTraining from "../components/db/add/AddOwnTraining.svelte";

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
    {:else if $modal.type === "update_match"}
        <UpdateMatch
                data={$modal.details}
        />
    {:else if $modal.type === "update_training"}
        <UpdateTraining
                data={$modal.details}
        />
    {:else if $modal.type === "update_team"}
        <UpdateTeam
                data={$modal.details}
        />
    {:else if $modal.type === "update_user"}
        <UpdateUser
                data={$modal.details}
        />
<!-- -------------------------------------- -->
    {:else if $modal.type === "add_event"}
        <AddEvent
            date={$modal.details?.date}
        />
    {:else if $modal.type === "add_match"}
        <AddMatch
            date={$modal.details?.date}
        />
    {:else if $modal.type === "add_training"}
        <AddTraining
            date={$modal.details?.date}
        />
    {:else if $modal.type === "add_team"}
        <AddTeam/>
    {:else if $modal.type === "add_user"}
        <AddUser/>
<!-- -------------------------------------- -->
    {:else if $modal.type === "add_own_training"}
        <AddOwnTraining
                date={$modal.details?.date}
        />
<!-- -------------------------------------- -->
    {:else if $modal.type === "add_choice"}
        <AddChoice/>
    {/if}
</Modal>