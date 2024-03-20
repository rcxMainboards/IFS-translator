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
import { Controller } from "react-hook-form";
export default function FormIFS({
  onFormSubmit,
  handleSubmit,
  control,
  register,
  handleResetForm,
  selectedKeysSelec1,
  selectedKeysSelec2,
  selectedKeysSelec3,
  setSelectedKeys1,
  setSelectedKeys2,
  setSelectedKeys3,
}) {
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
            <Select
              {...register("SWLR")}
              label="SWLR"
              placeholder="Selecciona una opción"
              isRequired
              selectedKeys={selectedKeysSelec1}
              onSelectionChange={(keys) => setSelectedKeys1(keys)}
            >
              <SelectItem key="YES" value="YES">
                Si
              </SelectItem>
              <SelectItem key="NO" value="NO">
                No
              </SelectItem>
            </Select>
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
            <Select
              {...register("IR")}
              label="IR"
              placeholder="Selecciona una opción"
              isRequired
              selectedKeys={selectedKeysSelec2}
              onSelectionChange={(keys) => setSelectedKeys2(keys)}
            >
              <SelectItem key="YES" value="YES">
                Si
              </SelectItem>
              <SelectItem key="NO" value="NO">
                No
              </SelectItem>
            </Select>
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
            <Select
              {...register("Windows")}
              label="¿Windows es compatible?"
              placeholder="Selecciona una opción"
              selectedKeys={selectedKeysSelec3}
              onSelectionChange={(keys) => setSelectedKeys3(keys)}
            >
              <SelectItem key="YES" value="YES">
                Si
              </SelectItem>
              <SelectItem key="NO" value="NO">
                No
              </SelectItem>
            </Select>
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
              onClick={() => {
                handleResetForm();
              }}
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
