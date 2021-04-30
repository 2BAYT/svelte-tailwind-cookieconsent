<script>
    import CookieConsent from "./CookieConsent.svelte";
    import { onMount } from "svelte";
    
    
    onMount(async()=>{

        console.log("App onMount");

    });

</script>


<style global>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>

<CookieConsent/>


<div class = "h-36 w-36 bg-green-500">Green Box</div>