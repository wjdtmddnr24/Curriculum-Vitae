import { Metadata } from "next";
import { notFound } from "next/navigation";
import React, { ComponentType } from "react";

import AcademyServerArticle from "./articles/academy-server/AcademyServerArticle";
import AcademyTeacherArticle from "./articles/academy-teacher/AcademyTeacherArticle";
import AirforceArticle from "./articles/airforce/AirforceArticle";
import EvonArticle from "./articles/evon/EvonArticle";
import RobotControlPlatformArticle from "./articles/robot-control-platform/RobotControlPlatformArticle";

type ProjectArticle = {
  name: string;
  Component: ComponentType;
};

const articles: { [id: string]: ProjectArticle } = {
  "robot-control-platform": {
    name: "로봇 관제 플랫폼 설계 및 개발",
    Component: RobotControlPlatformArticle,
  },
  airforce: {
    name: "공군 교육훈련매체개발병",
    Component: AirforceArticle,
  },
  "academy-teacher": {
    name: "코딩학원 강사 및 프로젝트 멘토",
    Component: AcademyTeacherArticle,
  },
  "academy-server": {
    name: "코딩학원 인트라넷, 채점서버 운영 및 유지보수",
    Component: AcademyServerArticle,
  },
  "evon-android": {
    name: "Evon",
    Component: EvonArticle,
  },
};

export async function generateMetadata(props: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const params = await props.params;
  const CareerArticle = articles[params.id];
  if (!CareerArticle) notFound();
  return {
    title: CareerArticle.name,
    description: `Project ${CareerArticle.name}`,
  };
}

export default async function ProjectPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const CareerArticle = articles[params.id];
  if (!CareerArticle) notFound();
  return <CareerArticle.Component />;
}
