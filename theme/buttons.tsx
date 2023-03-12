import type { StyleFunctionProps } from '@chakra-ui/styled-system'

export const Button = {
    baseStyle: {
        fontWeight: 'bold'
    },
    variants: {
        solid: (props: StyleFunctionProps) => ({
            bg: props.colorMode === 'dark' ? 'red.100': 'blue: 700'
        })
    }
}