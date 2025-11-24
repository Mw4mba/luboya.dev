import React from 'react';

interface GridBackgroundProps {
    className?: string;
}

const GridBackground: React.FC<GridBackgroundProps> = ({ className = '' }) => {
    return (
        <div className={`absolute inset-0 pointer-events-none ${className}`}>
            {/* Subtle grid pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-100"></div>
        </div>
    );
};

export default GridBackground;
