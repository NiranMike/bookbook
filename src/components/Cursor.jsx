import { useState, useEffect } from 'react';
const Cursor = () => {

    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateCursorPosition = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
        };

        document.addEventListener('mousemove', updateCursorPosition);

        return () => {
            document.removeEventListener('mousemove', updateCursorPosition);
        };
    }, []);

  return (
    <div style={{ left: position.x, top: position.y }} className="h-[20px] animate-pulse  fixed pointer-events-none -translate-x-1/2 -translate-y-1/2 transform z-[99999] inset-0 w-[20px] bg-[#F2BD9E] rounded-[50%]" />
  )
}

export default Cursor