<script>
    import {user} from "../../../stores.js";
</script>


<form>
    <h2>Detail člena</h2><br>

    <label for="firstName">Jméno:</label><br>
    <input type="text" name="firstName" id="firstName" value={$user.firstName} disabled><br>

    <label id="lastName-label" for="lastName">Příjmení:</label><br>
    <input type="text" name="lastName" id="lastName" value={$user.lastName} disabled><br>

    <label for="team">Tým:</label><br>
    <input type="text" name="team" id="team" value={$user.teamName || "-"} disabled><br>

    <label for="username">Přihlašovací jméno:</label><br>
    <input  type="text" name="username" id="username" value={$user.username} disabled><br>

    <label for="role">Role:</label><br>
    <input type="text" name="role" id="role" value={$user.scope} disabled><br>
</form>