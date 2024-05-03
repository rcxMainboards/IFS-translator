"use client";

import FormIFS from "./FormIFS";
import TranslatedOuput from "./TranslatedOuput";
import { useState } from "react";
import { useForm } from "react-hook-form";
import clsx from "clsx";
import { Toaster } from "sonner";
import { motion } from "framer-motion";
export default function MainContent() {
  const [formData, setFormData] = useState(null);
  const [selectedKeysSelec1, setSelectedKeys1] = useState([]);
  const [selectedKeysSelec2, setSelectedKeys2] = useState([]);
  const [selectedKeysSelec3, setSelectedKeys3] = useState([]);

  const { handleSubmit, control, reset, register } = useForm({
    defaultValues: {
      Rescue: "",
      SWLR: "",
      PF: "",
      IR: "",
      TSS: "",
      T: "",
      S: "",
    },
  });

  const handleResetForm = () => {
    reset();
    setFormData(null);
    setSelectedKeys1([]);
    setSelectedKeys2([]);
    setSelectedKeys3([]);
  };

  const onCopyToClipBoard = () => {
    handleResetForm();
  };

  const handleFormSubmit = (data) => {
    setFormData(data);
  };

  return (
    <div
      className={clsx("grid place-items-center gap-2 md:grid-cols p-5", {
        "grid-cols-2": formData,
      })}
    >
      <FormIFS
        onFormSubmit={handleFormSubmit}
        handleSubmit={handleSubmit}
        control={control}
        register={register}
        handleResetForm={handleResetForm}
        selectedKeysSelec1={selectedKeysSelec1}
        selectedKeysSelec2={selectedKeysSelec2}
        selectedKeysSelec3={selectedKeysSelec3}
        setSelectedKeys1={setSelectedKeys1}
        setSelectedKeys2={setSelectedKeys2}
        setSelectedKeys3={setSelectedKeys3}
      />
      {formData ? (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "just",
            stiffness: 260,
            damping: 20,
          }}
        >
          <TranslatedOuput
            formData={formData}
            handleResetForm={handleResetForm}
          />
        </motion.div>
      ) : null}
      <Toaster richColors />
    </div>
  );
}
