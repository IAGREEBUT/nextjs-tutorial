import { ReactEventHandler, ReactNode } from "react";

type ButtonPropsType = "primary" | "scondary" | "tertiary" | "stock"
type ButtonPropsSize = "large" | "medium" | "small" | "xsmall"
type ButtonPropsStock = "blue" | "red" | "cancel" | "correction" | "disabled"
type ButtonPropsState = "default" | "pressed" | "disabled"

interface ButtonElementButtonTypeSubmitProps {
    onClick: ReactEventHandler<HTMLButtonElement>;
    type?:"submit";
}

interface ButtonElementButtonTypeButtonProps {
    onClick: ReactEventHandler<HTMLButtonElement>;
    type?:"button";
}

type ButtonElementProps = ButtonElementSharedProps &
    ButtonElementButtonTypeButtonProps | ButtonElementButtonTypeSubmitProps

export interface ButtonElementSharedProps {

    /**
     * 버튼의 타입을 명시하는 변수 
     * @default primary
     */
    btnType? : ButtonPropsType;
    /**
     * 버튼의 사이즈  
     * @default large
     */
    size? : ButtonPropsSize;
    /**
     * type이 stock인 경우에만 사용되는 변수  
     * @default null
     */
    stock? : ButtonPropsStock;
    /**
     * 버튼의 상태
     * @default default
     */
    state? : ButtonPropsState;
    /**
     * 왼쪽에 아이콘이 추가되어있는 버튼인지 여부
     * @default false
     */
    leftIcon? : boolean;

}

export const Button = ({
    btnType = "primary",
    size = "large",
    ...props
}:ButtonElementProps) => {
    const classNames = [
        "button",
        `button-size-${size}`,
        `button-varient-${btnType}`
    ]

    const contents: ReactNode[] = []

    return (
        
    )


}