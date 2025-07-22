import ReactMarkdown from "react-markdown";
import PageTemplate from "../../../templates/PageTemplate";
import { PAGES } from "../../../lib/pages";
import ContentSejarah from "./contentSejarah";

export default function BeritaPage() {
  return (
    <PageTemplate className="bg-gray-100 w-full">
      <ContentSejarah />
    </PageTemplate>
  );
}
