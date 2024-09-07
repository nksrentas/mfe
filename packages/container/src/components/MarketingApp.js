import React from 'react';
import { mount as marketingMount } from 'marketing/MarketingApp';


export default () => {
    const ref = React.useRef(null);

    React.useEffect(() => {
        marketingMount({ el: ref.current });
    }, []);

    return <div ref={ref} />;
}