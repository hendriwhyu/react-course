import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Image,
  Badge,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

ProductCard.propTypes = {
  text: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  discountPrice: PropTypes.number,
  url: PropTypes.string,
  image: PropTypes.string
};
export default function ProductCard(props) {
  const { text = "Course", title, price, discountPrice, url, image } = props;
  const navigate = useNavigate();

  return (
    <Center py={12}>
      <Box
        role={"group"}
        p={6}
        maxW={"200px"}
        maxH={"300px"}
        w={"full"}
        bg={"#152A46"}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
        cursor={"pointer"}
        _hover={{ bg: "#3B5998" }}
        onClick={() => navigate(`/detail/${url}`)}
      >
        <Box
          rounded={"lg"}
          mt={-12}
          pos={"relative"}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <Image
            rounded={"lg"}
            height={120}
            width={158}
            objectFit={"cover"}
            src={image}
            alt="#"
          />
        </Box>
        <Box justifyContent={"center"} align={"center"}>
          <Stack pt={3} align={"center"}>
            <Badge variant="solid" colorScheme="green">
              {text}
            </Badge>

            <Heading
              fontSize={"md"}
              textColor={"white"}
              fontFamily={"body"}
              fontWeight={600}
              textAlign={"center"}
            >
              {title}
            </Heading>
            <Stack direction={"row"} align={"center"}>
              <Text fontWeight={800} color={"#0ACF83"} fontSize={"md"}>
                {price}
              </Text>
              <Text textDecoration={"line-through"} color={"gray.600"}>
                {discountPrice}
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Center>
  );
}
