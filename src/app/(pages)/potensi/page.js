"use client";
import PageTemplate from "../../../templates/PageTemplate";
import React from "react";
import HeaderPotensi from "./headerPotensi";
import ContentPotensi from "./contentPotensi";
import FooterPotensi from "./footerPotensi";

export default function PotensiPage() {
  return (
    <PageTemplate className="bg-gray-100 w-full">
      <HeaderPotensi />
      <ContentPotensi />
      <FooterPotensi />
    </PageTemplate>
  );
}
