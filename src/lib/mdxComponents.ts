import { MDXRemoteProps } from "next-mdx-remote";
import Anchor from "@/components/ui/Anchor";
import Pre from "@/components/ui/Pre";
import {
  ProseAnchor,
  ProseBlockquote,
  ProseH1,
  ProseH2,
  ProseH3,
  ProseH4,
  ProseInlineCode,
  ProseP,
  ProseStrong,
  ProseUL,
} from "@/components/ui/typography";

export const mdxComponents = {
  Anchor: Anchor,
  pre: Pre,
  h1: ProseH1,
  h2: ProseH2,
  h3: ProseH3,
  h4: ProseH4,
  p: ProseP,
  a: ProseAnchor,
  strong: ProseStrong,
  blockquote: ProseBlockquote,
  ul: ProseUL,
  code: ProseInlineCode,
} as MDXRemoteProps["components"];
