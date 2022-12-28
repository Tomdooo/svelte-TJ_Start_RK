<script>
    import AddUser from "../components/AddUser.svelte";
    import AddEvent from "../components/AddEvent.svelte";
    import AddMatch from "../components/AddMatch.svelte";
    import AddTeam from "../components/AddTeam.svelte";
    import AddTrainings from "../components/AddTrainings.svelte";

    import TableUsers from "../components/TableUsers.svelte";
    import TableEvents from "../components/TableEvents.svelte";
    import TableMatches from "../components/TableMatches.svelte";
    import TableTeams from "../components/TableTeams.svelte";
    import TableTrainings from "../components/TableTrainings.svelte";
</script>

<div>
<AddTrainings/>
    <TableUsers/>
    <TableEvents/>
    <TableMatches/>
    <TableTeams/>
    <TableTrainings/>
</div>

<style>

</style>