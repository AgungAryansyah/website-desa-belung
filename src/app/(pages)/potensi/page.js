import ReactMarkdown from "react-markdown";
import PageTemplate from "../../../templates/PageTemplate";
import { PAGES } from "../../../lib/pages";
import ContentPotensi from "./contentPotensi";

export default function BeritaPage() {
  return (
    <PageTemplate className="bg-gray-100 w-full">
      <ContentPotensi />
    </PageTemplate>
  );
}
