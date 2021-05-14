<script>
    import { getCookie, setCookie, refresh } from "./cookieHelper";
    import { onMount } from "svelte";

    let visible = false;
    let cookieKey = "cookieConsentGiven";

    export let descriptionText = "";
    export let closeText = "";
    export let allowButtonText = "";
    export let cookiePolicyUrl = "";
    export let cookiePolicyText = "";

    export let bgColor = "";
    export let descriptionTextColor = "";
    export let closeTextColor = "";
    export let buttonBgColor = "";
    export let buttonTextColor = "";

    export let onCookieConsentAllowed=null;
    
    onMount(async()=>{
        let cookieConsentGiven = getCookie(cookieKey);
        if(!cookieConsentGiven){
            visible = true;
        }
        initCookieConsent();
    });

    export function initCookieConsent(){
        refresh(cookieKey);
    }

    function hide(){
        visible = false;
    }

    function allowButtonClicked(){
        setCookie(cookieKey,true);
        visible = false;
        if(onCookieConsentAllowed){
            onCookieConsentAllowed();
        }
    }

</script>


{#if visible}
    <div class="flex w-full fixed bottom-0 {bgColor} z-20">
        <div class="flex flex-row w-full px-4 md:px-8 lg:px-20 xl:px-24 py-2 md:py-6 items-center justify-between flex-wrap md:flex-nowrap">
            <p class="text-sm pr-0 md:pr-8 {descriptionTextColor} mt-4 md:mt-0">{descriptionText} <a class="underline cursor-pointer" href={cookiePolicyUrl}>{cookiePolicyText}</a></p>
            <div class="flex flex-row space-x-8 mx-auto md:mx-0 mt-6 md:mt-0 items-center">
                <p on:click={hide} class="text-sm cursor-pointer {closeTextColor} whitespace-nowrap">{closeText}</p>
                <button on:click={()=>allowButtonClicked()} class="py-2 px-4 text-center whitespace-nowrap {buttonBgColor} {buttonTextColor} text-sm rounded-lg focus:outline-none">{allowButtonText}</button>
            </div>
        </div>
    </div>
{/if}