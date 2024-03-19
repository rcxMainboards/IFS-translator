import { useEffect, useState } from "react";
import { Card, CardHeader, CardBody, Divider, Code } from "@nextui-org/react";
import axios from "axios";
const API_URL = "https://translation.googleapis.com/language/translate/v2";
export default function TranslatedOuput({ formData }) {
  const [translatedText, setTranslatedText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const translateText = async (text, targetLanguage) => {
    const response = await axios.post(
      `${API_URL}?key=${process.env.NEXT_PUBLIC_KEY}`,
      {
        q: text,
        target: targetLanguage,
        model: "base",
      }
    );
    const decodedText = decodeHtml(
      response.data.data.translations[0].translatedText
    );

    return decodedText;
  };

  const decodeHtml = (html) => {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.textContent;
  };

  const formatOutput = (text) => {
    const textSplited = text.split(",");
    const formatedText = `#Rescue ${textSplited[0]} #SWLR ${formData.SWLR} #IR ${formData.IR} #PF ${textSplited[1]}  #TSS: ${textSplited[2]}  #T ${textSplited[3]}  #S ${textSplited[4]} #Windows: ${formData.Windows}`;
    setTranslatedText(formatedText);
  };

  useEffect(() => {
    if (formData) {
      setIsLoading(true);
      translateText(
        `${formData.Rescue},${formData.PF},${formData.TSS},${formData.T},${formData.S}`,
        "en"
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
