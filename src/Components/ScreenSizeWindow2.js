import useWindowResize from './Hooks/useWindowResize';

export default function ScreenSizeWindow2 () {

    const onSmallScreen = useWindowResize(2500);

    return (
        <div className={onSmallScreen?"Large":'Small'}>
           Your Screen Size {onSmallScreen?"Large":'Small'} !
        </div>
    )
}