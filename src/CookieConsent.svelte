<script>
    import { getCookie, setCookie } from "./cookieHelper";
    import { onMount } from "svelte";

    let visible = true;

    onMount(async()=>{

        console.log("CookieConsent onMount");
        //setCookie("deneme",123);
        let cookie = getCookie("deneme");
        console.log(cookie);

    });


    function hide(){
        visible = false;
    }



</script>


{#if visible}
    <div on:click={hide}>
        CookieConsent
    </div>
{/if}