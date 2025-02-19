'use client';
import React, { ReactNode, useCallback, useEffect } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import close from '../../../../public/icon/close.svg';
import Image from 'next/image';
import cl from './Modal.module.scss';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button/Button';
import { Portal } from '@/shared/ui/Portal/Portal';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
    isMounted?: boolean;
}

const Modal = (props: ModalProps) => {
    const {
        className = '',
        children,
        isOpen = false,
        onClose,
        isMounted,
    } = props;

    const mods: Record<string, boolean> = {
        [cl.opened]: isOpen,
    };

    const closeHandler = useCallback(() => {
        if (onClose) {
            onClose();
        }
    }, [onClose]);

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    const onKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                closeHandler();
            }
        },
        [closeHandler]
    );

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    return (
        <Portal element={document.body}>
            {isOpen && (
                <div className={classNames(cl.Modal, mods, [className])}>
                    <div className={cl.overlay} onClick={closeHandler}>
                            <Button
                                title='Закрыть'
                                onClick={onClose}
                                square
                                size={ButtonSize.XL}
                                theme={ButtonTheme.CLEAR}
                                className={cl.close}
                            >
                                <Image
                                    src={close}
                                    className={cl.close}
                                    alt='закрыть'
                                />
                            </Button>

                        <div className={cl.content} onClick={onContentClick}>
                            {children} 
                        </div>
                    </div>
                </div>
            )}
        </Portal>
    );
};

export default Modal