const initialAnimation = ({ xPosition = 0, yPosition = 0, scale = 1, opacity = 0 }) => (
    {
        opacity: opacity,
        scale: scale,
        y: yPosition,
        x: xPosition
    }
)

const finalAnimation = ({ delayTime = 100, stiffDuration = 250, dumping = 25, mass = 1 }) => (
    {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        transition: {
            type: 'spring',
            stiffness: stiffDuration,
            damping: dumping,
            mass: mass,
            delay: delayTime,
        }
    }
)

export { initialAnimation, finalAnimation }
