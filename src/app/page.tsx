import Image from 'next/image';
import Button from './ui-component/Button/Button';

export default function Home() {
  return <>
    Hello. Nest.js


<Button
    type="Stock"
    size="large"
    stock="correction"
    state="default"
    leftIcon
    rightIcon
>
    {"버튼명"}
</Button>

<Button
    type="Stock"
    size="medium"
    stock="red"
    state="default"
    leftIcon
    rightIcon
>
    {"버튼명"}
</Button>


<Button type="Tertiary" size="large" state="default" leftIcon rightIcon>
    {"버튼명"}
</Button>


<Button type="Secondary" size="medium" state="pressed" rightIcon>
    {"버튼명"}
</Button>


<Button type="Secondary" size="medium" state="pressed">
    {"버튼명"}
</Button>

  </>;
}
