<script>
    // TODO doplnit z databaze
    let teams =[
        "a","b","c","Neregistrovaný"
    ];

</script>

<!-- TODO dodělat menu -->
<form id="login-form" on:click|preventDefault>
    <h2>Nový zápas</h2><br>

    <label for="header">Liga:</label><br>
    <select name="header" id="header" required>
        <option>2.Liga</option>
        <option>Divivze</option>
        <option>Východočeská soutěž B</option>
        <option>Neregistrování 1.liga</option>
        <option>Neregistrování 2.liga</option>
        <option>Neregistrování 8.liga</option>
    </select><br>

    <label id="homeTeam-label" for="homeTeam">Domácí:</label><br>
    <select name="team" id="homeTeam" required>
        {#each teams as team}
            <option value={team}>{team}</option>
        {/each}
    </select><br>

    <label id="awayTeam-label" for="awayTeam">Hosté:</label><br>
    <select name="team" id="awayTeam" required>
        {#each teams as team}
            <option value={team}>{team}</option>
        {/each}
    </select><br>


    <label id="start-label" for="start">Start:</label><br>
    <input type="datetime-local" name="start" id="start" required><br>

    <label for="note">Poznámka:</label><br>
    <input type="text" name="note" id="note" required><br>

    <button type="submit">Přidat nový zápas</button>
</form>

<style>

</style>