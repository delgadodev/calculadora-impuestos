import React from "react";
import { useState } from "react";
import FormARS from "./FormARS";
import { Spinner, Grid, Box, Text, Stack, Badge } from "@chakra-ui/react";

import { formatearDivizaARS } from "../utilities/toLocaleString";

const CotizadorARS = () => {
  const [resultado, setResultado] = useState(0);
  const [impuestoGanancias, setImpuestoGanancias] = useState(0);
  const [impuestoPais, setImpuestoPais] = useState(0);
  const [sinImpuestos, setSinImpuestos] = useState(0);

  return (
    <Stack
      backgroundColor="gray.100"
      width={{ base: "330px" }}
      p={5}
      shadow="md"
      rounded="xl"
      gap={5}
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
          Impuesto a la ganancia (45%):{" "}
          <Text as="span" fontWeight="semibold">
            {formatearDivizaARS(impuestoGanancias)}
          </Text>
        </Text>
        <Text>
          Impuesto al pais (30%):{" "}
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
