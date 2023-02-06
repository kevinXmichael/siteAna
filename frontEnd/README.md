// client colors //

mediumGray #FFFFFF
lightGrey #E1E3E5
darkGrey #3A3A3A
lightYellow #F3E9BD
black #000000
fullYellow #F6CD4C

// kev //

Kev. Whaddaup? Hope you´re fine.
This is the issue:

1. Data is being loaded from +layout.ts and loaded inside +layout.svelte. Therefore, all children pages inherit this data.
2. +page.svelte has a carroussel code, that works when coded inside it.
3. Whenever I build a component out of it, and import indo +page.svelte, it crashes the app.
4. That said: what is the correct way to load data previously fetched inside a component? Tried export let data, no sucess.
   :)
