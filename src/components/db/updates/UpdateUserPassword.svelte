<script>
    import {modal, reloadData, token, user} from "../../../stores.js";
    import {PUBLIC_API_URL} from "$env/static/public";

    export let data
    export let password

    let canUpdate = true

    async function update() {
        if (!canUpdate) return;
        canUpdate = false

        let body = {
            id: data.id,
            password
        }

        const res = await fetch(PUBLIC_API_URL+'/members/password', {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${$token}`
            },
            body: JSON.stringify(body)
        })

        if (!res.ok) {
            alert("Úprava se nepovedla, zkuste to znovu.")
            return canUpdate = true
        }

        modal.set({show: false, type: "", details: {}})
    }

</script>


<form>
    <label for="username">Přihlašovací jméno:</label><br>
    <input  type="text" name="username" id="username" value={data.username} disabled><br>

    <label for="newPassword">Nové heslo:</label><br>
    <input type="password" name="newPassword" id="newPassword" bind:value={password} required><br>

    <button type="button" on:click={update}>Změnit heslo</button>
</form>