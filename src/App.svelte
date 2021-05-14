<script>
    import CookieConsent, {initCookieConsent} from "./CookieConsent.svelte";
    import { removeCookie } from "./cookieHelper";
    import { onMount } from "svelte";


    onMount(async()=>{
        initCookieConsent();
    });

    function onRemoveCookieClicked(){
        removeCookie("cookieConsentGiven");
        alert("Cookie Removed!");
    }

    function testOnCookieConsentAllowed(){
        console.log("testOnCookieConsentAllowed");
    }

</script>


<style global>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>
<div on:click={onRemoveCookieClicked}>Remove Cookie</div>
<CookieConsent bgColor={"bg-gray-100"} allowButtonText={"İzin Ver"} buttonTextColor={"text-white"} buttonBgColor={"bg-blue-600"} cookiePolicyUrl={"https://www.google.com/"} closeText={"Kapat"} descriptionTextColor={"text-gray-600"} descriptionText={"Deneyiminizi geliştirmek, trafiğimizi analiz etmek ve güvenlik ile pazarlama amaçları için internet sitelerimizde hem kendi çerezlerimizi hem de üçüncü taraf çerezlerini kullanıyoruz."} cookiePolicyText={"Daha fazla bilgi için Çerez Politikamıza bakın."} closeTextColor={"text-blue-600"} />