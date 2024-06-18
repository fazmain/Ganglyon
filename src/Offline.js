import React, { useState, useEffect } from 'react';

const OfflineNotice = () => {
    const [isOffline, setIsOffline] = useState(!navigator.onLine);

    useEffect(() => {
        const handleNetworkChange = () => {
            setIsOffline(!navigator.onLine);
        };

        window.addEventListener('online', handleNetworkChange);
        window.addEventListener('offline', handleNetworkChange);

        // Clean-up function
        return () => {
            window.removeEventListener('online', handleNetworkChange);
            window.removeEventListener('offline', handleNetworkChange);
        };
    }, []);

    if (!isOffline) {
        return null;
    }

    return (
        <div style={{ backgroundColor: 'red', color: 'white', textAlign: 'center', padding: '10px' }}>
            You are currently offline. Some features may not be in use.
        </div>
    );
};

export default OfflineNotice;
