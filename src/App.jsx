import {
  Grid,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Text,
  Stack,
  Icon,
  Image,
  Button,
  useColorMode,
} from "@chakra-ui/react";
import CotizadorARS from "./components/CotizadorARS";
import CotizadorUSD from "./components/CotizadorUSD";
import MoonIcon from "./assets/icons/moon.svg";
import SunIcon from "./assets/icons/sun.svg";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Grid
      justifyContent="center"
      alignContent="center"
      height="100vh"
      style={{
        fontFamily: "Poppins",
      }}
    >
      <Button
        onClick={toggleColorMode}
        position="absolute"
        variant="ghost"
        top={5}
        cursor="default"
        _hover={{
          variant: "ghost",
        }}
        _active={{
          variant: "ghost",
        }}
      >
        <Image
          cursor="pointer"
          style={{
            margin: 0,
          }}
          src={colorMode === "light" ? MoonIcon : SunIcon}
          w={8}
          h={8}
        />
      </Button>

      <Tabs isFitted>
        <Text
          textAlign="center"
          fontSize="xl"
          fontWeight="bold"
          color="gray.600"
          textTransform="uppercase"
          mb={2}
        >
          Calculadora de Impuestos
        </Text>

        <Stack
          flexDir="row"
          justifyContent="center"
          alignItems="center"
          gap={5}
        >
          <Text
            textAlign="center"
            fontSize="md"
            fontWeight="bold"
            color="gray.500"
          >
            Dolar Tarjeta
          </Text>
        </Stack>
        <TabList>
          <Tab>Monto en USD</Tab>
          <Tab>Monto en ARS</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <CotizadorUSD />
          </TabPanel>
          <TabPanel>
            <CotizadorARS />
          </TabPanel>
        </TabPanels>

        <Text textAlign="center">
          Desarrollado con ❤️ por{" "}
          <Text as="span" color="blue.400">
            <a href="https://github.com/xhungen" target="_blank">
              @LautaroDev
            </a>
          </Text>
        </Text>
      </Tabs>
    </Grid>
  );
}

export default App;
