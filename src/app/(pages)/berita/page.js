import ReactMarkdown from "react-markdown";
import PageTemplate from "../../../templates/PageTemplate";
import { PAGES } from "../../../lib/pages";
import ContentBerita from "./contentBerita";

export default function BeritaPage() {
  return (
    <PageTemplate className="bg-gray-100 w-full">
      <ContentBerita />
    </PageTemplate>
  );
}
