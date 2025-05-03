import { Metadata } from "next";
import { notFound } from "next/navigation";
import React, { ComponentType } from "react";

import CamtactArticle from "./articles/camtact/CamtactArticle";
import CaptainHookArticle from "./articles/captain-hook/CaptainHookArticle";
import PortfolioArticle from "./articles/portfolio/PortfolioArticle";
import SWMBotArticle from "./articles/swm-bot/SWMBotArticle";
import TCQRArticle from "./articles/tcqr/TCQRArticle";
import WeboxArticle from "./articles/webox/WeboxArticle";

type ProjectArticle = {
  name: string;
  Component: ComponentType;
};

const articles: { [id: string]: ProjectArticle } = {
  webox: { name: "Webox", Component: WeboxArticle },
  portfolio: { name: "Portfolio", Component: PortfolioArticle },
  "swm-bot": { name: "SWM Bot", Component: SWMBotArticle },
  "captain-hook": { name: "Captain Hook", Component: CaptainHookArticle },
  camtact: { name: "Camtact", Component: CamtactArticle },
  tcqr: { name: "TCQR", Component: TCQRArticle },
};

export async function generateMetadata(props: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const params = await props.params;
  const ProjectArticle = articles[params.id];
  if (!ProjectArticle) notFound();
  return {
    title: ProjectArticle.name,
    description: `Project ${ProjectArticle.name}`,
  };
}

export default async function ProjectPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const ProjectArticle = articles[params.id];
  if (!ProjectArticle) notFound();
  return <ProjectArticle.Component />;
}
