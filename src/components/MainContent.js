'use client';

import FormIFS from './FormIFS';
import TranslatedOuput from './TranslatedOuput';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import clsx from 'clsx';
import { Toaster } from 'sonner';
import { motion } from 'framer-motion';
export default function MainContent() {
    const [formData, setFormData] = useState(null);
    const [selectedKeysSelec1, setSelectedKeys1] = useState([]);
    const [selectedKeysSelec2, setSelectedKeys2] = useState([]);
    const [selectedKeysSelec3, setSelectedKeys3] = useState([]);
    const [selectedKeysSelec4, setSelectedKeys4] = useState([]);


    const { handleSubmit, control, reset, register } = useForm({
        defaultValues: {
            Rescue: '',
            SWLR: '',
            PF: '',
            IR: '',
            TSS: '',
            T: '',
            S: '',
        },
    });

    const handleResetForm = () => {
        reset();
        setFormData(null);
        setSelectedKeys1([]);
        setSelectedKeys2([]);
        setSelectedKeys3([]);
        setSelectedKeys4([]);
    };

    const handleFormSubmit = (data) => {
        setFormData(data);
    };

    return (
        <div className={clsx('bg-slate-500 flex-1 flex flex-col items-center p-4 gap-5 lg:flex-row lg:items-stretch')}>
            <FormIFS
                onFormSubmit={handleFormSubmit}
                handleSubmit={handleSubmit}
                control={control}
                register={register}
                handleResetForm={handleResetForm}
                selectedKeysSelec1={selectedKeysSelec1}
                selectedKeysSelec2={selectedKeysSelec2}
                selectedKeysSelec3={selectedKeysSelec3}
                selectedKeysSelec4={selectedKeysSelec4}
                setSelectedKeys1={setSelectedKeys1}
                setSelectedKeys2={setSelectedKeys2}
                setSelectedKeys3={setSelectedKeys3}
                setSelectedKeys4={setSelectedKeys4}
            />
            {formData ? (
                <motion.div
                    className="w-full max-w-[48rem] m-auto"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                        type: 'just',
                        stiffness: 260,
                        damping: 20,
                    }}
                >
                    <TranslatedOuput formData={formData} handleResetForm={handleResetForm} />
                </motion.div>
            ) : null}
            <Toaster richColors />
        </div>
    );
}
