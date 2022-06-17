import useWindowResize from './Hooks/useWindowResize';

export default function ScreenSizeWindow () {

    const onSmallScreen = useWindowResize(1000);

    return (
        <div>
           Your Screen Size {onSmallScreen?"Large":'Small'} !
        </div>
    )
}