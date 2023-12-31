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
import ProductCard from "../../component/CardItem";
import { useDispatch, useSelector } from "react-redux";
import dataProduct from "../../data/data.json";
import { productSlice } from "../../redux/slice";
export default function SectionCard() {
  const [isLoaded, setIsLoaded] = useState(true);
  const { entities } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const fetchProduct = (product) => {
    dispatch(productSlice.actions.productLoading());
    dispatch(productSlice.actions.addProduct(product));
  };

  useEffect(() => {
    fetchProduct(dataProduct);

    setTimeout(() => {
      setIsLoaded(false);
    }, 3000);
  }, []);

  return (
    <Box p={4} bg={"#EFF4FA"}>
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
          {entities.map((item) => {
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
                  image={item.img}
                  url={item.id}
                />
              );
            }
          })}
        </Flex>
      </Container>
    </Box>
  );
}
