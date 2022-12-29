<script>
    let members =[
    ];
</script>

<!-- TODO dodělat menu -->
<form id="login-form" on:click|preventDefault>
    <h2>Nová akce</h2><br>

    <label id="nameAction-label" for="nameAction">Název:</label><br>
    <input type="text" name="nameAction" id="nameAction" placeholder="" required><br>

    <label id="start-label" for="start">Start:</label><br>
    <input type="datetime-local" name="start" id="start" required><br>

    <label id="end-label" for="end">Konec:</label><br>
    <input  type="datetime-local" name="end" id="end" required><br>

    <label for="note">Poznámka:</label><br>
    <input type="text" name="note" id="note" required><br>

    <label for="ministration">Tým:</label><br>
    <select name="ministration" id="ministration" required>
        {#each members as member}
            <option value={member}>{member}</option>
        {/each}
    </select><br>

    <button type="submit">Přidat novou akci</button>
</form>

<style>

</style>