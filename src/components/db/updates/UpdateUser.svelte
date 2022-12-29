<script>
    // TODO doplnit z databaze
    let teams =[
        "a","b","c","Neregistrovaný"
    ];

</script>

<!-- TODO dodělat menu -->
<form id="login-form" on:click|preventDefault>
    <h2>Nový člen</h2><br>

    <label id="firstName-label" for="firstName">Jméno:</label><br>
    <input type="text" name="firstName" id="firstName" placeholder="" required><br>

    <label id="lastName-label" for="lastName">Příjmení:</label><br>
    <input type="text" name="lastName" id="lastName" placeholder="" required><br>

    <label id="username-label" for="username">Uživatelský jméno:</label><br>
    <input type="text" name="username" id="username" placeholder="" required><br>

    <label for="team">Tým:</label><br>
    <select name="team" id="team" required>
        {#each teams as team}
            <option value={team}>{team}</option>
            {/each}
    </select><br>

    <label for="role">Role:</label><br>
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
</style>