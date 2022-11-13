import React from "react";
import { useEffect, useState } from "react";
import Form from "./Form";
import {
  Spinner,
  Grid,
  Box,
  Text,
  Stack,
  Badge,
  Divider,
  Tabs,
  TabList,
  Tab,
  useColorModeValue,
} from "@chakra-ui/react";
import { getDolar } from "../api/dolarsiApi";
import { formatearDivizaARS } from "../utilities/toLocaleString";

const CotizadorUSD = () => {
  const [dolar, setDolar] = useState([]);
  const [resultado, setResultado] = useState(0);
  const [impuestoGanancias, setImpuestoGanancias] = useState(0);
  const [impuestoPais, setImpuestoPais] = useState(0);
  const [sinImpuestos, setSinImpuestos] = useState(0);

  useEffect(() => {
    getDolar().then((res) => setDolar(res));
  }, []);

  const ArrayDolarOficial = dolar.slice(0, 1);
  const dolarOficial = parseFloat(ArrayDolarOficial[0]?.casa?.venta);

  ///////////////////////////////////////////
  //DARKMODE

  const bg = useColorModeValue("gray.100", "gray.700");

  return (
    <Stack
      backgroundColor={bg}
      width={{ base: "330px" }}
      height={{ base: "470px" }}
      p={5}
      shadow="md"
      rounded="xl"
      gap={5}
    >
      <Stack>
        <Form
          dolarOficial={dolarOficial}
          setResultado={setResultado}
          setImpuestoGanancias={setImpuestoGanancias}
          setImpuestoPais={setImpuestoPais}
          setSinImpuestos={setSinImpuestos}
        />
      </Stack>

      <Stack gap={2}>
        <Text>
          Sin impuestos:{" "}
          <Text as="span" fontWeight="semibold">
            {formatearDivizaARS(sinImpuestos)}
          </Text>
        </Text>
        <Text>
          Impuesto a la ganancias (45%):{" "}
          <Text as="span" fontWeight="semibold">
            {formatearDivizaARS(impuestoGanancias)}
          </Text>
        </Text>
        <Text>
          Impuesto país (30%):{" "}
          <Text as="span" fontWeight="semibold">
            {formatearDivizaARS(impuestoPais)}
          </Text>
        </Text>
        <Badge colorScheme={"green"} p={2} rounded="md">
          <Text fontSize="md">Total: {formatearDivizaARS(resultado)}</Text>
        </Badge>

        <Divider />

        <Stack>
          <Text
            textTransform="uppercase"
            fontWeight="semibold"
            fontSize={{ base: "sm" }}
          >
            Cotizacion del dolar oficial:
          </Text>
          {dolarOficial ? (
            <Stack>
              <Text>
                1 USD ={" "}
                <Text as="span" fontWeight="semibold" color="blue.500">
                  {formatearDivizaARS(dolarOficial)}
                </Text>{" "}
                ARS
              </Text>
              <Text>
                Cotizaciones por:{" "}
                <Text as="span" color="blue.500">
                  {" "}
                  <a href="https://www.dolarsi.com/" target="_blank">
                    Dolarsi
                  </a>{" "}
                </Text>
              </Text>
            </Stack>
          ) : (
            <Spinner />
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default CotizadorUSD;
