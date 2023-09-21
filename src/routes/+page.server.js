
import { createClient } from "$lib/prismicio"

export async function load({fetch, request}){
    const client = createClient({fetch, request})

    const document = await client.getByUID('home', 'info')

    return document.data
}


// import { createClient } from '$lib/prismicio'

// export async function load({ fetch, request, params }) {
//   const client = createClient({ fetch, request })
//   console.log(params)
//   const document = await client.getAllByType('creators')
//   return document.data
// }