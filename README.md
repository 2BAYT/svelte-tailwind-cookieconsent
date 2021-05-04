## Installation
`npm install svelte-tailwind-cookieconsent`

## Usage
```svelte
import CookieConsent from "svelte-tailwind-cookieconsent/src";

<CookieConsent 
    allowButtonText={"Allow"} 
    closeText={"Close"} 
    descriptionText={"We are using cookies to improve your experience  "} 
    cookiePolicyText={"Learn More"} 
    cookiePolicyUrl={"https://www.example.com/"} 
    bgColor={"bg-gray-200"} 
    buttonTextColor={"text-white"} 
    closeTextColor={"text-green-500"}
    buttonBgColor={"bg-green-500"} 
    descriptionTextColor={"text-gray-600"} 
/>
```

## Notes
If you are purging unused tailwind classes, don't forget to exclude classes used in src/CookieConsent.svelte
