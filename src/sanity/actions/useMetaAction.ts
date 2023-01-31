import {
  type DocumentActionDescription,
  type DocumentActionProps,
  useDocumentOperation,
} from "sanity";
import { type SanityDocument } from "@sanity/client";
import { EyeOpenIcon, EyeClosedIcon } from "@sanity/icons";
import { nanoid } from "nanoid";
import readingTime from "reading-time";

function getSlug(input: SanityDocument) {
  if (!input.slug && input.title) {
    const title = input.title as string;
    return `${title.toLowerCase().replaceAll(" ", "-")}-${nanoid(5)}`;
  }
  return input.slug as string;
}

function getReadingTime(input: SanityDocument) {
  if (input.body) {
    const body = input.body as string;
    const { minutes } = readingTime(body);
    return Math.round(minutes);
  }
  return 0;
}

export function useMetaAction({
  id,
  type,
  draft,
}: DocumentActionProps): DocumentActionDescription {
  const { patch, publish } = useDocumentOperation(id, type);

  return {
    label: "Generate Meta",
    disabled: publish.disabled ? true : false,
    icon: publish.disabled ? EyeClosedIcon : EyeOpenIcon,
    onHandle: () => {
      if (draft) {
        patch.execute(
          [
            {
              set: {
                slug: getSlug(draft),
                readingTime: getReadingTime(draft),
              },
            },
          ],
          draft
        );
      }
    },
  };
}
