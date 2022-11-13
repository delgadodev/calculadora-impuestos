import React, { useState } from "react";
import {
  Input,
  Button,
  InputGroup,
  InputLeftElement,
  Stack,
  Alert,
  useColorModeValue,
} from "@chakra-ui/react";
import argentinaFlag from "../assets/icons/argentinaFlag.svg";

const FormARS = ({
  setResultado,
  setImpuestoGanancias,
  setImpuestoPais,
  setSinImpuestos,
}) => {
  const [monto, setMonto] = useState(0);

  const cotizarMonto = (e) => {
    e.preventDefault();

    const montoReal = parseFloat(monto);

    const impuestoGanancias = parseFloat(montoReal) * 0.45;

    const impuestoPais = parseFloat(montoReal) * 0.3;

    const total = parseFloat(montoReal) + impuestoGanancias + impuestoPais;

    setSinImpuestos(montoReal);
    setImpuestoGanancias(impuestoGanancias);
    setImpuestoPais(impuestoPais);
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
                src={argentinaFlag}
                width="28px"
                alt="bandera de argentina"
              />
            }
          />
          <Input
            type="number"
            placeholder="Monto en ARS"
            onChange={(e) =>
              e.target.value > 0 ? setMonto(e.target.value) : setMonto(0)
            }
            backgroundColor={bg}
            min={1}
            max={999999999}
            step="any"
          />
        </InputGroup>

        <Button
          _hover={{
            backgroundColor: "blue.500",
            color: "white",
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

export default FormARS;
