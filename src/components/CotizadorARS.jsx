import React from "react";
import { useState } from "react";
import FormARS from "./FormARS";
import { Spinner, Grid, Box, Text, Stack, Badge, useColorModeValue } from "@chakra-ui/react";

import { formatearDivizaARS } from "../utilities/toLocaleString";

const CotizadorARS = () => {
  const [resultado, setResultado] = useState(0);
  const [impuestoGanancias, setImpuestoGanancias] = useState(0);
  const [impuestoPais, setImpuestoPais] = useState(0);
  const [sinImpuestos, setSinImpuestos] = useState(0);

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
      gap={12}
    >
      <Stack>
        <FormARS
          setResultado={setResultado}
          setImpuestoGanancias={setImpuestoGanancias}
          setImpuestoPais={setImpuestoPais}
          setSinImpuestos={setSinImpuestos}
        />
      </Stack>

      <Stack gap={2}>
        <Text>
          Sin impuestos: ${" "}
          <Text as="span" fontWeight="semibold">
            {sinImpuestos}
          </Text>
        </Text>
        <Text>
          Impuesto a las ganancias (45%):{" "}
          <Text as="span" fontWeight="semibold">
            {formatearDivizaARS(impuestoGanancias)}
          </Text>
        </Text>
        <Text>
          Impuesto PAIS (30%):{" "}
          <Text as="span" fontWeight="semibold">
            {formatearDivizaARS(impuestoPais)}
          </Text>
        </Text>
        <Badge colorScheme={"green"} p={2} rounded="md">
          <Text fontSize="md">Total: {formatearDivizaARS(resultado)}</Text>
        </Badge>
      </Stack>
    </Stack>
  );
};

export default CotizadorARS;
