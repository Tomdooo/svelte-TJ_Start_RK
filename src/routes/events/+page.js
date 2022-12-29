// import {token} from "../../stores.js";
// import {PUBLIC_API_URL} from "$env/static/public";
//
// export async function load({fetch}) {
//     let out = {}
//
//     // await token.subscribe(async (token) => {
//     //     const res = await fetch(PUBLIC_API_URL+'/events', {
//     //         method: 'GET',
//     //         credentials: 'include',
//     //         mode: "no-cors",
//     //         headers: {
//     //             // 'Content-Type': 'application/x-www-form-urlencoded',
//     //             'Authorization': 'Bearer ' + token
//     //         }
//     //     })
//     //
//     //     if (res.ok) {
//     //         try {
//     //             out = {
//     //                 fetched: await res.json() || [],
//     //                 token
//     //             }
//     //         }
//     //         catch (e) {}
//     //     }
//     // });
//
//     const res = await fetch(PUBLIC_API_URL+'/events', {
//         method: 'GET',
//         credentials: 'include',
//         mode: "no-cors",
//         headers: {
//             // 'Content-Type': 'application/x-www-form-urlencoded',
//             // 'Authorization': 'Bearer ' + token
//         }
//     })
//
//     out = {
//         fetched: res
//         // token
//     }
//
//     return out
// }