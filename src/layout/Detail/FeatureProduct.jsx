import {
  Text,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Stack,
  StackDivider,
  Box,
  Flex,
  GridItem,
  SimpleGrid,
  Divider,
} from "@chakra-ui/react";

const FeatureProduct = () => {
  return (
    <Flex bg={"#EFF4FA"} w="auto" justifyContent="center" alignItems="center">
      <Box
        bg="#EFF4FA"
        _dark={{
          bg: "gray.800",
        }}
        px={8}
        py={20}
        mx="auto"
      >
        <SimpleGrid
          alignItems="center"
          columns={{
            base: 1,
            lg: 3,
          }}
          spacingY={{
            base: 10,
            lg: 32,
          }}
          spacingX={{
            base: 10,
            lg: 12,
          }}
        >
          <Box alignSelf="start">
            <Card width={'xs'}>
              <CardHeader pb={"-5"}>
                <Heading size="md">Detail Course</Heading>
              </CardHeader>

              <CardBody>
                <Stack spacing="4">
                  <Box>
                    <Heading
                      size="xs"
                      fontWeight={"medium"}
                      textTransform="capitalize"
                      paddingLeft={"10"}
                    >
                      Materi
                    </Heading>
                  </Box>
                  <Box>
                    <Heading
                      size="xs"
                      fontWeight={"medium"}
                      textTransform="capitalize"
                      paddingLeft={"10"}
                    >
                      Fasilitas
                    </Heading>
                  </Box>
                </Stack>
              </CardBody>
              <Divider colorScheme="gray" />
              <CardFooter className="flex-col">
                <Box className="flex" marginBottom={"5"}>
                  <Stack
                    width={{
                      base: "100%",
                      md: "40%",
                    }}
                    textAlign={"center"}
                  >
                    <Text
                      textAlign={"left"}
                      textDecor={"line-through"}
                      textColor={"#6D7175"}
                    >
                      $ 2999
                    </Text>
                  </Stack>
                  <Stack
                    width={{
                      base: "100%",
                      md: "60%",
                    }}
                  >
                    <Text
                      textAlign={"right"}
                      textColor={"#FF6A28"}
                      fontWeight={"bold"}
                    >
                      $ 1500
                    </Text>
                  </Stack>
                </Box>
                <Button
                  width={"auto"}
                  colorScheme="facebook"
                  textColor={"white"}
                >
                  Checkout
                </Button>
              </CardFooter>
            </Card>
          </Box>
          <GridItem colSpan={2}>
            <Card>
              <CardHeader>
                <Heading size="md">Client Report</Heading>
              </CardHeader>

              <CardBody>
                <Stack divider={<StackDivider />} spacing="4">
                  <Box>
                    <Heading size="xs" textTransform="uppercase">
                      Summary
                    </Heading>
                    <Text pt="2" fontSize="sm">
                      View a summary of all your clients over the last month.
                    </Text>
                  </Box>
                  <Box>
                    <Heading size="xs" textTransform="uppercase">
                      Overview
                    </Heading>
                    <Text pt="2" fontSize="sm">
                      Check out the overview of your clients.
                    </Text>
                  </Box>
                  <Box>
                    <Heading size="xs" textTransform="uppercase">
                      Analysis
                    </Heading>
                    <Text pt="2" fontSize="sm">
                      See a detailed analysis of all your business clients.
                    </Text>
                  </Box>
                </Stack>
              </CardBody>
              <CardFooter>
                <Button>View here</Button>
              </CardFooter>
            </Card>
          </GridItem>
        </SimpleGrid>
      </Box>
    </Flex>
  );
};
export default FeatureProduct;
