import React from 'react'
import {HStack, Icon, Text, StackProps, Box} from "@chakra-ui/react"
import {MoneyBackGuaranteeIcon , HassleFreeIcon, MonthlySubscriptionIcon } from "../icons/icons"

interface FeatureProps extends StackProps{
    icon: ElementType;
}
function Feature(props: FeatureProps) {
    const {icon, children , ...rest} = props;
  return (
    <HStack {...rest} spacing="24px">
        <Icon as={icon} boxSize="48px"/>
        <Text fontSize="16px" fontWeight="700">
            {children}
         </Text>
    </HStack>
  )
}

export function Features(){
    return (
        <Box maxW="1024" m="auto" pt="60px" pb="32px">
        <HStack px="80px" spacing="20px">
            <Feature icon={MoneyBackGuaranteeIcon}>
                30 Days Money Back Guarantee
            </Feature>
            <Feature icon={HassleFreeIcon}>
                No Setup Fees <br/>
                100% Hassle-Free
            </Feature>
            <Feature icon={MonthlySubscriptionIcon}>
                No Monthly Subscription <br/> Pay once and for all
            </Feature>
        </HStack>
        </Box>

    )
}
