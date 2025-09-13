import React from 'react'

const LinkedinIcon = ({ size = 20, color = "#fff" }: { size?: number; color?: string }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={color}
            fill={color}
            viewBox="0 0 448 512"
        >
            <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 
                108.1 0 83.5 0 53.8 0 24.1 24.1-.5 53.79-.5c29.9 0 53.8 
                24.6 53.8 54.3 0 29.7-23.9 53.3-53.8 53.3zM447.9 
                448h-92.4V302.4c0-34.7-.7-79.3-48.3-79.3-48.3 0-55.7 
                37.7-55.7 76.7V448h-92.5V148.9h88.8v40.8h1.3c12.4-23.6 
                42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 
                142.3V448z"/>
        </svg>
    )
}

export default LinkedinIcon