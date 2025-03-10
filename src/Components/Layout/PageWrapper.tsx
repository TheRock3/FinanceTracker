import { ReactNode } from 'react';

type Props = {
    state?: string,
    children: ReactNode
};

const PageWrapper = (props: Props): ReactNode=>{
    return(
        <div>{props.children}</div>
    )
}

export default PageWrapper;