import * as THREE from "three";
import { WorkTimelinePoint } from "../types";

export const WORK_TIMELINE: WorkTimelinePoint[] = [
  {
    point: new THREE.Vector3(0, 0, 0),
    year: '2023',
    title: 'Computer Science',
    subtitle: 'Core Engineering & CS Student',
    position: 'right',
  },
  {
    point: new THREE.Vector3(-4, -4, -3),
    year: '2024',
    title: 'Full Stack Dev',
    subtitle: 'React, Node, FastAPI & DBs',
    position: 'left',
  },
  {
    point: new THREE.Vector3(-3, -1, -6),
    year: '2025',
    title: 'AI & Automation',
    subtitle: 'Ollama, LangChain, YOLO & LLMs',
    position: 'left',
  },
  {
    point: new THREE.Vector3(0, -1, -10),
    year: '2026',
    title: '2+ Years Exp',
    subtitle: 'Building AI Products & Solutions',
    position: 'left',
  },
  {
    point: new THREE.Vector3(1, 1, -12),
    year: new Date().toLocaleDateString('default', { year: 'numeric' }),
    title: 'Sumit Gajbhiye',
    subtitle: 'AI • Full Stack • Automation',
    position: 'right',
  }
];