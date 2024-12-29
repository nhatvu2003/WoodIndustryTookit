declare module '*.svg' {
    import { SvgProps} from 'react-native-svg';
    const content : React.FC<SvgProps>
    export default content;
}
declare module '*.jpg' {
    const content : React.FC<any>
    export default content;
}
declare module '*.png' {
    const content : React.FC<any>
    export default content;
}
declare module '*.jpeg' {
    const content : React.FC<any>
    export default content;
}