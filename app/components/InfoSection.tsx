"use client";

import { Alert } from "react-bootstrap";

interface InfoProps {
  info: string;
}

export default function InfoSection({ info }: InfoProps) {
  return <Alert>{info}</Alert>;
}
