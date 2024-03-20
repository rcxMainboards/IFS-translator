import { useEffect, useState } from "react";
import { Card, CardHeader, CardBody, Divider, Code } from "@nextui-org/react";
import axios from "axios";
import { BsCopy } from "react-icons/bs";

export default function TranslatedOuput({ formData, handleResetForm }) {
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
    console.log(textSplited);
    const formatedText = `#Rescue ${textSplited[0]}\n#SWLR ${formData.SWLR}\n#IR ${formData.IR}\n#PF ${textSplited[1]}\n#TSS: ${textSplited[2]}\n#T ${textSplited[3]}\n#S ${textSplited[4]}\n#Windows: ${formData.Windows}`;
    setTranslatedText(formatedText);
  };

  const copyToClipboard = (e) => {
    navigator.clipboard.writeText(translatedText);
    handleResetForm();
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
    <Card className="p-10 w-full ">
      <CardHeader className="font-semibold text-2xl flex flex-col gap-2">
        Salida para copiar en IFS
        <Divider />
      </CardHeader>
      <CardBody>
        <Code
          className="p-10 text-wrap flex text-sm h-[20rem] max-w-[48rem]"
          size="sm"
        >
          {!isLoading ? translatedText : "Cargando..."}
          <BsCopy
            className="cursor-pointer"
            onClick={copyToClipboard}
            size={35}
          />
        </Code>
      </CardBody>
    </Card>
  );
}
