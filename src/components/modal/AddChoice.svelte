<script>
    import {modal, user} from "../../stores.js";
</script>

<form>
    <h2>Přidat</h2><br>

    <button type="button" on:click={() => modal.set({show: true,type: "add_own_training",details: $modal.details})}>Vlastní trénink</button><br/>

    {#if $user.scope === "ADMIN" || $user.scope === "MODERATOR"}
        <button type="button" on:click={() => modal.set({show: true,type: "add_training",details: $modal.details})}>Trénink</button>
        <button type="button" on:click={() => modal.set({show: true,type: "add_event",details: $modal.details})}>Akci</button>
        <button type="button" on:click={() => modal.set({show: true,type: "add_match",details: $modal.details})}>Zápas</button>
    {/if}
</form>