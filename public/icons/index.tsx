interface HandIconProps {
    styles: string,
    width: number,
    height: number
}

export const HominisLogo = ({ styles, width, height }: HandIconProps) => {
    return (
        <svg className={styles} width={width} height={height} viewBox="0 0 92 91" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M91.3257 0.722168H75.8066V17.1222H91.3257V0.722168Z" fill="#6E57FF" />
            <path d="M75.807 53.1111H56.18V33.9777H37.9224V16.6666H56.18V0.722168H0.494141V90.4666H91.326V33.9777H75.807V53.1111Z" fill="#6E57FF" />
            <path d="M91.3257 0.722168H75.8066V17.1222H91.3257V0.722168Z" fill="#FF5A5F" />
            <path d="M75.807 53.1111H56.18V33.9777H37.9224V16.6666H56.18V0.722168H0.494141V90.4666H91.326V33.9777H75.807V53.1111Z" fill="#6E57FF" />
        </svg>
    )
}