import React from 'react';
import styled from 'styled-components';

export const ModalOverlay = styled.div`
    box-sizing: border-box;
    display: ${(props) => (props.visible ? 'block' : 'none')};
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0,0,0,0.6);
    z-index: 99;
`

export const ModalWrapper = styled.div`
    box-sizing: border-box;
    display: ${(props) => (props.visible ? 'block' : 'none')};
    flex-direction: column;
    justify-content: space-around;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 100;
    overflow: auto;
    outline: 0;
    
`

export const ModalInner = styled.div`
    box-sizing: border-box;
    position: relative;
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 6px 0 rgba(0,0,0,0.5);
    background-color: #fff;
    border-radius: 10px;
    width: 360px;
    max-width: 480;
    top: 50%;
    transform: translateY(-50%);
    margin: 0 auto;
    padding: 40px 20px;
`

export const ModalButton = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: right;
`

export const ModalConfirm = styled.button`
    width: 100px;
    height: 50px;
    position: relative;
    align-self: right;
    margin-right: 20px;
    background-color:  #0d6efd;
    border: none;
    border-radius: 4px;
`