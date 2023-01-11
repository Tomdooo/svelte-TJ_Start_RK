<script>
    import {modal, user} from "../../../stores.js";
    import {createEventDispatcher} from "svelte";
    const dispatch = createEventDispatcher();
    export let members = [];
</script>


<div id="table-list">
    <table id="users_table">
        <tr>
            <th>Jméno</th>
            <th>Příjmení</th>
            <th>Username</th>
            <th>Tým</th>
            <th>Role</th>
            {#if $user.scope === "ADMIN"}
                <th></th>
                <th></th>
            {/if}
        </tr>
        {#each members as member}
            <tr>
                <td id="fistName-td">
                    {member.firstName}
                </td>
                <td id="lastName-td">
                    {member.lastName}
                </td>
                <td id="userName-td">
                    {member.username}
                </td>
                <td id="team-td">
                    {#if member.team === null}
<!--                        Tým vymazán-->
                        -
                    {:else}
                        {member.team.name}
                    {/if}
                </td>
                <td id="role-td">
                    {member.role}
                </td>
                {#if $user.scope === "ADMIN"}
                    <td id="update_table" on:click={() => modal.set({show: true, type: "update_user", details: member})}>
                        Upravit
                    </td>
                    <td id="delete-table" on:click={() => dispatch('del', member)}>
                        Odstranit
                    </td>
                {/if}
            </tr>
        {/each}
    </table>
</div>


<style>
    /*#th-training {*/
    /*    width: 45%;*/
    /*}*/

    #fistName-td, #lastName-td, #userName-td,
    #team-td, #role-td {
        background-color: #ffffff;
        border: #333 1px solid;
        border-collapse: collapse;
    }
</style>