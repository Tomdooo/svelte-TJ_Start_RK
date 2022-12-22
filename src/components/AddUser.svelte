<script>
    // doplnit z databaze
    let teams =[
        "a","b","c","Neregistrovaný"
    ];

</script>

<!-- TODO dodělat menu -->
<form id="login-form" on:click|preventDefault>
    <h2>Nový člen</h2><br>

    <label id="firstName-label" for="firstName">Jméno</label><br>
    <input type="text" name="firstName" id="firstName" placeholder="" required><br>

    <label id="lastName-label" for="lastName">Příjmení</label><br>
    <input type="text" name="lastName" id="lastName" placeholder="" required><br>

    <label id="username-label" for="username">Uživatelský jméno</label><br>
    <input type="text" name="username" id="username" placeholder="" required><br>

    <label for="member">Člen:</label><br>
    <select name="member" id="member" required>
        {#each teams as team}
            <option value={team}>{team}</option>
            {/each}
    </select><br>

    <label for="role">Role</label><br>
    <select name="role" id="role" required>
        <option value="USER">Uživatel</option>
        <option value="ADMIN">Administrator</option>
        <option value="MODERATOR">Moderator</option>
    </select><br>

    <label for="password">Heslo:</label><br>
    <input type="password" name="password" id="password" required><br>

    <button type="submit">Přidat nového uživatele</button>
</form>

<style>
    form {
        background-color: #ffffff;
        width: 35%;
        margin: 30px auto;
        text-align: center;
        padding: 20px 0 0 0;
        border-radius: 4px;
        box-shadow: 0px 30px 50px 0px rgba(29, 58, 231, 0.2);
    }
    label {
        padding: 5px;
        font-weight: bold;
        font-size: 20px;
        margin: 5px;
        text-align: left;
        display: inline-block;
    }

    input {
        width: 50%;
        padding: 0 0 0 10px;
        margin: 5px;
        color: #0a0a0a;
        border: 1px solid #3d1dbe;
        font-style: normal;
        font-size: 16px;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        position: relative;
        background: none;
        line-height: 30px;
    }

    select {
        width: 50%;
        padding: 0 0 0 10px;
        margin: 10px;
        color: #8a8b8e;
        border: 1px solid #3d1dbe;
        font-style: normal;
        font-size: 16px;
        appearance: menulist-button;
        position: relative;
        background: none;
        line-height: 30px;
    }

</style>