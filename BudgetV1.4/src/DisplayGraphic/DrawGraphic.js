import React, { useEffect, useRef, useState } from 'react';
import useTotal from './total';
import { useRenderContext } from '../Context/ReRenderList';
function DrawGraphic( list ) {
    const canvasRef = useRef(null);
    const {amRendering} = useRenderContext();
    const [hoveredSection, setHoveredSection] = useState(null);
    const disp = ['Groceries', 'Gas', 'Resteraunts', 'Clothes', 'Suppliments', 'LivingExpenses', 'Other'];
    const temp = useTotal(list.list);
    const { Groceries, Gas, Resteraunts, Clothes, Suppliments, LivingExpenses, Other } = temp;
    const sizes = [Groceries, Gas, Resteraunts, Clothes, Suppliments, LivingExpenses, Other];
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const radius = 100;

        const colors = ['#2233ff', '#33FF57', '#5733FF', '#FFFF33', '#FF33FF', '#33FFFF', '#FF5733'];
     //   const sizes = [Groceries, Gas, Resteraunts, Clothes, Suppliments, LivingExpenses, Other];

        const handleMouseOver = (event) => {
            const rect = canvas.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top

            // Calculate the angle of the mouse position relative to the center
            const angle = Math.atan2(y - centerY, x - centerX);
            const normalizedAngle = angle < 0 ? 2 * Math.PI + angle : angle;

            // Determine which section the mouse is over
            let startAngle = 0 //-0.5 * Math.PI;
            for (let i = 0; i < sizes.length; i++) {
                const endAngle = startAngle + (sizes[i] / 100) * (2 * Math.PI);
                if (normalizedAngle >= startAngle && normalizedAngle <= endAngle) {
                    setHoveredSection(i);
                    return;
                }
                startAngle = endAngle;
            }

            // Reset hovered section if not over any section
          
        };

        // Add event listener for mouse over
        canvas.addEventListener('mousemove', handleMouseOver);

        // Draw sections
        let startAngle = 0 // -0.5 * Math.PI;
        for (let i = 0; i <sizes.length; i++) {
            const endAngle = startAngle + (sizes[i] / 100) * (2 * Math.PI);
            ctx.beginPath();
            ctx.moveTo(centerX, centerY);
            ctx.arc(centerX, centerY, radius, startAngle, endAngle);
            ctx.closePath();
            ctx.fillStyle = colors[i % colors.length];
            ctx.fill();

            startAngle = endAngle;
        }

        // Cleanup
        return () => {
            canvas.removeEventListener('mousemove', handleMouseOver);
        };
    }, [temp, amRendering]);
    // works need to decide on graphic and what to do with it
    return (
        <div>
                      {hoveredSection !== null && (
                <div >
                   {disp[hoveredSection]}: { Math.round(sizes[hoveredSection])}%
               
                </div>
            )}
            <canvas ref={canvasRef} width={400} height={400}></canvas>
  
        </div>
    );
}

export default DrawGraphic;
