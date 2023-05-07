import React from 'react';
import { PublicHeaderWrapper } from './styles';
import Text from '@/components/atoms/Text/Text';
import LinkBtn from '@/components/atoms/LinkBtn/LinkBtn';

interface PublicHeaderProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
};

const PublicHeader: React.FC<PublicHeaderProps> = ({ children }) => {
    return (
        <PublicHeaderWrapper>
            <LinkBtn bgSize={"s"} icon={"left"} iconSize={"l"} boxType={true} border={true} type={true} />
            <Text textSize={"xl"}>{children}</Text>
        </PublicHeaderWrapper>
    );
};

export default PublicHeader;