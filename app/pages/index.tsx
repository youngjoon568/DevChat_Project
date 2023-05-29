import useIsLogin from '@/hooks/useIsLogin';
import React from 'react';

const Home: React.FC = () => {
    useIsLogin({ logout: "/sign" });

    return (
        <>
        안녕하세요
        </>
    );
};

export default Home;