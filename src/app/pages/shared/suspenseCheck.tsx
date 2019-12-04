interface SuspenseCheckProps {
    if: boolean,
    fallback?: () => React.ReactNode,
    children?: React.ReactNode,
}

function SuspenseCheck(props: SuspenseCheckProps) {
    if (!props.if) {
        return props.fallback();
    }

    return props.children;
}

export {
    SuspenseCheck as default,
};
