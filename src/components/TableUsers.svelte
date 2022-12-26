<script>
    //TODO doplnit z DB
    let members = [
        {
            role: "ADMIN",
            firstName: "Václav",
            lastName: "Buřil",
            username: "vasek",
            team: {
                id: 1 //TODO vyhledat team podle id
            },
        },
        {
            role: "USER",
            firstName: "Tomáš",
            lastName: "Němeček",
            username: "tomas",
            team: {
                id: 2
            },
        }
    ]
</script>

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
                    {member.team.id}
                </td>
                <td id="role-td">
                    {member.role}
                </td>
                <td id="update_table">
                  Upravit
                    <!--  TODO  <a id="update_table" href="/{{this.id}}/update">Upravit</a>-->
                </td>
                <td id="delete-table">
                    Odstranit
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