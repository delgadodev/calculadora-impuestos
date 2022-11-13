import React, { useState } from "react";
import {
  Input,
  Button,
  InputGroup,
  InputLeftElement,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import usaFlag from "../assets/icons/usaFlag.svg";

const Form = ({
  dolarOficial,
  setResultado,
  setImpuestoGanancias,
  setImpuestoPais,
  setSinImpuestos,
}) => {
  const [monto, setMonto] = useState(0);

  const cotizarMonto = (e) => {
    e.preventDefault();

    const montoDolar = monto * dolarOficial;

    const impuestoGananciasDolar = montoDolar * 0.45;

    const impuestoPaisDolar = montoDolar * 0.3;

    const total = montoDolar + impuestoGananciasDolar + impuestoPaisDolar;
    setSinImpuestos(monto * dolarOficial);
    setImpuestoGanancias(impuestoGananciasDolar);
    setImpuestoPais(impuestoPaisDolar);
    setResultado(total);
  };

  //DARKMODE
  const bg = useColorModeValue("white", "gray.700");

  return (
    <form onSubmit={cotizarMonto}>
      <Stack>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={
              <img
                src={usaFlag}
                width="28px"
                alt="bandera de los estados unidos"
              />
            }
          />
          <Input
            type="number"
            placeholder="Monto en USD"
            onChange={(e) => setMonto(e.target.value)}
            backgroundColor={bg}
            min={1}
            max={999999999}
            step="any"
          />
        </InputGroup>

        <Button
          _hover={{
            bg: "blue.500",
          }}
          type="submit"
          backgroundColor="blue.400"
          color="white"
        >
          Cotizar
        </Button>
      </Stack>
    </form>
  );
};

export default Form;
