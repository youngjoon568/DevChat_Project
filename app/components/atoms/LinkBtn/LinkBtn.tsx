import { LinkBtnWrapper } from "./styles";
import Icon, { icon } from "../Icon/Icon";
import { useRouter } from "next/router";

interface LinkBtnProps extends React.HTMLAttributes<HTMLElement> {
    bgSize?: "l" | "m" | "s";
    bgColor?: string;
    textSize?: "xxxl" | "xxl" | "xl" | "l" | "m" | "s";
    textColor?: string;
    noneBorder?: boolean;
    type?: "read" | "back";
    href?: string;
    icon?: icon;
};

const LinkBtn: React.FC<LinkBtnProps> = ({ bgSize, bgColor, textSize, textColor, noneBorder, type="read", href, icon, children }) => {
    const router = useRouter();

    const handleClick = (e : React.MouseEvent) => {
        if (!(type === "read" && href)) {
            e.preventDefault();

            router.back();
        };
    };

    return (
        <LinkBtnWrapper bgSize={bgSize} bgColor={bgColor} textSize={textSize} textColor={textColor} noneBorder={noneBorder} type={type} href={href || ""} icon={icon} onClick={handleClick}>
            {icon && <Icon icon={icon} />}
            {children}
        </LinkBtnWrapper>
    );
};

export default LinkBtn;