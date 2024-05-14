'use client';
import { Card, CardHeader, CardBody, Input, Select, SelectItem, Textarea, Divider, Button } from '@nextui-org/react';
import { Controller } from 'react-hook-form';
import descriptions from './ui/descriptions';
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
        <Card className="p-6 max-w-[42rem]">
            <CardHeader className="font-bold text-3xl">Formulario IFS: Comentarios de Reparación</CardHeader>
            <Divider />
            <CardBody>
                <form onSubmit={handleSubmit((data) => onFormSubmit(data))}>
                    <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                        <Controller
                            control={control}
                            name="Rescue"
                            render={({ field }) => (
                                <Input {...field} type="text" label="Rescue" description={descriptions.Rescue} variant="bordered" placeholder="Escriba una descripción" />
                            )}
                        />
                        <Select
                            {...register('SWLR')}
                            label="SWLR"
                            placeholder="Selecciona una opción"
                            isRequired
                            variant="bordered"
                            description={descriptions.SWLR}
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
                                    description={descriptions.PF}
                                    variant="bordered"
                                    isRequired
                                    placeholder="Escriba una descripción"
                                />
                            )}
                        />
                        <Select
                            {...register('IR')}
                            label="IR"
                            placeholder="Selecciona una opción"
                            variant="bordered"
                            description={descriptions.IR}
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
                                    description={descriptions.TSS}
                                    variant="bordered"
                                    isRequired
                                    maxRows={2}
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
                                    variant="bordered"
                                    type="text"
                                    description={descriptions.T}
                                    label="T"
                                    isRequired
                                    maxRows={2}
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
                                    variant="bordered"
                                    type="text"
                                    description={descriptions.S}
                                    label="S"
                                    isRequired
                                    maxRows={2}
                                    placeholder="Escriba una descripción"
                                />
                            )}
                        />
                        <Select
                            {...register('Windows')}
                            label="¿Windows no es compatible?"
                            placeholder="No"
                            variant="bordered"
                            selectedKeys={selectedKeysSelec3}
                            onSelectionChange={(keys) => setSelectedKeys3(keys)}
                        >
                            <SelectItem key="YES" value="YES">
                                Si
                            </SelectItem>
                        </Select>
                    </div>
                    <section className="w-full flex flex-col mt-5 gap-2 mb-auto">
                        <Button type="submit" size="lg" className="bg-primary text-white font-semibold">
                            Generar salida
                        </Button>
                        <Button
                            size="lg"
                            color="warning"
                            onClick={() => {
                                handleResetForm();
                            }}
                            className=" text-white font-semibold"
                        >
                            Limpiar campos
                        </Button>
                    </section>
                </form>
            </CardBody>
        </Card>
    );
}
