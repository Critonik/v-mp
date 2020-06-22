import styled from 'styled-components';

export const VideoWrapper = styled.section`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0,0,0,.3);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 5000;
`;


export const VideoInnerWrapper = styled.div`
    position: absolute;
    outline: none;
    border-radius: 4px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 80%;
    justify-content: center;
    align-items: center;
    
    .close-icon {
        width: 40px;
        height: 40px;
        top: 0;
        right: 0;
        cursor: pointer;
        align-self: flex-end;
    }
`;
