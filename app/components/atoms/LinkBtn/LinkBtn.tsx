import { LinkBtnWrapper } from "./styles";
import Icon from "../Icon/Icon";
import { useRouter } from "next/router";

interface LinkBtnProps extends React.HTMLAttributes<HTMLElement> {
    bgSize?: "xl" | "l" | "m" | "s";
    bgColor?: string;
    textSize?: "xxxl" | "xxl" | "xl" | "l" | "m" | "s";
    textColor?: string;
    border?: boolean;
    box?: boolean;
    type?: boolean;
    href?: string;
    icon?: "left" | "google" | "github";
    iconSize?: "l" | "m" | "s";
};

const LinkBtn: React.FC<LinkBtnProps> = ({ type, href, icon, iconSize, children, ...props }) => {
    const router = useRouter();

    const handleClick = (e : React.MouseEvent) => {
        if (type && !href) {
            e.preventDefault();
            router.back();
        };
    };

    return (
        <LinkBtnWrapper href={href || ""} onClick={handleClick} {...props}>
            {icon && <Icon icon={icon} iconSize={iconSize} />}
            <span>{children}</span>
        </LinkBtnWrapper>
    );
};

export default LinkBtn;