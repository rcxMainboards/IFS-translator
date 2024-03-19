"use client";

import FormIFS from "./FormIFS";
import TranslatedOuput from "./TranslatedOuput";
import { useState } from "react";

export default function MainContent() {
  const [formData, setFormData] = useState(null);

  const handleFormSubmit = (data) => {
    setFormData(data);
  };

  return (
    <div className="grid place-items-center gap-10 md:grid-cols-2 p-8">
      <FormIFS onFormSubmit={handleFormSubmit} />
      <TranslatedOuput formData={formData} />
    </div>
  );
}
