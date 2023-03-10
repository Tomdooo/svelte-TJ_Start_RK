import {redirect} from "@sveltejs/kit";
import {PUBLIC_API_URL} from "$env/static/public";

// export const prerender = false;
// export const ssr = false;

/** @type {import('./$types').LayoutServerLoad} */
export async function load({cookies, route, fetch}) {
    const userBase64 = cookies.get("jwt_payload");

    if (route.id !== '/login' && !userBase64) {
        throw redirect(303, "/login");
    }

    if (userBase64) {
        const res = await fetch(PUBLIC_API_URL+'/token', {
            method: "POST",
            credentials: "include"
        })

        if (!res.ok) {
            return;
        }

        return {
            token: await res.text(),
            user: JSON.parse(Buffer.from(userBase64, "base64").toString('utf-8'))
        }
    }
}