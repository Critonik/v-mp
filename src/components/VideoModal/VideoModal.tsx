import React, { useEffect } from 'react';
import { VideoInnerWrapper, VideoWrapper } from './VideoModalStyles';
import x from '../../icons/x.svg';

interface IVideoModal {
    closeAction: () => void;
}

const VideoModal: React.FC<IVideoModal> = ({ closeAction, children}) => {

    useEffect(() => {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Esc' || e.key === 'Escape') {
                closeAction();
            }
        });
        return () => {
            document.removeEventListener('keydown', closeAction);
        };
    }, []); // eslint-disable-line

    return (
        <VideoWrapper>
            <VideoInnerWrapper onClick={closeAction}>
                <img className={'close-icon'} onClick={closeAction} src={x} alt={''}/>
                {children}
            </VideoInnerWrapper>
        </VideoWrapper>
    );
};

export default VideoModal;