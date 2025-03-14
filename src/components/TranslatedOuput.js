"use client";
import { useEffect, useState } from "react";
import {
	Card,
	CardHeader,
	CardBody,
	Divider,
	Snippet,
} from "@nextui-org/react";
import axios from "axios";
import { toast } from "sonner";

export default function TranslatedOuput({ formData, handleResetForm }) {
	const [translatedText, setTranslatedText] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const translateText = async (form_text) => {
		const cleanText = (text) => text.replace(/[\r\n]+/g, ' ');
		const map_text = form_text.map((text) => cleanText(text.toLowerCase()));
		const options = {
			method: "POST",
			url: 'https://deep-translate1.p.rapidapi.com/language/translate/v2',
			headers: {
			  'x-rapidapi-key': 'f37f789518msh2ee2978fd9b8df3p15344bjsne221ac961de0',
			  'x-rapidapi-host': 'deep-translate1.p.rapidapi.com',
			  'Content-Type': 'application/json'
			},
			data: {
				q: map_text,
				source: "es",
				target: "en",
				format: "text"
			},
		};
		const res = await axios.request(options);
		const data = res.data.data.translations.translatedText;
		return data;
	};

	const formatOutput = (translatedText) => {
		const obj_keys = Object.keys(formData);
		const translate_obj = obj_keys.reduce((acc, obj, index) => {
			acc[obj] = translatedText[index];
			return acc;
		}, {});

		const { Rescue, SWLR, PF, IR, T, S, TSS, Windows } = translate_obj;

		const text = `${Rescue ? `#Rescue ${Rescue}` : ""} ${SWLR === "Yeah" ? "#SWRL" : ""} #PF ${PF} #IR ${IR === "Yeah" ? "yes" : "no"}  #TSS ${TSS} ${
			Windows
				? "W11REQUEST; WE DO NOT HAVE THE TOOL TO UPDATE THIS UNIT TO W11. SORRY FOR THE INCONVENIENCE, WE HAD TU PUT W10 ON IT "
				: " "
		} #T ${T} #S ${S}`;

		setTranslatedText(replaceApostropheSymbol(text));
	};

	const replaceApostropheSymbol = (text) => {
		return text.replaceAll("&#39;", "'");
	};

	const onCopyToClipBoard = () => {
		handleResetForm();
		const textarea = document.createElement("textarea");
		textarea.textContent = translatedText;
		document.body.appendChild(textarea);
		textarea.select();
		document.execCommand("copy"); // for the sake of no using https, change please
		document.body.removeChild(textarea);
		toast.success("Se ha copiado el texto");
	};

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		if (formData) {
			setIsLoading(true);
			const form_text = Object.values(formData);
			translateText(form_text)
				.then((translatedText) => {
					formatOutput(translatedText);
				})
				.catch((error) => {
					if (error.response.status === 429) {
						setError(
							"La llave actual ya no es válida, comuniquese con ingeniería",
						);
					} else {
						setError(error.toString());
					}
				})
				.finally(() => {
					setIsLoading(false);
				});
		}
	}, [formData]);

	return (
		<Card className="p-7">
			<CardHeader className="font-semibold text-3xl flex flex-col gap-2">
				Salida para copiar en IFS
				<Divider />
			</CardHeader>
			<CardBody className="select-none">
				<Snippet
					symbol={false}
					onCopy={onCopyToClipBoard}
					className="flex text-sm"
					size="lg"
				>
					{!isLoading ? (
						<p className="font-bold text-wrap">{translatedText}</p>
					) : (
						"Cargando..."
					)}
					{error ? <p className="font-bold text-danger-500">{error}</p> : null}
				</Snippet>
			</CardBody>
		</Card>
	);
}
