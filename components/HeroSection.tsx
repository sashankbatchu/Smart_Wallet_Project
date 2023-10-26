'use client'

import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'

export default function HeroSection() {
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }} bg='#000235'>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={10} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '5xl', md: '6xl', lg: '7xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              color={'white'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'white',
                zIndex: -1,
              }}>
              Project_Name
            </Text>
            <br />{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'white'}>
          Your Wallet's Best Friend. Shop Smarter, Earn More with Our Chrome Extension
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Button
              as={'a'}
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'lg'}
              rounded={'full'}
              fontWeight={500}
              color={'white'}
              bg={'#7A7DD7'}
              href={'#'}
              _hover={{
                bg: '#9DA0ED',
              }}>
              Sign Up
            </Button>
            <Button 
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'lg'}
            fontWeight={500}
            rounded={'full'}
            color={'white'}
            bg={'#7A7DD7'}
            _hover={{
                bg: '#9DA0ED',
              }}
            >Sign in</Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
          }
        />
      </Flex>
    </Stack>
  )
}