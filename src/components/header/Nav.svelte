<script>
    import {token, user} from "../../stores.js";

    function logout() {
        token.set(null);
        user.set(null);
    }
</script>


<nav>
    <a href="/">/</a>
    <a href="/members">Členové</a>
    <a href="/calendar">Kalendář</a>
    <a href="/events">Události</a>
    <a href="/matches">Zápasy</a>
    <a href="/teams">Tými</a>
    <a href="/trainings">Tréninky</a>
    <button on:click={logout}>logout</button>
</nav>