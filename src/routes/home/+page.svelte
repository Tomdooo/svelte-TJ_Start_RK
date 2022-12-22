<script>
    import {token} from "../../stores.js";
    import {redirect} from "@sveltejs/kit";

    console.log($token)
    if ($token === null) {
        throw redirect(303, "/login")
    }
</script>

ahoj