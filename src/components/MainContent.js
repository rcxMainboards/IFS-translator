"use client";

import FormIFS from "./FormIFS";
import TranslatedOuput from "./TranslatedOuput";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";

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
    setSelectedKeys1([]);
    setSelectedKeys2([]);
    setSelectedKeys3([]);
  };

  const handleFormSubmit = (data) => {
    setFormData(data);
  };

  return (
    <div className="grid place-items-center gap-10 md:grid-cols-2 p-8">
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
      <TranslatedOuput formData={formData} handleResetForm={handleResetForm} />
    </div>
  );
}
