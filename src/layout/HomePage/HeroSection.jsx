import {
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Image,
  IconButton,
  Container,
} from "@chakra-ui/react";

export default function HeroSection() {
  return (
    <div className="bg-[#152A46]">
      <Container maxW={'5xl'}>
        <Stack
          maxW={"5xl"}
          padding={{ base: 0, sm: 2, xs: 4, md: 4 }}
          bgColor={"#152A46"}
          align={"center"}
          spacing={{ base: 50, md: 100 }}
          py={{ base: 10, md: 12 }}
          direction={{ base: "column", md: "row" }}
        >
          <Stack flex={1} spacing={{ base: 2, md: 4 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={700}
              fontSize={{ base: "xl", sm: "2xl", lg: "4xl" }}
            >
              <Text as={"span"} position={"relative"} textColor={"white"}>
                Jadi expert bersama
              </Text>
              <br />
              <Text as={"span"} color={"white"}>
                edspert.id
              </Text>
            </Heading>
            <Text color={"gray.500"}>
              Tingkatkan skill dan pengetahuan bersama para mentor terbaik di
              bidangnya, untuk siapkan karir impian anda.
            </Text>
          </Stack>
          <Flex
            flex={1}
            justify={"center"}
            align={"center"}
            position={"relative"}
            w={"full"}
          >
            <Box
              position={"relative"}
              height={"300px"}
              rounded={"2xl"}
              boxShadow={"2xl"}
              width={"full"}
              overflow={"hidden"}
            >
              <IconButton
                aria-label={"Play Button"}
                variant={"ghost"}
                _hover={{ bg: "transparent" }}
                size={"lg"}
                color={"white"}
                position={"absolute"}
                left={"50%"}
                top={"50%"}
                transform={"translateX(-50%) translateY(-50%)"}
              />
              <Image
                alt={"Hero Image"}
                fit={"cover"}
                align={"center"}
                w={"100%"}
                h={"100%"}
                src={
                  "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
                }
              />
            </Box>
          </Flex>
        </Stack>
      </Container>
    </div>
  );
}
