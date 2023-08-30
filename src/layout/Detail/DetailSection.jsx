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
import FeatureProduct from "./FeatureProduct";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { productSlice } from "../../redux/slice";
import { useEffect } from "react";

function Feature(prop, { ...rest }) {
  const { name, description } = prop;
  return (
    <Stack {...rest} textColor={"white"} marginRight={"30px"}>
      <Text>{name}</Text>
      <Text>{description}</Text>
    </Stack>
  );
}
const DetailSection = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { entity } = useSelector((state) => state.product);
  console.log(dispatch(productSlice.actions.getProductById(id)));

  const fetchDetailProduct = async (productID) => {
    await dispatch(productSlice.actions.getProductById(productID));
  };

  useEffect(() => {
    fetchDetailProduct(id);
  }, []);
  return (
    <>
      <div className="bg-[#152A46]">
        <Container maxW={"7xl"}>
          <Stack
            maxW={"7xl"}
            padding={{ base: 0, sm: 2, xs: 4, md: 4 }}
            bgColor={"#152A46"}
            align={"center"}
            spacing={{ base: 50, md: 200 }}
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
                  Course
                </Text>
                <br />
                <Text as={"span"} color={"white"}>
                  {entity.title}
                </Text>
              </Heading>
              <Stack spacing={2} direction="column">
                <Heading fontSize="xl" textColor={"white"}>
                  Mentor
                </Heading>
                <Flex direction={"row"}>
                  <Feature
                    name="William Hartono"
                    description="Back End Developer"
                  />
                  <Feature
                    name="William Hartono"
                    description="Back End Developer"
                  />
                </Flex>
              </Stack>
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
                />
              </Box>
            </Flex>
          </Stack>
        </Container>
      </div>
      <FeatureProduct />
    </>
  );
};
export default DetailSection;
