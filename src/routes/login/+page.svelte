<script>
    let body = {
        username: "hej",
        password: ""
    }

    async function submitForm() {

    }
</script>


<form on:click|preventDefault={submitForm}>
    <label>Uživatelské jméno: <input type="text" bind:value={body.username} /></label>
    <label>Heslo: <input type="password" value="" /></label>
    <button type="submit">Login</button>
</form>


<style>
    form {
        display: flex;
        flex-direction: column;
    }
</style>