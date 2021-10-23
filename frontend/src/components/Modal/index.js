import React from 'react';
import { ModalButton, ModalConfirm, ModalInner, ModalOverlay, ModalWrapper } from './style';

export function Modal({ message, visible, callback }) {
    return (
        <ModalOverlay visible={visible}>
            <ModalWrapper tabIndex="-1" visible={visible}>
                <ModalInner>
                    {message}
                    <ModalButton>
                        <ModalConfirm
                            onClick={()=>callback()}
                        >
                            확인
                        </ModalConfirm>
                    </ModalButton>
                </ModalInner>
            </ModalWrapper>
        </ModalOverlay>
    );
}