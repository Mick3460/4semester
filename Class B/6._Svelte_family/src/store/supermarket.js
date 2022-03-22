import {writable } from "svelte/store"

export const supermarket = writable({
    apples:60,
    tomatoes:55,
    milk: 120,
    candy:14,
    
});
