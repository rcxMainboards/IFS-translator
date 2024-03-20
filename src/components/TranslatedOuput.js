import { useEffect, useState } from "react";
import { Card, CardHeader, CardBody, Divider, Code } from "@nextui-org/react";
import axios from "axios";
export default function TranslatedOuput({ formData }) {
  const [translatedText, setTranslatedText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const translateText = async (text) => {
    const res = await axios.post(
      "http://localhost:5000/translate",
      {
        q: text,
        source: "es",
        target: "en",
        format: "text",
        api_key: "",
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    return res.data;
  };

  const formatOutput = (text) => {
    const textSplited = text.translatedText.split(",");
    const formatedText = `#Rescue ${textSplited[0]} #SWLR ${formData.SWLR} #IR ${formData.IR} #PF ${textSplited[1]}  #TSS: ${textSplited[2]}  #T ${textSplited[3]}  #S ${textSplited[4]} #Windows: ${formData.Windows}`;
    setTranslatedText(formatedText);
  };

  useEffect(() => {
    if (formData) {
      setIsLoading(true);
      translateText(
        `${formData.Rescue},${formData.PF},${formData.TSS},${formData.T},${formData.S}`
      )
        .then((translatedText) => {
          formatOutput(translatedText);
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [formData]);
  return (
    <Card className="p-10 w-full">
      <CardHeader className="font-semibold text-2xl flex flex-col gap-2">
        Salida para copiar en IFS
        <Divider />
      </CardHeader>
      <CardBody>
        <Code className="p-10 text-wrap" size="md">
          {!isLoading ? translatedText : "Cargando..."}
        </Code>
      </CardBody>
    </Card>
  );
}
