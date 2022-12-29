<script>
    let deleteId = {
        id:1

    };

    export let members = [
        // {
        //     id:1,
        //     role: "ADMIN",
        //     firstName: "Václav",
        //     lastName: "Buřil",
        //     username: "vasek",
        //     team: {
        //         id: 1 //TODO vyhledat team podle id
        //     },
        // },
        // {
        //     id:2,
        //     role: "USER",
        //     firstName: "Tomáš",
        //     lastName: "Němeček",
        //     username: "tomas",
        //     team: {
        //         id: 2
        //     },
        // },
        // {
        //     id:3,
        //     role: "USER",
        //     firstName: "Tomáš",
        //     lastName: "Němeček",
        //     username: "tomas",
        //     team: {
        //         id: 2
        //     },
        // }
    ];

    const setName = (id) => {deleteId.id = id; console.log(deleteId.id)} ;


    //name =  document.getElementById("userName-td").value();

    import { writable } from 'svelte/store';
    import Modal, {bind} from 'svelte-simple-modal';
    import Popup from './PopupDeleteUser.svelte';

    const modal = writable(null);
    const showModal = (name) => modal.set(bind (Popup, {name: name}));

    // import Modal from './Modal.svelte';
    //
     let showModalB = false;
</script>


{#if showModalB}
    <Modal on:close="{() => showModalB = false}">
        {showModal.call()}
    </Modal>
{/if}


<div id="table-list">
    <table id="users_table">

        <tr>
            <th>Jméno</th>
            <th>Příjmení</th>
            <th>Username</th>
            <th>Tým</th>
            <th>Role</th>
            <th></th>
            <th></th>
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
                    {member.team.name}
                </td>
                <td id="role-td">
                    {member.role}
                </td>
                <td id="update_table">
                  Upravit
                    <!--  TODO  <a id="update_table" href="/{{this.id}}/update">Upravit</a>-->
                </td>
                <td id="delete-table">


                        <a on:click={() => {setName(member.id) ;showModalB = true}}>Odstranit</a>
<!--                        {#if member.id === deleteId.id}-->
<!--                            <Modal show={$modal}>-->
<!--                        <a on:click={() => {showModal(member.username)}}>Odstranit</a>-->
<!--                            </Modal>-->
<!--                        {/if}-->


                    <!--  TODO  <a id="delete-table" href="/{{this.id}}/delete">Odstranit</a>-->
                </td>
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