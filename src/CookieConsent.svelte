<script>
    import { getCookie, setCookie } from "./cookieHelper";
    import { onMount } from "svelte";

    let visible = true;

    export let descriptionText;
    export let closeText;
    export let allowButtonText;
    export let cookiePolicyUrl;
    export let cookiePolicyText;

    export let bgColor;
    export let descriptionTextColor;
    export let closeTextColor;
    export let buttonBgColor;
    export let buttonTextColor;
    
    onMount(async()=>{

        let cookieConsentGiven = getCookie("cookieConsentGiven");

        if(cookieConsentGiven == "true"){
            visible = false;
        }
    });


    function hide(){
        visible = false;
    }

    function allowButtonClicked(){
        setCookie("cookieConsentGiven",true);
        visible = false;
    }

</script>


{#if visible}
    <div class = "bg-red-500" on:click={hide}>
        CookieConsent
    </div>
    <div class="flex w-full fixed bottom-0 {bgColor} z-20">
        <div class="flex flex-row w-full px-10 md:px-20 py-6 items-center justify-between flex-wrap md:flex-nowrap">
            <p class="pl-0 md:pl-20 text-sm pr-0 md:pr-16 {descriptionTextColor} mt-4 md:mt-0">{descriptionText} <a class="underline cursor-pointer" href={cookiePolicyUrl}>{cookiePolicyText}</a></p>
            <div class="flex flex-row space-x-6 mx-auto md:mx-0 mt-6 md:mt-0 items-center">
                <p on:click={hide} class="text-sm cursor-pointer {closeTextColor} whitespace-nowrap">{closeText}</p>
                <button on:click={()=>allowButtonClicked()} class="py-2 px-4 text-center flex-shrink-0 {buttonBgColor} {buttonTextColor} text-sm rounded-lg focus:outline-none">{allowButtonText}</button>
            </div>
        </div>
    </div>
{/if}