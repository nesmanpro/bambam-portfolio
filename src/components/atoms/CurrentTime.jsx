import { useEffect, useState } from 'react';

const CurrentTime = () => {
    const [time, setTime] = useState('');

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const formatted = now.toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: '2-digit',
                second: '2-digit',
                hour12: true,
            });
            setTime(formatted);
        };

        updateTime(); // primera llamada inmediata
        const interval = setInterval(updateTime, 1000);

        return () => clearInterval(interval);
    }, []);

    return <>{time}</>;
};

export default CurrentTime;