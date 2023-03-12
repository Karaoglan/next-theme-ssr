import { Box, Button } from "@chakra-ui/react"

export const CustomCard = () => {
    return (
        <Box bg="white">
            SELAM CARD
            <Button variant={'solid'} />
            <Box border={'1px'} borderColor={'primary'} m={2}>SELAM MARGIN</Box>
        </Box>
    )
}