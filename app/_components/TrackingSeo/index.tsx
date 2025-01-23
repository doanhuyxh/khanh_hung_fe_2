import fetchData from "@/app/_libs/configs/fetchDataServer";
import Script from "next/script";

export default async function TrackingSeo() {

    const tracking = {
        google_analytics: "",
        facebook_pixel: "",
        tiktok_pixel: "",
    }
    const time = new Date().getMilliseconds();
    const response = await fetchData('/public/get-tracking-config?time=' + time, "");
    const data = response.data
    for (const key in tracking) {
        tracking[key] = data[key];
    }


    return <>

        {/* Facebook Pixel */}
        <Script
            id="facebook-pixel"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
                __html: `
                    !function(f,b,e,v,n,t,s)
                    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                    n.queue=[];t=b.createElement(e);t.async=!0;
                    t.src=v;s=b.getElementsByTagName(e)[0];
                    s.parentNode.insertBefore(t,s)}(window, document,'script',
                    'https://connect.facebook.net/en_US/fbevents.js');
                    fbq('init', '${tracking.facebook_pixel}');
                    fbq('track', 'PageView');
                `,
            }}
        />
        <noscript>
            <img
                height="1"
                width="1"
                style={{ display: 'none' }}
                src={`https://www.facebook.com/tr?id=${tracking.facebook_pixel}&ev=PageView&noscript=1`}
                alt=""
            />
        </noscript>


        <Script async src={`https://www.googletagmanager.com/gtag/js?id=${tracking.google_analytics}`} strategy="afterInteractive" />
        <Script
            id="google-analytics"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
                __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${tracking.google_analytics}');
            `,
            }}
        />
    </>

}