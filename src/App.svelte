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

<CookieConsent bgColor={"bg-gray-300"} allowButtonText={"İzin Ver"} buttonTextColor={"text-white"} buttonBgColor={"bg-blue-600"} cookiePolicyUrl={"https://www.google.com/"} closeText={"Kapat"} descriptionTextColor={"text-gray-600"} descriptionText={"Deneyiminizi geliştirmek, trafiğimizi analiz etmek ve güvenlik ile pazarlama amaçları için internet sitelerimizde hem kendi çerezlerimizi hem de üçüncü taraf çerezlerini kullanıyoruz."} cookiePolicyText={"Daha fazla bilgi için Çerez Politikamıza bakın."} closeTextColor={"text-blue-600"} />


<div class = "h-36 w-36 bg-green-500">Green Box</div>