import frame from "sanity-plugin-iframe-pane";
import { type DefaultDocumentNodeResolver } from "sanity/desk";
import { Post } from "../schemas/post";

const defaultDocumentNode: DefaultDocumentNodeResolver = (
  S,
  { schemaType }
) => {
  switch (schemaType) {
    case "post":
      return S.document().views([
        S.view.form(),
        S.view
          .component(frame)
          .options({
            url: (doc: Post) => {
              if (!doc.slug) {
                return `/404`;
              }
              return `/blog/${doc.slug}?preview=true`;
            },
          })
          .title("Preview"),
        S.view
          .component(frame)
          .options({
            url: (doc: Post) => {
              if (!doc.slug) {
                return `/404`;
              }
              return `/api/og?title=${encodeURI(doc.title)}&path=${doc.slug}`;
            },
          })
          .title("OG Image"),
      ]);
    default:
      return S.document().views([S.view.form()]);
  }
};

export default defaultDocumentNode;
