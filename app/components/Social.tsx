import {
  FacebookFilled,
  InstagramFilled,
  LinkedinFilled,
  OpenAIFilled,
  XOutlined,
} from "@ant-design/icons";
import React from "react";

export interface SocialLink {
  name: string;
  link: string;
}

export default function Social({ name, link }: SocialLink) {
  let Image;
  switch (name) {
    case "facebook":
      Image = FacebookFilled;
      break;
    case "linkedin":
      Image = LinkedinFilled;
      break;
    case "x":
      Image = XOutlined;
      break;
    case "instagram":
      Image = InstagramFilled;
      break;
    case "openai":
      Image = OpenAIFilled;
      break;
    default:
      break;
  }
  return <a href={link}>{Image && <Image />}</a>;
}
