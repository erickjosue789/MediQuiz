import { GiMicroscope, GiEyeTarget, GiSunglasses } from 'react-icons/gi'
import { moduleQuestions } from './moduleQuestions'

const iconMap = { GiMicroscope, GiEyeTarget, GiSunglasses }

const modulesBase = [
  {
    "id": "oftalmologia-basica",
    "title": "Oftalmología Básica",
    "description": "Reconoce cuadros frecuentes del segmento anterior y posterior, prueba de agudeza visual y urgencias oftalmológicas.",
    "duration": "92 casos",
    "difficulty": "Intermedio",
    "theme": {
      "ring": "ring-amber-400/60",
      "gradient": "from-amber-400/15 via-orange-500/5 to-transparent",
      "accent": "text-amber-300"
    },
    "icon": "GiMicroscope"
  },
  {
    "id": "semiologia-ocular",
    "title": "Semiología Ocular",
    "description": "Anamnesis dirigida, técnicas de exploración del segmento anterior y posterior, valoración funcional (AV, color, campo, motilidad) y hallazgos clínicos clave.",
    "duration": "90 casos",
    "difficulty": "Intermedio",
    "theme": {
      "ring": "ring-cyan-400/60",
      "gradient": "from-cyan-400/15 via-sky-500/5 to-transparent",
      "accent": "text-cyan-300"
    },
    "icon": "GiEyeTarget"
  },
  {
    "id": "optica-refraccion",
    "title": "Óptica y Refracción",
    "description": "Fundamentos de óptica geométrica, vergencias, potencia dióptrica, errores refractivos y técnicas clínicas para la prescripción.",
    "duration": "91 casos",
    "difficulty": "Intermedio",
    "theme": {
      "ring": "ring-violet-400/60",
      "gradient": "from-violet-400/15 via-fuchsia-500/5 to-transparent",
      "accent": "text-violet-300"
    },
    "icon": "GiSunglasses"
  },
  {
    "id": "conjuntiva",
    "title": "Conjuntiva y conjuntivitis",
    "description": "Anatomía, histología y principales cuadros clínicos de inflamación conjuntival.",
    "duration": "16 preguntas",
    "difficulty": "Intermedio",
    "theme": {
      "ring": "ring-sky-400/60",
      "gradient": "from-sky-400/15 via-cyan-500/5 to-transparent",
      "accent": "text-sky-300"
    },
    "icon": "GiEyeTarget"
  }
]

export const modules = modulesBase.map((module) => ({
  ...module,
  icon: iconMap[module.icon] ?? module.icon,
  questions: moduleQuestions[module.id] ?? []
}))
