import React from 'react';
export interface UseSwipeEvents<T> {
    onTouchStart: React.TouchEventHandler<T>;
    onTouchMove: React.TouchEventHandler<T>;
    onTouchEnd: React.TouchEventHandler<T>;
    onTouchCancel: React.TouchEventHandler<T>;
    onPointerDown: React.PointerEventHandler<T>;
    onPointerMove: React.PointerEventHandler<T>;
    onPointerUp: React.PointerEventHandler<T>;
}
export default function useSwipe(dom: React.RefObject<HTMLElement>, length: number): UseSwipeEvents<HTMLElement | null>;
