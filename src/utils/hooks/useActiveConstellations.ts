import { constellationBonuses } from '@/data'
import { Bonus } from '@/types/Character'
import { useEffect } from 'react'

export default function useActiveConstellations(
    characterName: string,
    constellation: number,
    setActiveConstellations: (activeConstellations: Bonus[]) => void
) {
    useEffect(() => {
        if (!constellation) {
            setActiveConstellations([])
            return
        }

        const currentConstellationIndex = constellation - 1
        const newActiveConstellations = constellationBonuses[characterName]
            .slice(0, currentConstellationIndex + 1)
            .map((bonus) => ({
                ...bonus,
                currentStacks: 1,
            }))

        setActiveConstellations(newActiveConstellations)
    }, [characterName, constellation, setActiveConstellations])
}
