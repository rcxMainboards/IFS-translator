"use client";
import {
	Card,
	CardHeader,
	CardBody,
	Select,
	SelectItem,
	Textarea,
	Divider,
	Button,
} from "@nextui-org/react";
import { Controller } from "react-hook-form";
import descriptions from "./ui/descriptions";
export default function FormIFS({
	onFormSubmit,
	handleSubmit,
	control,
	register,
	handleResetForm,
	selectedKeysSelec1,
	selectedKeysSelec2,
	selectedKeysSelec3,
	selectedKeysSelec4,
	setSelectedKeys1,
	setSelectedKeys2,
	setSelectedKeys3,
	setSelectedKeys4,
}) {
	return (
		<Card className="max-w-[44rem] p-6">
			<CardHeader className="font-bold text-3xl">
				Formulario IFS: Comentarios de Reparación
			</CardHeader>
			<CardHeader className="text-sm">
				<p>
					<span className="font-semibold">Nota:</span> los campos con asteriscos
					son{" "}
					<span className="underline text-danger-300">
						campos obligatorios*
					</span>
				</p>
			</CardHeader>
			<Divider />
			<CardBody>
				<form onSubmit={handleSubmit((data) => onFormSubmit(data))}>
					<div className="grid grid-cols-2 gap-x-6 gap-y-3">
						<Select
							{...register("SWLR")}
							label="(1) Software Reload (SWRL)"
							placeholder="Selecciona una opción"
							isRequired
							variant="bordered"
							description={descriptions.SWLR}
							selectedKeys={selectedKeysSelec1}
							onSelectionChange={(keys) => setSelectedKeys1(keys)}
						>
							<SelectItem key="Si" value="Si">
								Si
							</SelectItem>
							<SelectItem key="No" value="No">
								No
							</SelectItem>
						</Select>
						<Controller
							control={control}
							name="PF"
							render={({ field }) => (
								<Textarea
									{...field}
									type="text"
									label="(2) Queja del Cliente (PF)"
									description={descriptions.PF}
									variant="bordered"
									isRequired
									placeholder="Escriba la queja del cliente"
									autoComplete="off"
								/>
							)}
						/>
						<Select
							{...register("IR")}
							label="(3) Replica de la Queja (IR)"
							placeholder="Selecciona una opción"
							variant="bordered"
							description={descriptions.IR}
							isRequired
							selectedKeys={selectedKeysSelec2}
							onSelectionChange={(keys) => setSelectedKeys2(keys)}
						>
							<SelectItem key="Si" value="si">
								Si
							</SelectItem>
							<SelectItem key="No" value="No">
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
									label="(4) Pruebas Realizadas (TSS)"
									description={descriptions.TSS}
									variant="bordered"
									isRequired
									maxRows={4}
									placeholder="Escriba una descripción"
									autoComplete="off"
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
									label="(5) Diagnostico (T)"
									isRequired
									maxRows={4}
									placeholder="Escriba una descripción"
									autoComplete="off"
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
									label="(6) Reparación (S)"
									isRequired
									maxRows={4}
									placeholder="Escriba una descripción de la reparación"
									autoComplete="off"
								/>
							)}
						/>
						<Select
							{...register("Rescue")}
							label="(7) Rescue Call"
							description={descriptions.Rescue}
							variant="bordered"
							selectedKeys={selectedKeysSelec4}
							onSelectionChange={(keys) => setSelectedKeys4(keys)}
							placeholder="No"
						>
							<SelectItem key="Si" value="Si">Si</SelectItem>
						</Select>
						<Select
							{...register("Windows")}
							label="(8) ¿Windows 11 no es compatible?"
							placeholder="No"
							variant="bordered"
							selectedKeys={selectedKeysSelec3}
							onSelectionChange={(keys) => setSelectedKeys3(keys)}
						>
							<SelectItem key="WYES" value="YES">
								Si
							</SelectItem>
						</Select>
					</div>
					<section className="w-full flex flex-col mt-5 gap-2 mb-auto">
						<Button
							type="submit"
							size="lg"
							className="bg-primary text-white font-semibold"
						>
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
