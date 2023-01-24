import React from 'react'
import {Icon, Box, Flex, Text, Heading, Button, HStack, Stack, StackProps} from "@chakra-ui/react"
import {CheckIcon} from "../icons/icons"
export const ListItem =(props: StackProps)=> {
    const{children, ...rest} = props;
    return(
        <HStack>
            <Icon as={CheckIcon} w="22px" h="22px"/>
            <Text>
                {children}

            </Text>

        </HStack>
    )
}


export default function Pricing() {
  return (
    <Box bg="#f0eafb" maxW="994px" margin="auto" mt="-250px" borderRadius="12px" overflow="hidden" 
    boxShadow="0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04);">
        <Flex >
            <Box bg="f0EAFB" p="60px" mt="35px">
            <Text fontWeight="800" fontSize="24px" textAlign="center">
                Premium PRO

            </Text>
            <Heading as="h3" fontSize="60px" textAlign="center" >
                $329

            </Heading>
            <Text color="#171923" fontSize="18px" fontWeight="500" textAlign="center">
                billed just once

            </Text>
            <Button colorScheme="purple" color="white" size="lg" mt="24px" w="282px">
                Get Started

            </Button>
            </Box>
            <Box p="60px" fontSize="18px" bg="white">
                <Text>
                Access these features when you get this pricing package for your business.
                </Text>
                <Stack as="ul" spacing="20px" pt="24px">
                    <ListItem>International calling and messaging API</ListItem>
                    <ListItem>Additional phone numbers</ListItem>
                    <ListItem>Automated messages via Zapier</ListItem>
                    <ListItem>24/7 support and consulting</ListItem>

                </Stack>
            </Box>

        </Flex>
    </Box>
  )
}
