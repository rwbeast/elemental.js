interface VNode {
    type: string;
    props: {};
    children: VNode[];
    node?: HTMLElement | SVGElement;
    key?: any;
}
declare type Props = Record<string, any> | null;
interface VText {
    type: string;
    data: string;
    node?: Text;
}
declare type stringOrNull = string | null;

declare const h: (type: string, props?: Props, ...children: any[]) => VNode;
declare const text: (data: string) => {
    type: string;
    data: string;
};

declare function createRef(current?: any): {
    current: any;
};

declare class Component extends HTMLElement {
    #private;
    props: {};
    rootNode: this | ShadowRoot;
    static propTypes: any;
    set state(newState: any);
    get state(): any;
    setState(newState: any): void;
    connectedCallback(): Promise<void>;
    disconnectedCallback(): void;
    attributeChangedCallback(propName: string, oldValue: stringOrNull, newValue: stringOrNull): void;
    componentDidConnect(): void;
    componentDidDisconnect(): void;
    componentWillLoad(): Promise<void>;
    componentDidLoad(): void;
    componentShouldUpdate(_oldValue?: any, _newValue?: any, _propName?: string): boolean;
    componentWillRender(): Promise<void>;
    componentDidRender(): void;
    render(_state: any, _props: any): VNode | VText;
}

export { Component, createRef, h, text };
