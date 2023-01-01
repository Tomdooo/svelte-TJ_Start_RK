<script>
    import {token, user} from "../../stores.js";
    import {PUBLIC_API_URL} from "$env/static/public";
    import {page} from '$app/stores'
    import {onMount} from "svelte";

    let path;

    $: path = $page.url.pathname;

    async function logout() {
        const res = await fetch(PUBLIC_API_URL + '/cookies', {
            method: "DELETE",
            credentials: "include",
            headers: {
                "Authorization": `Bearer ${$token}`
            }
        })

        if (!res.ok) {
            alert("Nepodařilo se odhlásit! Chcete-li to udělat manuálně, smažte prosím soubory cookies pro tuto stránku.")
            return
        }

        token.set(null);
        user.set(null);

        return window.location.replace("/login");
    }

    let show = getShow()
    async function getShow() {
        return await $user !== null
    }
</script>

<svelte:head>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
</svelte:head>

{#await show then show}
    {#if show}
        <nav class="topnav" id="myTopnav">
            <a class={path === '/' ? 'active' : ''} href="/">/</a>
            <a class={path === '/members' ? 'active' : ''} href="/members">Členové</a>
            <a class={path === '/calendar' ? 'active' : ''} href="/calendar">Kalendář</a>
            <a class={path === '/events' ? 'active' : ''} href="/events">Události</a>
            <a class={path === '/matches' ? 'active' : ''} href="/matches">Zápasy</a>
            <a class={path === '/teams' ? 'active' : ''} href="/teams">Týmy</a>
            <a class={path === '/trainings' ? 'active' : ''} href="/trainings">Tréninky</a>
            <a id="log-out" class="icon" on:click={logout} style="cursor: pointer">
                Odhlásit se
                <i class="fa fa-sign-out"></i>
            </a>
        </nav>
    {/if}
{/await}

<style>
    .topnav {
        overflow: hidden;
        background-color: #147ECF;
        border: 3px;
        margin-bottom: 15px;
    }

    .topnav a {
        float: left;
        display: block;
        color: #f2f2f2;
        text-align: center;
        padding: 15px 16px;
        text-decoration: none;
        font-size: 17px;
    }

    .topnav a:hover {
        background-color: #ddd;
        color: black;
    }

    #log-out {
        float: right;
    }

    .topnav a.active {
        background-color: #0420aa;
        color: white;
    }

</style>