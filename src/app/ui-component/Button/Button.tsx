import { ReactEventHandler, ReactNode } from "react";
import plus1 from '../../assets/img/icons/12/arrow/plus.png';

type ButtonPropsType = "primary" | "Secondary" | "Tertiary" | "Stock" | "danger"
type ButtonPropsSize = "large" | "medium" | "small" | "xsmall"
type ButtonPropsStock = "blue" | "red" | "cancel" | "correction" | "disabled"
type ButtonPropsState = "default" | "pressed" | "disabled"

// interface ButtonElementButtonTypeSubmitProps {
//     onClick: ReactEventHandler<HTMLButtonElement>;
//     type?:"submit";
// }

// interface ButtonElementButtonTypeButtonProps {
//     onClick: ReactEventHandler<HTMLButtonElement>;
//     type?:"button";
// }

type ButtonElementProps = ButtonElementSharedProps 
// & ButtonElementButtonTypeButtonProps | ButtonElementButtonTypeSubmitProps

export interface ButtonElementSharedProps {

    /**
     * 버튼의 타입을 명시하는 변수 
     * @default primary
     */
    type? : ButtonPropsType;
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
    /**
     * 왼쪽에 아이콘이 추가되어있는 버튼인지 여부
     * @default false
     */
    rightIcon? : boolean;
    /**
     * React children
     */
    children: ReactNode;
    /**
     * disabled 여부
     * 
     * @default false
     */
    disabled? : boolean;
}


function getImgSize(size:ButtonPropsSize){
    let imgSize = 24
    switch(size){
        case "large": 
            imgSize = 24
            break
        case "medium":
            imgSize = 16
            break
        case "small":
            imgSize = 12
            break
        case "xsmall":
            imgSize = 12
            break
    }

    return imgSize
}

export const Button = ({
    type = "primary",
    size = "large",
    disabled = false,
    ...props
}:ButtonElementProps) => {
    const classNames = [
        "button",
        `button-size-${size}`,
    ]

    const contents: ReactNode[] = []

    if(disabled){
        classNames.push('button-state-disabled')
    }else{
        if(type === 'Stock' && props.stock){
            classNames.push(`button-varient-${type}-${props.stock}`)
        } else{
            classNames.push(`button-varient-${type}`)
        }
    }

    //나중에 로직좀 수정할 것.. 일단 되는지 부터 보고
    if(props.leftIcon || props.rightIcon){

        if(props.leftIcon && props.rightIcon){
            const imgFileL = process.env.NEXT_PUBLIC_TEST_URL + `/assets/img/icons/${getImgSize(size)}/arrow/plus.png`;
            const imgFileR = process.env.NEXT_PUBLIC_TEST_URL +  `/assets/img/icons/${getImgSize(size)}/arrow/right.png`
            contents.push(<img src={imgFileL}/>, <span>{props.children}</span>, <img src={imgFileR}/>)
        }else{
            if(props.leftIcon){
                let imgFile = process.env.NEXT_PUBLIC_TEST_URL + `/assets/img/icons/${getImgSize(size)}/arrow/plus.png`
                contents.push(<img src={imgFile}/>, <span>{props.children}</span>)
            }
            if(props.rightIcon){
                let imgFile = process.env.NEXT_PUBLIC_TEST_URL + `/assets/img/icons/${getImgSize(size)}/arrow/right.png`
                contents.push(<span>{props.children}</span>, <img src={imgFile}/>)
            }
        }

    }else{
        contents.push(props.children)
    }


    return(
        <button
            // aria-label="버튼명"
            className={classNames.join(" ")}
        >
            {contents}
        </button>
    )

}

export default Button;