<script>
    import {token, user} from "../../stores.js";
    import {PUBLIC_API_URL} from "$env/static/public";

    async function logout() {
        const res = await fetch(PUBLIC_API_URL+'/cookies', {
            method: "DELETE",
            credentials: "include",
            headers: {
                "Authorization": `Bearer ${$token}`
            }
        })

        if (!res.ok) {
            alert("Nepodařilo se odhlásit! Chcete-li to udělat manuálně, smažte prosím soubory cookies pro tuto stránku." )
            return
        }

        token.set(null);
        user.set(null);

        return window.location.replace("/login")
    }
</script>


<nav>
    <a href="/">/</a>
    <a href="/members">Členové</a>
    <a href="/calendar">Kalendář</a>
    <a href="/events">Události</a>
    <a href="/matches">Zápasy</a>
    <a href="/teams">Týmy</a>
    <a href="/trainings">Tréninky</a>
    <button on:click={logout}>logout</button>
</nav>