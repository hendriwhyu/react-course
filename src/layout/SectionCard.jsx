import {
  Box,
  Container,
  Flex,
  Heading,
  SkeletonCircle,
  SkeletonText,
  Stack,
  Text,
} from "@chakra-ui/react";

import { useEffect, useState } from "react";
import ProductCard from "../component/CardItem";

const dataProduct = [
  {
    id: "1",
    title: "Kursus Laravel Pemula",
    price: 299,
  },
  {
    id: "2",
    title: "Kursus Laravel Advanced",
    price: 599,
    discountPrice: 429,
  },
  {
    id: "3",
    title: "Kursus Laravel Project",
    price: 499,
    discountPrice: 329,
  },
];
export default function SectionCard() {
  const [productCourse, setProductCourse] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    setProductCourse(dataProduct);
    setTimeout(() => {
      setIsLoaded(false);
    }, 3000);
  }, []);

  return (
    <Box p={4}>
      <Stack spacing={2} as={Container} maxW={"2xl"} textAlign={"center"}>
        <Heading
          fontSize={{ base: "2xl", sm: "4xl" }}
          textColor={"#152A46"}
          fontWeight={"bold"}
        >
          Course Tersedia
        </Heading>
        <Text color={"gray.600"} fontSize={{ base: "sm", sm: "lg" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          obcaecati ut cupiditate pariatur, dignissimos, placeat amet officiis.
        </Text>
      </Stack>

      <Container maxW={"5xl"} mt={5}>
        <Flex
          flexWrap="wrap"
          gridGap={6}
          gridTemplateColumns="repeat(4, 1fr)"
          justify="center"
        >
          {productCourse.map((item) => {
            if (isLoaded) {
              return (
                <Box
                  padding="6"
                  width={"200px"}
                  boxShadow="lg"
                  bg="white"
                  key={item.id}
                >
                  <SkeletonCircle width={"auto"} />
                  <SkeletonText
                    mt="4"
                    noOfLines={4}
                    spacing="4"
                    skeletonHeight="2"
                  />
                </Box>
              );
            } else {
              return (
                <ProductCard
                  key={item.id}
                  title={item.title}
                  price={
                    item.discountPrice && item.price
                      ? item.discountPrice
                      : item.price
                  }
                  discountPrice={
                    item.discountPrice && item.price ? item.price : null
                  }
                />
              );
            }
          })}
        </Flex>
      </Container>
    </Box>
  );
}
