import {token} from '../../stores.js'
import {redirect} from "@sveltejs/kit";

export async function load() {
    await token.subscribe((value) => {
        if (!value) {
            throw redirect(307, '/login');
        }
    })
}