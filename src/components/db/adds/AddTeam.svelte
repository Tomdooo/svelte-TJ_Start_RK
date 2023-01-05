<script>
    /********************************************/

    import {PUBLIC_API_URL} from "$env/static/public";
    import {modal, reloadData, token} from "../../../stores.js";

    export let data = {
        name: "",
    }

    async function add() {
        if (data.name.length === 0) return;   // check if is not empty (required)

        const res = await fetch(PUBLIC_API_URL + `/teams`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${$token}`,
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(data)
        })

        if (!res.ok) {
            return alert("Přidání se nepodařilo, zkuste to znovu.")
        }

        reloadData.set(true)
        modal.set({show: false, type: "", details: {}})
    }
</script>


<form>
    <h2>Nový tým</h2><br>

    <label id="name-label" for="name">Název:</label><br>
    <input type="text" name="name" id="name" bind:value={data.name} required><br>

    <button type="button" on:click={add}>Přidat tým</button>
</form>

