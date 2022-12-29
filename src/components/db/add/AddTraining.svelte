<script>
</script>

<!-- TODO dodělat menu -->
<form id="login-form" on:click|preventDefault>
    <h2>Nová trénning</h2><br>

<!--    TODO nevím co dát header-->
    <label for="header">Typ tréningu:</label><br>
    <input type="text" name="header" id="header" placeholder="Klasický tréning" required><br>

    <label id="start-label" for="start">Start:</label><br>
    <input type="datetime-local" name="start" id="start" required><br>

    <label id="end-label" for="end">Konec:</label><br>
    <input  type="datetime-local" name="end" id="end" required><br>

    <label for="note">Poznámka:</label><br>
    <input type="text" name="note" id="note" required><br>

    <label for="track">Dráha:</label><br>
    <select name="track" id="track" required>
        <option value="1.">1.</option>
        <option value="2.">2.</option>
        <option value="3.">3.</option>
        <option value="4.">4.</option>
    </select><br>

    <button type="submit">Přidat tréning</button>
</form>

<style>

</style>