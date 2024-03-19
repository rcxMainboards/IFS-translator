"use client";
import {
  Card,
  CardHeader,
  CardBody,
  Input,
  Select,
  SelectItem,
  Textarea,
  Divider,
  Button,
} from "@nextui-org/react";

import { useForm, Controller } from "react-hook-form";
import MyContext from "./MyContext";

export default function FormIFS({ onFormSubmit }) {
  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      Rescue: "",
      SWLR: "",
      PF: "",
      IR: "",
      TSS: "",
      T: "",
      S: "",
      Windows: "",
    },
  });

  return (
    <Card className="w-full py-12 px-6 pb-10 max-w-[60rem]">
      <CardHeader className="font-bold text-3xl">
        Formulario IFS: Comentario de Reparación
      </CardHeader>
      <Divider />
      <CardBody>
        <form onSubmit={handleSubmit((data) => onFormSubmit(data))}>
          <div className="grid lg:grid-cols-2 gap-5 items-center">
            <Controller
              control={control}
              name="Rescue"
              render={({ field }) => (
                <Input
                  {...field}
                  type="text"
                  label="Rescue"
                  placeholder="Escriba una descripción"
                />
              )}
            />

            <Controller
              control={control}
              name="SWLR"
              render={({ field }) => (
                <Select
                  {...field}
                  label="SWLR"
                  placeholder="Selecciona una opción"
                  isRequired
                >
                  <SelectItem key="YES" value="YES">
                    Si
                  </SelectItem>
                  <SelectItem key="NO" value="NO">
                    No
                  </SelectItem>
                </Select>
              )}
            />

            <Controller
              control={control}
              name="PF"
              render={({ field }) => (
                <Input
                  {...field}
                  type="text"
                  label="PF"
                  isRequired
                  placeholder="Escriba una descripción"
                />
              )}
            />
            <Controller
              control={control}
              name="IR"
              render={({ field }) => (
                <Select
                  {...field}
                  label="IR"
                  placeholder="Selecciona una opción"
                  isRequired
                >
                  <SelectItem key="YES" value="YES">
                    Si
                  </SelectItem>
                  <SelectItem key="NO" value="NO">
                    No
                  </SelectItem>
                </Select>
              )}
            />
            <Controller
              control={control}
              name="TSS"
              render={({ field }) => (
                <Textarea
                  {...field}
                  type="text"
                  label="TSS"
                  isRequired
                  maxRows={3}
                  placeholder="Escriba una descripción"
                />
              )}
            />
            <Controller
              control={control}
              name="T"
              render={({ field }) => (
                <Textarea
                  {...field}
                  type="text"
                  label="T"
                  isRequired
                  maxRows={3}
                  placeholder="Escriba una descripción"
                />
              )}
            />
            <Controller
              control={control}
              name="S"
              render={({ field }) => (
                <Textarea
                  {...field}
                  type="text"
                  label="S"
                  isRequired
                  maxRows={3}
                  placeholder="Escriba una descripción"
                />
              )}
            />
            <Controller
              control={control}
              name="Windows"
              render={({ field }) => (
                <Select
                  {...field}
                  label="¿Windows es compatible?"
                  placeholder="Selecciona una opción"
                  isRequired
                >
                  <SelectItem key="YES" value="YES">
                    Si
                  </SelectItem>
                  <SelectItem key="NO" value="NO">
                    No
                  </SelectItem>
                </Select>
              )}
            />
          </div>
          <section className="w-full flex flex-col mt-10 gap-2">
            <Button
              type="submit"
              size="lg"
              className="bg-primary text-white font-semibold"
            >
              Generar salida
            </Button>
            <Button
              size="lg"
              onClick={reset}
              className="bg-accent text-white font-semibold"
            >
              Limpiar campos
            </Button>
          </section>
        </form>
      </CardBody>
    </Card>
  );
}
