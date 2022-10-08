import {
  Grid,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Text,
} from "@chakra-ui/react";
import CotizadorARS from "./components/CotizadorARS";
import CotizadorUSD from "./components/CotizadorUSD";

function App() {
  return (
    <Grid
      justifyContent="center"
      alignContent="center"
      height="100vh"
      style={{
        fontFamily: "Poppins",
      }}
    >
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

        <Text
          textAlign="center"
          mb={5}
          fontSize="md"
          fontWeight="bold"
          color="gray.500"
        >
          Dolar Tarjeta
        </Text>
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
