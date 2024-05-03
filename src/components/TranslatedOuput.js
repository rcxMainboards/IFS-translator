import { useEffect, useState } from 'react';
import { Card, CardHeader, CardBody, Divider, Snippet } from '@nextui-org/react';
import axios from 'axios';
import { toast } from 'sonner';

export default function TranslatedOuput({ formData, handleResetForm }) {
    const [translatedText, setTranslatedText] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const translateText = async (form_text) => {
        console.log(form_text);
        const res = await axios.post(
            'http://localhost:5000/translate',
            {
                q: form_text,
                source: 'es',
                target: 'en',
                format: 'text',
                api_key: '',
            },
            {
                headers: { 'Content-Type': 'application/json' },
            }
        );
        return res.data;
    };

    const formatOutput = ({ translatedText }) => {
        const obj_keys = Object.keys(formData);
        const translate_obj = obj_keys.reduce((acc, obj, index) => {
            acc[obj] = translatedText[index];
            return acc;
        }, {});

        console.log(translate_obj);

        const { Rescue, SWLR, PF, IR, T, S, TSS, Windows } = translate_obj;

        const text = `${Rescue ? '#Rescue ' + Rescue : ''} #SWLR ${SWLR} #IR ${IR} #PF ${PF}  #TSS ${TSS} #T ${T} #S ${S} ${Windows ? '#Windows ' + Windows : ''}`;

        setTranslatedText(text);
    };

    const onCopyToClipBoard = () => {
        handleResetForm();
        toast.success('Se ha copiado el texto');
    };

    useEffect(() => {
        if (formData) {
            setIsLoading(true);
            const form_text = Object.values(formData);
            translateText(form_text)
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
                <Snippet symbol={false} onCopy={onCopyToClipBoard} className="flex text-sm " size="lg">
                    {!isLoading ? <p className="font-bold text-wrap max-w-[30rem]">{translatedText}</p> : 'Cargando...'}
                </Snippet>
            </CardBody>
        </Card>
    );
}
