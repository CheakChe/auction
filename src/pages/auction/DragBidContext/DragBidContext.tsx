import React, { FC, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../reducers';

interface DraggedBid {
  ref: HTMLDivElement | null;
}

export const draggedBid: DraggedBid = {
  ref: null,
};

const DragBidContext: FC = () => {
  const { draggedRedemption } = useSelector((root: RootState) => root.purchases);
  const dragRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (dragRef.current) {
      draggedBid.ref = dragRef.current;
    }
  }, []);

  return (
    <div style={{ pointerEvents: 'none', position: 'absolute' }} className="drag-context" ref={dragRef}>
    </div>
  );
};

export default DragBidContext;
