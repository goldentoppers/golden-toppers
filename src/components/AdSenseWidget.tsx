import { useEffect } from 'react';

// Tells TypeScript that adsbygoogle exists on the window object
declare global {
    interface Window {
        adsbygoogle: Array<Record<string, unknown>>;
    }
}

interface AdSenseWidgetProps {
    adSlot: string;
}

const AdSenseWidget = ({ adSlot }: AdSenseWidgetProps) => {
    useEffect(() => {
        try {
            // Initialize the ad unit
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
            console.error("AdSense error:", e);
        }
    }, []);

    return (
        <div style={{ overflow: 'hidden', minHeight: '90px', margin: '15px 0' }}>
            <ins className="adsbygoogle"
                style={{ display: 'block' }}
                data-ad-client="ca-pub-5195245211762513"
                data-ad-slot={adSlot}
                data-ad-format="auto"
                data-full-width-responsive="true">
            </ins>
        </div>
    );
};

export default AdSenseWidget;
