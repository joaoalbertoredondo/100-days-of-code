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
}

export default function Social({ name }: SocialLink) {
  let Icon;
  let link;
  switch (name) {
    case "facebook":
      Icon = FacebookFilled;
      link = "https://www.facebook.com/";
      break;
    case "linkedin":
      Icon = LinkedinFilled;
      link = "https://www.linkedin.com/";
      break;
    case "x":
      Icon = XOutlined;
      link = "https://x.com";
      break;
    case "instagram":
      Icon = InstagramFilled;
      link = "https://instagram.com";
      break;
    case "openai":
      Icon = OpenAIFilled;
      link = "https://openai.com";
      break;
    default:
      break;
  }

  return (
    <a href={link} target="_blank">
      {Icon && <Icon />}
    </a>
  );
}
