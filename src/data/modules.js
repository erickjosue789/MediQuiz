import { GiEyeTarget, GiMicroscope, GiSunglasses } from 'react-icons/gi'

export const modules = [
    {
        id: "oftalmologia-basica",
        title: "Oftalmología Básica",
        description: "Reconoce cuadros frecuentes del segmento anterior y posterior, prueba de agudeza visual y urgencias oftalmológicas.",
        duration: "92 casos",
        difficulty: "Intermedio",
        icon: GiMicroscope,
        theme: {
            ring: "ring-amber-400/60",
            gradient: "from-amber-400/15 via-orange-500/5 to-transparent",
            accent: "text-amber-300"
        },
        questions: [
            {
                id: "oftal-1",
                question: "La agudeza visual se evalúa habitualmente con:",
                options: ["Cartilla de Ishihara", "Prueba de Snellen", "Lámpara de hendidura", "Tonómetro de aplanación"],
                answer: "Prueba de Snellen",
                explanation: "Snellen es el estándar para agudeza visual a distancia."
            },
            {
                id: "oftal-2",
                question: "El defecto refractivo que mejora con un orificio estenopeico suele corresponder a:",
                options: ["Ametropía refractiva", "Opacidad vítrea", "Edema de papila", "Desprendimiento de retina"],
                answer: "Ametropía refractiva",
                explanation: "El estenopeico reduce los rayos periféricos y compensa errores refractivos."
            },
            {
                id: "oftal-3",
                question: "Dolor ocular intenso, ojo rojo, midriasis media fija y halos alrededor de luces sugieren:",
                options: ["Uveítis anterior", "Glaucoma agudo de ángulo cerrado", "Conjuntivitis alérgica", "Neuritis óptica"],
                answer: "Glaucoma agudo de ángulo cerrado",
                explanation: "Clásico de aumento súbito de presión intraocular con midriasis a media luz."
            },
            {
                id: "oftal-4",
                question: "Tratamiento inicial del glaucoma agudo de ángulo cerrado (en urgencias):",
                options: ["Ciclopejía con atropina", "Manitol IV + acetazolamida", "Esteroide sistémico", "Antihistamínicos"],
                answer: "Manitol IV + acetazolamida",
                explanation: "Baja rápidamente la PIO antes de la iridotomía láser."
            },
            {
                id: "oftal-5",
                question: "El colirio de fluoresceína es útil para:",
                options: ["Valorar visión cromática", "Detectar defectos epiteliales corneales", "Medir campo visual", "Explorar papila óptica"],
                answer: "Detectar defectos epiteliales corneales",
                explanation: "Tiñe áreas donde falta epitelio corneal, como en abrasiones o queratitis."
            },
            {
                id: "oftal-6",
                question: "Un paciente con sensación de cuerpo extraño, fotofobia y defecto epitelial puntiforme difuso tras soldar sin protección sugiere:",
                options: ["Queratitis actínica", "Blefaritis", "Chalazión", "Dacriocistitis"],
                answer: "Queratitis actínica",
                explanation: "La exposición UV produce queratitis punteada superficial dolorosa."
            },
            {
                id: "oftal-7",
                question: "El orzuelo corresponde a:",
                options: ["Inflamación crónica estéril de glándula de Meibomio", "Infección aguda de glándula palpebral", "Quiste epidérmico", "Lesión vascular congénita"],
                answer: "Infección aguda de glándula palpebral",
                explanation: "Generalmente por Staphylococcus, doloroso y eritematoso."
            },
            {
                id: "oftal-8",
                question: "La diferencia principal entre orzuelo y chalazión es que el chalazión suele ser:",
                options: ["Doloroso y eritematoso", "Indoloro y crónico", "Secreción purulenta", "Siempre asociado a blefaritis"],
                answer: "Indoloro y crónico",
                explanation: "El chalazión es reacción granulomatosa no infecciosa."
            },
            {
                id: "oftal-9",
                question: "Prurito intenso bilateral, secreción acuosa y papilas tarsales son típicos de:",
                options: ["Conjuntivitis bacteriana", "Conjuntivitis alérgica", "Uveítis anterior", "Queratitis herpética"],
                answer: "Conjuntivitis alérgica",
                explanation: "Predomina el prurito y lagrimeo sin secreción purulenta."
            },
            {
                id: "oftal-10",
                question: "La causa más frecuente de pérdida indolora y súbita de visión monocular en un diabético con flotadores previos es:",
                options: ["Neuritis óptica", "Desprendimiento de retina regmatógeno", "Glaucoma crónico", "Catarata subcapsular"],
                answer: "Desprendimiento de retina regmatógeno",
                explanation: "Flashes, moscas volantes y “cortina” indican DR por ruptura retiniana."
            },
            {
                id: "oftal-11",
                question: "La maculopatía más asociada a edad avanzada con metamorfopsias es:",
                options: ["DMAE", "Retinosis pigmentaria", "Coroiditis serosa central", "Toxoplasmosis ocular"],
                answer: "DMAE",
                explanation: "La degeneración macular relacionada con la edad afecta visión central."
            },
            {
                id: "oftal-12",
                question: "La prueba de Ishihara evalúa principalmente:",
                options: ["Visión nocturna", "Visión de colores (rojo-verde)", "Agudeza visual cercana", "Visión periférica"],
                answer: "Visión de colores (rojo-verde)",
                explanation: "Detecta discromatopsias, sobre todo protan/deutan."
            },
            {
                id: "oftal-13",
                question: "Un halo dendrítico corneal que tiñe con fluoresceína sugiere:",
                options: ["Queratitis por Acanthamoeba", "Queratitis herpética", "Úlcera bacteriana central", "Queratocono"],
                answer: "Queratitis herpética",
                explanation: "Lesiones dendríticas epiteliales son típicas del VHS-1."
            },
            {
                id: "oftal-14",
                question: "En una úlcera corneal bacteriana, el manejo inicial incluye:",
                options: ["Esteroide tópico desde el inicio", "Antibiótico tópico de amplio espectro", "Atropina tópica sola", "Agua estéril cada hora"],
                answer: "Antibiótico tópico de amplio espectro",
                explanation: "Cobertura empírica intensiva mientras llega cultivo."
            },
            {
                id: "oftal-15",
                question: "El aumento de la presión intraocular se mide de forma estándar con:",
                options: ["Campimetría", "Oftalmoscopía indirecta", "Tonómetro de aplanación", "Paquimetría"],
                answer: "Tonómetro de aplanación",
                explanation: "La tonometría de Goldmann es el gold standard."
            },
            {
                id: "oftal-16",
                question: "El pterigión es:",
                options: ["Crecimiento fibrovascular hacia la córnea", "Degeneración de la retina periférica", "Opacidad del cristalino", "Inflamación de la úvea media"],
                answer: "Crecimiento fibrovascular hacia la córnea",
                explanation: "Relacionado con exposición UV y polvo."
            },
            {
                id: "oftal-17",
                question: "En ojo seco evaporativo, el hallazgo típico en BUT (Break-Up Time) es:",
                options: ["Tiempo de ruptura >15 s", "Tiempo de ruptura <10 s", "PIO elevadas", "Defecto pupilar aferente"],
                answer: "Tiempo de ruptura <10 s",
                explanation: "Indica inestabilidad de la película lagrimal."
            },
            {
                id: "oftal-18",
                question: "Dolor ocular, miosis, fotofobia y células en cámara anterior sugieren:",
                options: ["Conjuntivitis viral", "Uveítis anterior", "Glaucoma crónico de ángulo abierto", "Catarata nuclear"],
                answer: "Uveítis anterior",
                explanation: "La reacción inflamatoria intraocular cursa con miosis dolorosa."
            },
            {
                id: "oftal-19",
                question: "Ante cuerpo extraño metálico corneal superficial, la primera medida apropiada es:",
                options: ["Parche ocular por 48 h", "Irrigación y valoración con fluoresceína", "Corticosteroide tópico inmediato", "Oclusión y observación"],
                answer: "Irrigación y valoración con fluoresceína",
                explanation: "La irrigación elimina partículas y la tinción delimita el defecto."
            },
            {
                id: "oftal-20",
                question: "El ‘arco senil’ corresponde a:",
                options: ["Depósito lipídico periférico en córnea", "Neovascularización retiniana", "Opacidad vítrea", "Degeneración drusenoide macular"],
                answer: "Depósito lipídico periférico en córnea",
                explanation: "Anillo grisáceo periférico corneal, benigno en ancianos."
            },
            {
                id: "oftal-21",
                question: "El defecto pupilar aferente relativo (Marcus Gunn) indica lesión de:",
                options: ["Vía eferente parasimpática", "Nervio óptico/vía retina-óptica", "Músculo esfínter del iris", "Núcleo de Edinger-Westphal bilateral"],
                answer: "Nervio óptico/vía retina-óptica",
                explanation: "Responde con menor constricción al estímulo luminoso directo en el ojo afectado."
            },
            {
                id: "oftal-22",
                question: "En retinopatía diabética proliferativa el hallazgo definitorio es:",
                options: ["Exudados duros", "Microaneurismas aislados", "Neovasos en disco o retina", "Hemorragias en llama aisladas"],
                answer: "Neovasos en disco o retina",
                explanation: "Proliferación neovascular caracteriza la fase proliferativa."
            },
            {
                id: "oftal-23",
                question: "Paciente miope alto con flashes y miodesopsias. La prueba más útil inicial es:",
                options: ["Tonometría", "Oftalmoscopía con dilatación", "Ishihara", "Paquimetría"],
                answer: "Oftalmoscopía con dilatación",
                explanation: "Permite buscar desgarros periféricos y DR."
            },
            {
                id: "oftal-24",
                question: "Conjuntivitis bacteriana típica presenta:",
                options: ["Prurito intenso y acuosa", "Secreción mucopurulenta, costras matutinas", "Fotofobia severa con miosis", "Halos con midriasis fija"],
                answer: "Secreción mucopurulenta, costras matutinas",
                explanation: "Exudado purulento y adhesión palpebral al despertar."
            },
            {
                id: "oftal-25",
                question: "La catarata se define como:",
                options: ["Opacidad del cristalino", "Opacidad corneal", "Desgarro retiniano", "Edema macular cistoide"],
                answer: "Opacidad del cristalino",
                explanation: "Causa frecuente de disminución de AV en adultos mayores."
            },
            {
                id: "oftal-26",
                question: "En trauma contuso con hifema, la conducta inicial incluye:",
                options: ["AINEs orales", "Reposo con cabecera elevada y protección ocular", "Masaje ocular", "Cicloplejía contraindicada"],
                answer: "Reposo con cabecera elevada y protección ocular",
                explanation: "Disminuye resangrado y controla dolor con ciclopléjicos (sin AINEs)."
            },
            {
                id: "oftal-27",
                question: "El queratocono se asocia a:",
                options: ["Engrosamiento corneal central", "Adelgazamiento y protrusión corneal", "Aumento de PIO", "Atrofia óptica primaria"],
                answer: "Adelgazamiento y protrusión corneal",
                explanation: "Deforma la córnea en cono, generando astigmatismo irregular."
            },
            {
                id: "oftal-28",
                question: "Fondo de ojo con drusas amarillentas en mácula sugiere:",
                options: ["DMAE seca", "DMAE húmeda", "Neuritis óptica", "Retinopatía hipertensiva grado IV"],
                answer: "DMAE seca",
                explanation: "Depósitos sub-RPE característicos en la forma seca."
            },
            {
                id: "oftal-29",
                question: "En el glaucoma primario de ángulo abierto el cambio campimétrico típico es:",
                options: ["Escotoma central temprano", "Escotomas arqueados y aumento de mancha ciega", "Hemianopsia bitemporal", "Cuadrantanopsia superior"],
                answer: "Escotomas arqueados y aumento de mancha ciega",
                explanation: "Daño de fibras arcuatas produce defectos característicos."
            },
            {
                id: "oftal-30",
                question: "La oclusión de arteria central de la retina muestra clásicamente:",
                options: ["Mancha rojo cereza en mácula", "Exudados algodonosos generalizados", "Neovasos en iris", "Desgarros retinianos múltiples"],
                answer: "Mancha rojo cereza en mácula",
                explanation: "Mácula contrasta sobre retina pálida isquémica."
            },
            {
                id: "oftal-31",
                question: "La dacriocistitis aguda suele presentarse con:",
                options: ["Dolor y tumefacción en canto lateral", "Dolor y tumefacción en canto medial lagrimal", "Ptosis súbita", "Diplopía horizontal"],
                answer: "Dolor y tumefacción en canto medial lagrimal",
                explanation: "Infección del saco lagrimal en región medial."
            },
            {
                id: "oftal-32",
                question: "En un recién nacido con secreción purulenta bilateral intensa a los 2–5 días de vida, sospecha primaria:",
                options: ["Conjuntivitis por Chlamydia", "Conjuntivitis gonocócica", "Conjuntivitis química por nitrato", "Queratitis herpética"],
                answer: "Conjuntivitis gonocócica",
                explanation: "Inicio precoz y purulento abundante; requiere manejo urgente."
            },
            {
                id: "oftal-33",
                question: "El test de Schirmer evalúa:",
                options: ["Estabilidad de película lagrimal", "Producción acuosa lagrimal", "Curvatura corneal", "PIO diurna"],
                answer: "Producción acuosa lagrimal",
                explanation: "Mide humectación de tiras de papel en fondo de saco inferior."
            },
            {
                id: "oftal-34",
                question: "Cuadro de dolor ocular severo con vesículas dérmicas en dermatoma V1 sugiere:",
                options: ["Herpes zóster oftálmico", "Blefaritis seborreica", "Rosácea ocular", "Canaliculitis"],
                answer: "Herpes zóster oftálmico",
                explanation: "Compromiso del trigémino rama oftálmica con riesgo corneal."
            },
            {
                id: "oftal-35",
                question: "La papiledema bilateral usualmente indica:",
                options: ["Hipertensión intracraneal", "Neuropatía óptica isquémica", "Neuritis óptica unilateral", "Atrofia óptica hereditaria"],
                answer: "Hipertensión intracraneal",
                explanation: "Edema de disco por presión intracraneal elevada."
            },
            {
                id: "oftal-36",
                question: "Visión borrosa que mejora con iluminación intensa sugiere:",
                options: ["Catarata nuclear", "Miopía", "Hipermetropía", "Astigmatismo"],
                answer: "Hipermetropía",
                explanation: "La miosis refleja aumenta la profundidad de foco en hipermétropes."
            },
            {
                id: "oftal-37",
                question: "Tratamiento de primera línea para conjuntivitis alérgica estacional:",
                options: ["Antibiótico tópico", "Lágrimas artificiales y antihistamínicos/mastocitos", "Corticoide sistémico", "Atropina tópica"],
                answer: "Lágrimas artificiales y antihistamínicos/mastocitos",
                explanation: "Controla prurito e inflamación leve-moderada."
            },
            {
                id: "oftal-38",
                question: "El ‘signeo’ de Seidel positivo indica:",
                options: ["Fuga de humor acuoso por herida corneal", "PIO elevada", "Edema macular", "Desgarro retiniano"],
                answer: "Fuga de humor acuoso por herida corneal",
                explanation: "Fluoresceína diluida por salida de acuoso a través de lesión."
            },
            {
                id: "oftal-39",
                question: "Ulcera corneal en usuario de lentes de contacto: cobertura empírica ideal incluye:",
                options: ["Macrólido tópico", "Fluoroquinolona tópica anti-Pseudomonas", "Penicilina G tópica", "Antiviral tópico"],
                answer: "Fluoroquinolona tópica anti-Pseudomonas",
                explanation: "Riesgo elevado de Pseudomonas en lente de contacto."
            },
            {
                id: "oftal-40",
                question: "En neuropatía óptica isquémica anterior no arterítica, el factor de riesgo clásico es:",
                options: ["Hipotensión nocturna y discopatía ‘en embudo’", "Hipertiroidismo", "Miastenia gravis", "Deficiencia de B12 aislada"],
                answer: "Hipotensión nocturna y discopatía ‘en embudo’",
                explanation: "Cabeza del nervio pequeña predispone a isquemia."
            },
            {
                id: "oftal-41",
                question: "La retinopatía hipertensiva grado IV se caracteriza por:",
                options: ["Arterioloesclerosis leve", "Cruzamientos AV", "Exudados algodonosos y edema de papila", "Microaneurismas aislados"],
                answer: "Exudados algodonosos y edema de papila",
                explanation: "Gravedad máxima con compromiso del disco."
            },
            {
                id: "oftal-42",
                question: "Niño con leucocoria unilateral: diagnóstico a descartar con urgencia:",
                options: ["Retinoblastoma", "Ametropía", "Conjuntivitis viral", "Estrabismo acomodativo"],
                answer: "Retinoblastoma",
                explanation: "La leucocoria obliga a descartar tumor intraocular."
            },
            {
                id: "oftal-43",
                question: "El tratamiento que modifica el curso en DMAE húmeda es:",
                options: ["Vitaminas AREDS exclusivamente", "Láser térmico no selectivo", "Anti-VEGF intravítreo", "Corticoide tópico"],
                answer: "Anti-VEGF intravítreo",
                explanation: "Inhibe neovascularización coroidea."
            },
            {
                id: "oftal-44",
                question: "‘Moscas volantes’ súbitas con hemorragia vítrea en diabético sugiere:",
                options: ["Neuritis óptica", "Desprendimiento de vítreo posterior con neovasos", "Glaucoma agudo", "Papiledema"],
                answer: "Desprendimiento de vítreo posterior con neovasos",
                explanation: "Los neovasos frágiles sangran con tracción vítrea."
            },
            {
                id: "oftal-45",
                question: "La epiescleritis, a diferencia de la escleritis, suele ser:",
                options: ["Muy dolorosa y profunda", "Autolimitada y con dolor leve", "Asociada a necrosis escleral", "Emergencia quirúrgica"],
                answer: "Autolimitada y con dolor leve",
                explanation: "Inflamación superficial, benigna y autolimitada."
            },
            {
                id: "oftal-46",
                question: "Paciente con diplopía vertical que empeora al mirar hacia abajo y aducción: probable parálisis de:",
                options: ["III par", "IV par (troclear)", "VI par", "Nervio óptico"],
                answer: "IV par (troclear)",
                explanation: "Afecta oblicuo superior: lectura/escaleras empeoran."
            },
            {
                id: "oftal-47",
                question: "El coloboma del iris congénito se observa como:",
                options: ["Miosis puntiforme", "Defecto en reloj de arena inferior", "Defecto en forma de llave (hendidura inferior)", "Heterocromía iridiana"],
                answer: "Defecto en forma de llave (hendidura inferior)",
                explanation: "Falla del cierre de la fisura fetal inferior."
            },
            {
                id: "oftal-48",
                question: "En parálisis del VI par se observa típicamente:",
                options: ["Limitación de abducción", "Limitación de aducción", "Ptosis marcada", "Anisocoria reactiva"],
                answer: "Limitación de abducción",
                explanation: "Afecta recto lateral, generando diplopía horizontal."
            },
            {
                id: "oftal-49",
                question: "‘Ojo rojo’ doloroso con disminución de visión y tinción positiva difusa del epitelio sugiere:",
                options: ["Conjuntivitis alérgica pura", "Queratitis epitelial difusa", "Blefaritis seborreica aislada", "Catarata subcapsular"],
                answer: "Queratitis epitelial difusa",
                explanation: "El defecto epitelial se evidencia con fluoresceína."
            },
            {
                id: "oftal-50",
                question: "La principal medida preventiva de progresión en retinopatía diabética es:",
                options: ["Suplementos vitamínicos", "Control estricto glucémico y factores de riesgo", "Oclusión ocular nocturna", "Antibiótico profiláctico"],
                answer: "Control estricto glucémico y factores de riesgo",
                explanation: "Glicemia, TA y lípidos controlados reducen progresión."
            },
            {
                id: "oftal-51",
                question: "¿Cuál es el medio refringente más potente del ojo humano?",
                options: ["Córnea", "Cristalino", "Humor acuoso", "Humor vítreo"],
                answer: "Córnea",
                explanation: "La córnea aporta cerca del 70 % del poder refractivo total del ojo humano."
            },
            {
                id: "oftal-52",
                question: "El cristalino modifica su curvatura para enfocar objetos cercanos en un proceso llamado:",
                options: ["Acomodación", "Convergencia", "Adaptación", "Fijación"],
                answer: "Acomodación",
                explanation: "La contracción del músculo ciliar aumenta la curvatura del cristalino para enfocar de cerca."
            },
            {
                id: "oftal-53",
                question: "El punto donde convergen los ejes visuales se denomina:",
                options: ["Punto nodal", "Fóvea central", "Quiasma óptico", "Disco óptico"],
                answer: "Fóvea central",
                explanation: "La fóvea es el área de máxima agudeza visual en la retina."
            },
            {
                id: "oftal-54",
                question: "¿Qué músculo eleva el párpado superior?",
                options: ["Recto superior", "Oblicuo superior", "Elevador del párpado superior", "Recto medial"],
                answer: "Elevador del párpado superior",
                explanation: "Inervado por el III par craneal, permite abrir el ojo."
            },
            {
                id: "oftal-55",
                question: "La esclerótica tiene como principal función:",
                options: ["Permitir el paso de luz", "Dar forma y protección al globo ocular", "Producir humor acuoso", "Contener bastones y conos"],
                answer: "Dar forma y protección al globo ocular",
                explanation: "La esclera es la capa fibrosa externa que protege el ojo."
            },
            {
                id: "oftal-56",
                question: "¿Qué estructura controla el diámetro pupilar?",
                options: ["Cuerpo ciliar", "Iris", "Córnea", "Retina"],
                answer: "Iris",
                explanation: "El iris regula la cantidad de luz que entra al ojo mediante el esfínter y dilatador pupilar."
            },
            {
                id: "oftal-57",
                question: "La retina convierte los estímulos luminosos en impulsos nerviosos mediante:",
                options: ["Células ganglionares", "Bastones y conos", "Epitelio pigmentario", "Cuerpo ciliar"],
                answer: "Bastones y conos",
                explanation: "Son los fotorreceptores responsables de la visión nocturna y diurna."
            },
            {
                id: "oftal-58",
                question: "Los bastones se especializan en:",
                options: ["Visión en color", "Visión en baja iluminación", "Percepción fina de detalles", "Percepción central"],
                answer: "Visión en baja iluminación",
                explanation: "Son sensibles a la luz tenue y predominan en la retina periférica."
            },
            {
                id: "oftal-59",
                question: "La mácula lútea se caracteriza por:",
                options: ["Alta densidad de conos", "Presencia exclusiva de bastones", "Ausencia de vasos sanguíneos", "Zona de visión periférica"],
                answer: "Alta densidad de conos",
                explanation: "La concentración de conos permite máxima resolución y percepción del color."
            },
            {
                id: "oftal-60",
                question: "El nervio óptico está formado por:",
                options: ["Prolongaciones de conos", "Axones de las células ganglionares", "Fibras del cuerpo ciliar", "Células bipolares"],
                answer: "Axones de las células ganglionares",
                explanation: "Transmiten la información visual desde la retina hacia el cerebro."
            },
            {
                id: "oftal-61",
                question: "¿Qué capa del ojo contiene los vasos coroideos?",
                options: ["Retina", "Coroides", "Esclerótica", "Córnea"],
                answer: "Coroides",
                explanation: "La coroides nutre la retina externa y regula la temperatura ocular."
            },
            {
                id: "oftal-62",
                question: "El humor acuoso se produce en:",
                options: ["Procesos ciliares", "Coroides", "Músculo recto medial", "Conducto lagrimal"],
                answer: "Procesos ciliares",
                explanation: "Secreción continua que mantiene la presión intraocular y nutre estructuras avasculares."
            },
            {
                id: "oftal-63",
                question: "La vía lagrimal drena finalmente en:",
                options: ["Senos paranasales", "Cornete medio", "Meato nasal inferior", "Faringe"],
                answer: "Meato nasal inferior",
                explanation: "El conducto nasolagrimal desemboca en el meato nasal inferior."
            },
            {
                id: "oftal-64",
                question: "¿Cuál es la principal causa de ojo seco en ancianos?",
                options: ["Hiperproducción de mucina", "Disminución de secreción acuosa lagrimal", "Aumento de grasa lagrimal", "Defecto de cornea"],
                answer: "Disminución de secreción acuosa lagrimal",
                explanation: "Las glándulas lagrimales disminuyen su función con la edad."
            },
            {
                id: "oftal-65",
                question: "El punto ciego fisiológico corresponde al:",
                options: ["Lugar donde se cruzan los nervios ópticos", "Papila óptica", "Mácula", "Fóvea"],
                answer: "Papila óptica",
                explanation: "No tiene fotorreceptores, por lo tanto no percibe imágenes."
            },
            {
                id: "oftal-66",
                question: "La ametropía caracterizada por enfoque anterior a la retina es:",
                options: ["Hipermetropía", "Miopía", "Astigmatismo", "Presbicia"],
                answer: "Miopía",
                explanation: "El globo ocular es más largo o el poder refractivo excesivo."
            },
            {
                id: "oftal-67",
                question: "La presbicia se debe a:",
                options: ["Curvatura corneal anómala", "Opacidad del cristalino", "Pérdida de elasticidad del cristalino", "Aumento de la PIO"],
                answer: "Pérdida de elasticidad del cristalino",
                explanation: "Con la edad disminuye la capacidad de acomodación para visión cercana."
            },
            {
                id: "oftal-68",
                question: "El astigmatismo se origina por:",
                options: ["Aumento del diámetro anteroposterior", "Córnea con curvaturas diferentes", "Disminución de longitud axial", "Opacidad vítrea"],
                answer: "Córnea con curvaturas diferentes",
                explanation: "Produce múltiples focos en vez de uno, generando visión distorsionada."
            },
            {
                id: "oftal-69",
                question: "¿Qué instrumento se utiliza para examinar el fondo de ojo?",
                options: ["Tonómetro", "Oftalmoscopio", "Autorrefractómetro", "Foróptero"],
                answer: "Oftalmoscopio",
                explanation: "Permite visualizar retina, papila y vasos."
            },
            {
                id: "oftal-70",
                question: "La prueba de reflejo rojo sirve para detectar:",
                options: ["Opacidad de medios oculares", "Presión intraocular elevada", "Ametropía", "Alteración del color"],
                answer: "Opacidad de medios oculares",
                explanation: "Su ausencia sugiere catarata o leucocoria en niños."
            },
            {
                id: "oftal-71",
                question: "La presión intraocular normal oscila entre:",
                options: ["5-10 mmHg", "10-21 mmHg", "20-30 mmHg", "25-35 mmHg"],
                answer: "10-21 mmHg",
                explanation: "Valores sostenidos por encima de 21 mmHg requieren valoración para glaucoma."
            },
            {
                id: "oftal-72",
                question: "¿Cuál de las siguientes estructuras no es transparente?",
                options: ["Córnea", "Cristalino", "Esclerótica", "Humor vítreo"],
                answer: "Esclerótica",
                explanation: "Es opaca para proteger el interior ocular."
            },
            {
                id: "oftal-73",
                question: "El campo visual normal abarca aproximadamente:",
                options: ["90°", "120°", "180°", "200°"],
                answer: "180°",
                explanation: "Corresponde al total de visión periférica binocular."
            },
            {
                id: "oftal-74",
                question: "La capa más externa del globo ocular es:",
                options: ["Retina", "Coroides", "Esclerótica", "Iris"],
                answer: "Esclerótica",
                explanation: "Capa fibrosa que da forma y resistencia."
            },
            {
                id: "oftal-75",
                question: "El músculo oblicuo inferior produce principalmente:",
                options: ["Depresión y abducción", "Elevación y abducción", "Elevación y aducción", "Rotación interna"],
                answer: "Elevación y abducción",
                explanation: "Actúa elevando el ojo cuando está en aducción."
            },
            {
                id: "oftal-76",
                question: "¿Qué par craneal inerva el músculo recto lateral?",
                options: ["III", "IV", "VI", "V"],
                answer: "VI",
                explanation: "El nervio abducens controla el movimiento lateral del ojo."
            },
            {
                id: "oftal-77",
                question: "El reflejo fotomotor directo evalúa la función de:",
                options: ["Nervio óptico y oculomotor", "Nervio trigémino", "Nervio facial", "Nervio abducens"],
                answer: "Nervio óptico y oculomotor",
                explanation: "La vía aferente es el II par y la eferente el III."
            },
            {
                id: "oftal-78",
                question: "El test de visión cromática de Ishihara identifica principalmente:",
                options: ["Tritanopia", "Deuteranopia y protanopia", "Hemianopsia", "Ambliopía"],
                answer: "Deuteranopia y protanopia",
                explanation: "Evalúa defectos rojo-verde más frecuentes."
            },
            {
                id: "oftal-79",
                question: "¿Qué estructura ocular se regenera rápidamente tras una lesión superficial?",
                options: ["Córnea", "Esclerótica", "Retina", "Iris"],
                answer: "Córnea",
                explanation: "Su epitelio se renueva en 24-48 horas por alta capacidad mitótica."
            },
            {
                id: "oftal-80",
                question: "La vascularización de la retina procede principalmente de:",
                options: ["Arteria central de la retina", "Arteria ciliar anterior", "Arteria oftálmica colateral", "Coroides media"],
                answer: "Arteria central de la retina",
                explanation: "Rama de la arteria oftálmica que penetra por el nervio óptico."
            },
            {
                id: "oftal-81",
                question: "El glaucoma congénito se manifiesta típicamente con:",
                options: ["Epífora, fotofobia y blefaroespasmo", "Midriasis fija", "Hemorragias retinianas", "Visión doble"],
                answer: "Epífora, fotofobia y blefaroespasmo",
                explanation: "Tríada clásica por aumento de PIO desde el nacimiento."
            },
            {
                id: "oftal-82",
                question: "¿Qué fármaco disminuye la producción de humor acuoso?",
                options: ["Timolol", "Pilocarpina", "Adrenalina", "Fenilefrina"],
                answer: "Timolol",
                explanation: "Betabloqueador tópico que reduce la secreción ciliar."
            },
            {
                id: "oftal-83",
                question: "La exploración con lámpara de hendidura permite observar:",
                options: ["Campo visual", "Segmento anterior", "Retina periférica", "Vía lagrimal"],
                answer: "Segmento anterior",
                explanation: "Córnea, cámara anterior, iris y cristalino se evalúan con detalle."
            },
            {
                id: "oftal-84",
                question: "¿Qué se evalúa al realizar una tonometría de aplanación?",
                options: ["Transparencia corneal", "Presión intraocular", "Refracción ocular", "Coordinación ocular"],
                answer: "Presión intraocular",
                explanation: "Mide la fuerza necesaria para aplanar un área corneal conocida."
            },
            {
                id: "oftal-85",
                question: "La lágrima se compone de tres capas: lípida, acuosa y:",
                options: ["Mucosa", "Proteica", "Fibrilar", "Serosa"],
                answer: "Mucosa",
                explanation: "La capa mucosa ayuda a la adherencia de la película lagrimal a la córnea."
            },
            {
                id: "oftal-86",
                question: "La queratitis por exposición se debe a:",
                options: ["Cierre incompleto palpebral", "Infección bacteriana", "Lentes de contacto", "Cuerpo extraño"],
                answer: "Cierre incompleto palpebral",
                explanation: "La superficie corneal se seca y ulcera por falta de lubricación."
            },
            {
                id: "oftal-87",
                question: "En la vía óptica, el quiasma se localiza anatómicamente sobre:",
                options: ["Silla turca", "Bulbo olfatorio", "Mesencéfalo", "Cuerpo geniculado lateral"],
                answer: "Silla turca",
                explanation: "Se sitúa sobre la hipófisis, donde cruzan las fibras nasales de ambos nervios ópticos."
            },
            {
                id: "oftal-88",
                question: "El reflejo consensual pupilar implica respuesta en:",
                options: ["Solo ojo iluminado", "Ambos ojos simultáneamente", "Solo ojo opuesto", "Ningún ojo"],
                answer: "Ambos ojos simultáneamente",
                explanation: "La luz en un ojo produce contracción pupilar en ambos por conexión de núcleos de Edinger-Westphal."
            },
            {
                id: "oftal-89",
                question: "La papila óptica normal presenta un color:",
                options: ["Rojo brillante", "Amarillo-rosado", "Blanco nacarado", "Gris oscuro"],
                answer: "Amarillo-rosado",
                explanation: "El tono refleja irrigación normal del disco óptico."
            },
            {
                id: "oftal-90",
                question: "El defecto visual característico de una lesión en el quiasma óptico es:",
                options: ["Hemianopsia homónima derecha", "Hemianopsia bitemporal", "Escotoma central", "Ceguera monocular"],
                answer: "Hemianopsia bitemporal",
                explanation: "Se afectan las fibras nasales de ambas retinas que perciben campos temporales."
            },
            {
                id: "oftal-91",
                question: "La medida de la longitud axial del globo ocular es importante para:",
                options: ["Diagnóstico de glaucoma", "Calcular lentes intraoculares", "Detectar miodesopsias", "Evaluar fondo de ojo"],
                answer: "Calcular lentes intraoculares",
                explanation: "Es esencial en la biometría previa a cirugía de catarata."
            },
            {
                id: "oftal-92",
                question: "El epitelio pigmentario de la retina sirve para:",
                options: ["Reflejar la luz", "Absorber la luz y nutrir fotorreceptores", "Refringir rayos luminosos", "Formar el humor vítreo"],
                answer: "Absorber la luz y nutrir fotorreceptores",
                explanation: "Evita reflejos internos y mantiene el metabolismo visual."
            },
            {
                id: "par-003",
                question: "¿Qué fármaco produce solo midriasis sin cicloplejía?",
                options: ["Tropicamida", "Atropina", "Fenilefrina", "Ciclopentolato"],
                answer: "Fenilefrina",
                explanation: "Agonista alfa-1: dilata la pupila sin paralizar acomodación."
            },
            {
                id: "par-004",
                question: "Fármaco inmunomodulador tópico útil en ojo seco inflamatorio:",
                options: ["Latanoprost", "Ciclosporina", "Betaxolol", "Etambutol"],
                answer: "Ciclosporina",
                explanation: "La ciclosporina tópica reduce la inflamación y mejora la secreción lagrimal."
            },
            {
                id: "par-005",
                question: "La ‘Línea de Stocker’ es característica de:",
                options: ["Pingüécula", "Pterigión", "Queratocono", "Escleritis"],
                answer: "Pterigión",
                explanation: "Depósito férrico en el borde anterior de pterigión crónico."
            },
            {
                id: "par-006",
                question: "Signo de retracción palpebral con ‘mirada asustada’ en posición primaria:",
                options: ["Signo de Kocher", "Signo de Dalrymple", "Signo de Marcus Gunn", "Signo de Hutchinson"],
                answer: "Signo de Dalrymple",
                explanation: "Retracción palpebral en orbitopatía tiroidea."
            },
            {
                id: "par-007",
                question: "Signo de mirada fija con sobresalto cuando el paciente fija intensamente:",
                options: ["Signo de Kocher", "Signo de Argyll Robertson", "Signo de Hutchinson", "Signo de Seidel"],
                answer: "Signo de Kocher",
                explanation: "Otro epónimo clásico de orbitopatía tiroidea."
            },
            {
                id: "par-011",
                question: "Tratamiento de elección para DMAE neovascular:",
                options: ["Triamcinolona intravítrea", "Ranibizumab", "Photocoagulación en rejilla", "Dorzolamida"],
                answer: "Ranibizumab",
                explanation: "Anti-VEGF intravítreo de primera línea en neovascular."
            },
            {
                id: "par-012",
                question: "Fármaco antipalúdico cuyo efecto adverso típico es maculopatía en ‘ojo de buey’:",
                options: ["Cloroquina", "Etambutol", "Topiramato", "Amiodarona"],
                answer: "Cloroquina",
                explanation: "Toxicidad retiniana con patrón característico."
            },
            {
                id: "par-013",
                question: "Fármaco que puede precipitar glaucoma de ángulo cerrado:",
                options: ["Timolol", "Topiramato", "Brimonidina", "Latanoprost"],
                answer: "Topiramato",
                explanation: "Asociado a edema coroideo y cierre angular agudo."
            },
            {
                id: "par-014",
                question: "Betabloqueante selectivo útil cuando hay comorbilidad respiratoria o edema pulmonar:",
                options: ["Timolol", "Betaxolol", "Carteolol", "Levobunolol"],
                answer: "Betaxolol",
                explanation: "Mayor cardioselectividad relativa; opción cuando no se toleran no selectivos."
            },
            {
                id: "par-015",
                question: "Efecto adverso típico de brimonidina:",
                options: ["Miosis", "Sequedad de boca", "Hipercromía del iris", "Edema macular"],
                answer: "Sequedad de boca",
                explanation: "Alfa-2 agonista puede causar xerostomía."
            },
            {
                id: "par-016",
                question: "Fármaco que pigmenta el iris con uso crónico:",
                options: ["Timolol", "Latanoprost", "Pilocarpina", "Acetazolamida"],
                answer: "Latanoprost",
                explanation: "Los análogos de prostaglandinas pueden aumentar la pigmentación del iris."
            },
            {
                id: "par-017",
                question: "Agente hiperosmótico IV de elección en glaucoma agudo con edema corneal severo:",
                options: ["Manitol", "Glicerina oral", "Acetazolamida oral", "Pilocarpina"],
                answer: "Manitol",
                explanation: "Reduce rápidamente el volumen vítreo y la PIO."
            },
            {
                id: "par-018",
                question: "Medicación sistémica que puede provocar neuropatía óptica tóxica:",
                options: ["Etambutol", "Ranitidina", "Tamsulosina", "Ibuprofeno"],
                answer: "Etambutol",
                explanation: "Puede producir neuritis óptica retrobulbar."
            },
            {
                id: "par-019",
                question: "Complicación perioperatoria asociada a tamsulosina en cirugía de catarata:",
                options: ["Midriasis permanente", "Síndrome de iris flácido (IFIS)", "Hifema masivo", "Hipema persistente"],
                answer: "Síndrome de iris flácido (IFIS)",
                explanation: "La tamsulosina altera el tono del músculo del iris."
            },
            {
                id: "par-020",
                question: "¿Cuál es el principal factor de riesgo para queratitis bacteriana en comunidad?",
                options: ["Blefaritis", "Uso de lentes de contacto", "Cirugía reciente", "Ojo seco"],
                answer: "Uso de lentes de contacto",
                explanation: "Aumenta riesgo de Pseudomonas y úlceras graves."
            },
            {
                id: "par-021",
                question: "¿Qué agente se asocia típicamente a descemetocele/perforación en queratitis?",
                options: ["Staphylococcus epidermidis", "Pseudomonas aeruginosa", "Moraxella", "Corynebacterium"],
                answer: "Pseudomonas aeruginosa",
                explanation: "Produce necrosis rápida y adelgazamiento corneal."
            },
            {
                id: "par-022",
                question: "Conjuntivitis hemorrágica epidémica: agente más frecuente",
                options: ["Adenovirus 8", "Enterovirus 70/Coxsackie", "HSV-1", "Influenza A"],
                answer: "Enterovirus 70/Coxsackie",
                explanation: "Causa brotes de conjuntivitis hemorrágica."
            },
            {
                id: "par-023",
                question: "Fiebre faringoconjuntival en pediatría se asocia a:",
                options: ["Adenovirus", "HSV-2", "VZV", "CMV"],
                answer: "Adenovirus",
                explanation: "Cuadro con fiebre, faringitis y conjuntivitis folicular."
            },
            {
                id: "par-033",
                question: "Proptosis pulsátil, quemosis y soplo orbitario: pensar en",
                options: ["Fístula carótido-cavernosa", "Celulitis orbitaria", "Mucormicosis", "Trombosis del seno cavernoso"],
                answer: "Fístula carótido-cavernosa",
                explanation: "Comunicación patológica A-V produce pulsatilidad y soplo."
            },
            {
                id: "par-034",
                question: "Micosis rinoorbitaria fulminante con necrosis en paciente diabético descompensado:",
                options: ["Aspergilosis", "Candidiasis", "Mucormicosis", "Actinomicosis"],
                answer: "Mucormicosis",
                explanation: "Emergencia con alta mortalidad; dolor y escaras negras."
            },
            {
                id: "par-035",
                question: "¿A partir de qué medida (exoftalmometría) se considera proptosis patológica en adulto?",
                options: ["≥16 mm", "≥18 mm", "≥20 mm", "≥22 mm"],
                answer: "≥20 mm",
                explanation: "El banco anota >20 mm como umbral de sospecha clínica."
            },
            {
                id: "par-038",
                question: "Órbita: tumor intraconal más frecuente que causa proptosis indolora en mujer de 40 años:",
                options: ["Hemangioma cavernoso", "Meningioma", "Schwannoma", "Metástasis"],
                answer: "Hemangioma cavernoso",
                explanation: "Corrobora lo repetido en los bancos como diagnóstico típico."
            }
        ]
    },
    {
        id: "semiologia-ocular",
        title: "Semiología Ocular",
        description: "Anamnesis dirigida, técnicas de exploración del segmento anterior y posterior, valoración funcional (AV, color, campo, motilidad) y hallazgos clínicos clave.",
        duration: "90 casos",
        difficulty: "Intermedio",
        icon: GiEyeTarget,
        theme: {
            "ring": "ring-cyan-400/60",
            "gradient": "from-cyan-400/15 via-sky-500/5 to-transparent",
            "accent": "text-cyan-300"
        },
        questions: [
            {
                id: "semi-1",
                question: "En la anamnesis ocular, el síntoma ‘fotofobia’ orienta con mayor frecuencia a afectación de:",
                options: ["Párpados", "Conjuntiva", "Córnea/úvea anterior", "Nervio óptico"],
                answer: "Córnea/úvea anterior",
                explanation: "La fotofobia intensa es típica de queratitis o uveítis anterior."
            },
            {
                id: "semi-2",
                question: "El inicio súbito de visión de ‘cortina’ y fotopsias sugiere:",
                options: ["Catarata", "Desprendimiento de retina", "Blefaritis", "Pterigión"],
                answer: "Desprendimiento de retina",
                explanation: "La ‘cortina’ y los destellos orientan a DR regmatógeno."
            },
            {
                id: "semi-3",
                question: "La prueba de agudeza visual para lejos estándar es:",
                options: ["Ishihara", "Snellen", "Schirmer", "Campimetría"],
                answer: "Snellen",
                explanation: "Snellen cuantifica AV a distancia; Ishihara evalúa color."
            },
            {
                id: "semi-4",
                question: "El agujero estenopeico mejora la visión cuando la causa es:",
                options: ["Opacidad vítrea densa", "Ametropía", "Edema de papila", "Atrofia óptica"],
                answer: "Ametropía",
                explanation: "Reduce rayos periféricos y compensa errores refractivos."
            },
            {
                id: "semi-5",
                question: "Para evaluar el segmento anterior con mayor detalle se usa:",
                options: ["Oftalmoscopio indirecto", "Lámpara de hendidura", "Retinoscopio", "Campímetro"],
                answer: "Lámpara de hendidura",
                explanation: "Permite cortes ópticos de córnea, cámara anterior, iris y cristalino."
            },
            {
                id: "semi-6",
                question: "La tinción con fluoresceína es útil para detectar:",
                options: ["Defectos epiteliales corneales", "Rupturas retinianas", "Atrofia óptica", "Catarata subcapsular"],
                answer: "Defectos epiteliales corneales",
                explanation: "Tiñe áreas de pérdida epitelial y revela fugas (Seidel)."
            },
            {
                id: "semi-7",
                question: "La prueba de Ishihara evalúa principalmente:",
                options: ["Sensibilidad al contraste", "Visión cromática rojo-verde", "Campo visual periférico", "Adaptación a la oscuridad"],
                answer: "Visión cromática rojo-verde",
                explanation: "Detecta discromatopsias congénitas comunes (protan/deutan)."
            },
            {
                id: "semi-8",
                question: "En la campimetría, un escotoma arqueado típico sugiere:",
                options: ["Glaucoma", "Neuritis óptica", "Histeria visual", "Lesión quiasmática"],
                answer: "Glaucoma",
                explanation: "El daño de fibras arcuatas produce escotomas arqueados."
            },
            {
                id: "semi-9",
                question: "Explorando motilidad, limitación de abducción sugiere parálisis de:",
                options: ["III par", "IV par", "VI par", "VII par"],
                answer: "VI par",
                explanation: "El VI inerva el recto lateral (abducción)."
            },
            {
                id: "semi-10",
                question: "Pupila ‘Marcus Gunn’ (defecto aferente relativo) se objetiva con:",
                options: ["Cover test", "Swinging flashlight test", "Test de Schirmer", "Paquimetría"],
                answer: "Swinging flashlight test",
                explanation: "La pupila se contrae menos ante la luz directa en el ojo afecto."
            },
            {
                id: "semi-11",
                question: "El BUT (Break-Up Time) < 10 s indica:",
                options: ["Hipertensión ocular", "Inestabilidad de película lagrimal", "Aumento de PIO", "Aclaramientos vítreos"],
                answer: "Inestabilidad de película lagrimal",
                explanation: "Sugerente de ojo seco evaporativo."
            },
            {
                id: "semi-12",
                question: "El test de Schirmer I mide:",
                options: ["Producción acuosa basal y refleja", "Capa lipídica", "Estabilidad de lágrima", "pH lagrimal"],
                answer: "Producción acuosa basal y refleja",
                explanation: "Mide humectación de tira de papel en 5 minutos."
            },
            {
                id: "semi-13",
                question: "El canal de drenaje del humor acuoso explorado indirectamente en gonioscopía es:",
                options: ["Canalículo lagrimal", "Canal de Schlemm", "Conducto nasolagrimal", "Seno cavernoso"],
                answer: "Canal de Schlemm",
                explanation: "La gonioscopía permite evaluar el ángulo iridocorneal."
            },
            {
                id: "semi-14",
                question: "Un ‘Seidel positivo’ indica:",
                options: ["PIO elevada", "Fuga de humor acuoso por herida corneal", "Cierre angular", "Desgarro retiniano"],
                answer: "Fuga de humor acuoso por herida corneal",
                explanation: "La fluoresceína se diluye por salida de acuoso en la lesión."
            },
            {
                id: "semi-15",
                question: "En la inspección palpebral, nódulo indoloro crónico sugiere más:",
                options: ["Orzuelo", "Celulitis preseptal", "Chalazión", "Dacriocistitis aguda"],
                answer: "Chalazión",
                explanation: "Reacción granulomatosa estéril de glándulas de Meibomio."
            },
            {
                id: "semi-16",
                question: "‘Prurito intenso, lagrimeo acuoso y papilas tarsales’ sugieren:",
                options: ["Conjuntivitis alérgica", "Uveítis anterior", "Queratitis herpética", "Glaucoma agudo"],
                answer: "Conjuntivitis alérgica",
                explanation: "El prurito es el síntoma cardinal alérgico."
            },
            {
                id: "semi-17",
                question: "Hipopión en lámpara de hendidura indica:",
                options: ["Hemorragia vítrea", "Pus en cámara anterior", "Edema de papila", "Hifema"],
                answer: "Pus en cámara anterior",
                explanation: "Acúmulo de leucocitos por intensa inflamación/infección."
            },
            {
                id: "semi-18",
                question: "Dolor, miosis y celularidad en cámara anterior orientan a:",
                options: ["Conjuntivitis viral", "Uveítis anterior", "Glaucoma crónico", "Catarata nuclear"],
                answer: "Uveítis anterior",
                explanation: "La miosis dolorosa con células/flare es típica."
            },
            {
                id: "semi-19",
                question: "En la biomicroscopía, un defecto dendrítico que tiñe con fluoresceína sugiere:",
                options: ["Queratitis por Acanthamoeba", "Queratitis herpética", "Úlcera bacteriana central", "Erosión recurrente"],
                answer: "Queratitis herpética",
                explanation: "Lesiones dendríticas epiteliales son clásicas del VHS-1."
            },
            {
                id: "semi-20",
                question: "La exploración del fondo de ojo con midriasis se realiza con:",
                options: ["Oftalmoscopio directo/indirecto", "Gonioscopio", "Retinoscopio", "Topógrafo corneal"],
                answer: "Oftalmoscopio directo/indirecto",
                explanation: "Permite evaluar retina, mácula, vasos y disco óptico."
            },
            {
                id: "semi-21",
                question: "‘Drusas’ maculares en fondo de ojo son más compatibles con:",
                options: ["DMAE seca", "Retinopatía hipertensiva IV", "Oclusión de ACR", "Retinosis pigmentaria"],
                answer: "DMAE seca",
                explanation: "Depósitos sub-RPE amarillentos en mácula."
            },
            {
                id: "semi-22",
                question: "Para objetivar hipertensión intracraneal en FO se busca:",
                options: ["Atrofia temporal de papila", "Papiledema", "Coloboma", "Drusas del nervio óptico"],
                answer: "Papiledema",
                explanation: "Edema de disco bilateral por presión intracraneal elevada."
            },
            {
                id: "semi-23",
                question: "La relación copa/disco aumentada y adelgazamiento del anillo neural sugieren:",
                options: ["Neuritis óptica", "Glaucoma", "Atrofia óptica congénita", "Papiledema"],
                answer: "Glaucoma",
                explanation: "Cambios estructurales glaucomatosos típicos."
            },
            {
                id: "semi-24",
                question: "El cover-uncover test sirve para detectar:",
                options: ["Nistagmo", "Estrabismo manifiesto (tropía)", "Astigmatismo", "Anisocoria"],
                answer: "Estrabismo manifiesto (tropía)",
                explanation: "Revela desviación ocular cuando se ocluye un ojo."
            },
            {
                id: "semi-25",
                question: "La ‘fotopsia’ es:",
                options: ["Pérdida de campo visual", "Percepción de destellos", "Visión borrosa por halos", "Diplopía monocular"],
                answer: "Percepción de destellos",
                explanation: "Suele relacionarse con tracción vítreo-retiniana."
            },
            {
                id: "semi-26",
                question: "En una conjuntivitis bacteriana típica encontramos:",
                options: ["Prurito aislado", "Secreción mucopurulenta y ‘pegado’ matutino", "Halos con midriasis fija", "Dolor severo con miosis"],
                answer: "Secreción mucopurulenta y ‘pegado’ matutino",
                explanation: "El exudado purulento es característico."
            },
            {
                id: "semi-27",
                question: "La paquimetría corneal mide:",
                options: ["Curvatura corneal", "Grosor corneal", "PIO real", "Profundidad de cámara anterior"],
                answer: "Grosor corneal",
                explanation: "El grosor influye en la interpretación de la PIO."
            },
            {
                id: "semi-28",
                question: "El reflejo corneal explora vías de los nervios:",
                options: ["II y III", "V y VII", "III y IV", "VI y VIII"],
                answer: "V y VII",
                explanation: "Trigémino aferente, facial eferente."
            },
            {
                id: "semi-29",
                question: "La ‘inyección ciliar’ (periquerática) sugiere:",
                options: ["Blefaritis", "Conjuntivitis catarral leve", "Afectación corneal o uveal", "Pterigión"],
                answer: "Afectación corneal o uveal",
                explanation: "Distribución violácea alrededor del limbo."
            },
            {
                id: "semi-30",
                question: "La PIO normal en tonometría de aplanación suele situarse entre:",
                options: ["5–10 mmHg", "10–21 mmHg", "20–30 mmHg", "25–40 mmHg"],
                answer: "10–21 mmHg",
                explanation: "Valores persistentes altos requieren estudio."
            },
            {
                id: "semi-31",
                question: "El ‘arco senil’ observado a la lámpara de hendidura es:",
                options: ["Anillo lípido corneal periférico", "Neovascularización limbar", "Opacidad del cristalino", "Pliegues endoteliales"],
                answer: "Anillo lípido corneal periférico",
                explanation: "Hallazgo benigno frecuente en ancianos."
            },
            {
                id: "semi-32",
                question: "Un ‘pterigión’ corresponde a:",
                options: ["Pliegue conjuntival inflamatorio", "Crecimiento fibrovascular hacia la córnea", "Úlcera corneal central", "Quiste limbar"],
                answer: "Crecimiento fibrovascular hacia la córnea",
                explanation: "Relacionado con UV y polvo; visible en biomicroscopía."
            },
            {
                id: "semi-33",
                question: "La visión próxima borrosa con mejoría al aumentar la luz sugiere:",
                options: ["Miopía", "Hipermetropía/presbicia", "Astigmatismo miópico", "Edema macular"],
                answer: "Hipermetropía/presbicia",
                explanation: "La miosis refleja aumenta profundidad de foco en cercanía."
            },
            {
                id: "semi-34",
                question: "Las microhemorragias en llama y exudados algodonosos en FO orientan a:",
                options: ["Retinopatía hipertensiva", "Retinosis pigmentaria", "DMAE", "Oclusión venosa periférica aislada"],
                answer: "Retinopatía hipertensiva",
                explanation: "Lesiones de la capa de fibras nerviosas asociadas a HTA."
            },
            {
                id: "semi-35",
                question: "Ante dolor ocular y pupila media fija con halos coloreados debemos sospechar:",
                options: ["Uveítis", "Glaucoma agudo de ángulo cerrado", "Conjuntivitis alérgica", "Neuritis óptica"],
                answer: "Glaucoma agudo de ángulo cerrado",
                explanation: "Urgencia con PIO muy elevada y edema corneal."
            },
            {
                id: "semi-36",
                question: "La diplopía vertical que empeora en lectura y escaleras sugiere parálisis del:",
                options: ["III par", "IV par", "VI par", "Nervio óptico"],
                answer: "IV par",
                explanation: "Afecta al oblicuo superior (infraducción en aducción)."
            },
            {
                id: "semi-37",
                question: "Para el diagnóstico de ojo seco evaporativo el hallazgo clave es:",
                options: ["Schirmer < 5 mm", "BUT reducido", "PIO elevada", "Papiledema"],
                answer: "BUT reducido",
                explanation: "La inestabilidad de la película es característica."
            },
            {
                id: "semi-38",
                question: "‘Moscas volantes’ súbitas con hemorragia vítrea en diabético sugieren:",
                options: ["Neuritis óptica", "Tracción neovascular y DVP", "Glaucoma crónico", "Papiledema"],
                answer: "Tracción neovascular y DVP",
                explanation: "La proliferación neovascular sangra con tracción vítrea."
            },
            {
                id: "semi-39",
                question: "Dolor y tumefacción en canto medial con expresión de pus por punto lagrimal sugiere:",
                options: ["Dacriocistitis", "Celulitis orbitaria", "Chalazión", "Quiste dermoide"],
                answer: "Dacriocistitis",
                explanation: "Infección del saco lagrimal con dolor medial."
            },
            {
                id: "semi-40",
                question: "La ‘leucocoria’ en pediatría obliga a descartar de forma prioritaria:",
                options: ["Catarata congénita leve", "Retinoblastoma", "Anisometropía", "Estrabismo acomodativo"],
                answer: "Retinoblastoma",
                explanation: "Signo de alarma mayor en la semiología infantil."
            },
            {
                id: "semi-41",
                question: "El ‘reflejo rojo’ disminuido/asimétrico en oftalmoscopia sugiere:",
                options: ["Coriorretinitis", "Opacidades en medios (p. ej., catarata)", "Papiledema", "Atrofia óptica"],
                answer: "Opacidades en medios (p. ej., catarata)",
                explanation: "Las opacidades alteran el brillo del reflejo pupilar."
            },
            {
                id: "semi-42",
                question: "Para cuantificar la desviación en estrabismo se utiliza:",
                options: ["Prueba de Hirschberg", "Cover test alternante con prismas", "Test de Worth", "Test de estenopeico"],
                answer: "Cover test alternante con prismas",
                explanation: "Permite medir en dioptrías prismáticas la desviación."
            },
            {
                id: "semi-43",
                question: "Un FO con ‘mancha rojo cereza’ y retina pálida orienta a:",
                options: ["Oclusión de arteria central de la retina", "Oclusión venosa", "DMAE húmeda", "Retinosis pigmentaria"],
                answer: "Oclusión de arteria central de la retina",
                explanation: "Hallazgo clásico isquémico agudo."
            },
            {
                id: "semi-44",
                question: "En el examen con fluoresceína, un patrón puntiforme difuso epitelial sugiere:",
                options: ["Queratitis actínica", "Úlcera bacteriana central", "Erosión lineal traumática", "Degeneración en banda"],
                answer: "Queratitis actínica",
                explanation: "Tinción punteada superficial tras exposición UV."
            },
            {
                id: "semi-45",
                question: "El nistagmo se define mejor como:",
                options: ["Temblor palpebral", "Movimiento ocular rítmico e involuntario", "Desalineación sostenida", "Oscilopsia subjetiva sin movimiento ocular"],
                answer: "Movimiento ocular rítmico e involuntario",
                explanation: "Puede ser fisiológico o patológico; valorar fase rápida."
            },
            {
                id: "semi-46",
                question: "La ‘infiltración corneal periférica con neovasos’ sugiere mayormente:",
                options: ["Queratitis bacteriana central", "Úlcera estéril marginal/rosácea", "Queratitis herpética dendrítica", "Erosión recurrente"],
                answer: "Úlcera estéril marginal/rosácea",
                explanation: "Asociada a blefaritis/rosácea; respuesta inmune periférica."
            },
            {
                id: "semi-47",
                question: "En sospecha de glaucoma, además de PIO, la semiología funcional clave es:",
                options: ["Ishihara", "Campimetría automatizada", "Test de Schirmer", "Cover test"],
                answer: "Campimetría automatizada",
                explanation: "Detecta defectos típicos del campo visual."
            },
            {
                id: "semi-48",
                question: "‘Anisocoria que aumenta en la oscuridad’ sugiere lesión de:",
                options: ["Vía parasimpática", "Vía simpática (Horner)", "Nervio óptico", "III par nuclear"],
                answer: "Vía simpática (Horner)",
                explanation: "La pupila afectada no dilata bien en oscuridad."
            },
            {
                id: "semi-49",
                question: "En el fondo de ojo diabético, los ‘microaneurismas’ son:",
                options: ["Lesiones proliferativas", "Hallazgo más precoz no proliferativo", "Exudados duros", "Isquemia macular exudativa"],
                answer: "Hallazgo más precoz no proliferativo",
                explanation: "Pequeñas dilataciones capilares iniciales."
            },
            {
                id: "semi-50",
                question: "Para documentar edema macular clínicamente significativo, la semiología instrumental de elección es:",
                options: ["Topografía corneal", "OCT macular", "Ecografía modo B", "Paquimetría"],
                answer: "OCT macular",
                explanation: "Cuantifica engrosamiento intrarretiniano y espacios quísticos."
            },
            {
                id: "semi-51",
                question: "El síntoma de visión doble que desaparece al tapar un ojo corresponde a:",
                options: ["Diplopía monocular", "Diplopía binocular", "Metamorfopsia", "Hemianopsia"],
                answer: "Diplopía binocular",
                explanation: "La diplopía binocular se debe a desalineación ocular y desaparece al ocluir un ojo."
            },
            {
                id: "semi-52",
                question: "Durante la anamnesis, la presencia de secreción espesa y adherente orienta a:",
                options: ["Conjuntivitis alérgica", "Conjuntivitis bacteriana", "Uveítis", "Glaucoma crónico"],
                answer: "Conjuntivitis bacteriana",
                explanation: "La secreción purulenta o mucopurulenta es típica de infección bacteriana."
            },
            {
                id: "semi-53",
                question: "El reflejo fotomotor consensual evalúa:",
                options: ["Vía simpática", "Integridad de nervio óptico y oculomotor contralateral", "Solo el III par ipsilateral", "Nervio trigémino"],
                answer: "Integridad de nervio óptico y oculomotor contralateral",
                explanation: "La luz en un ojo provoca miosis bilateral si ambas vías están intactas."
            },
            {
                id: "semi-54",
                question: "El término 'amaurosis fugaz' se refiere a:",
                options: ["Visión borrosa crónica", "Pérdida transitoria de visión monocular", "Diplopía momentánea", "Defecto campimétrico estable"],
                answer: "Pérdida transitoria de visión monocular",
                explanation: "Suele deberse a isquemia transitoria de la arteria central de la retina."
            },
            {
                id: "semi-55",
                question: "La prueba de confrontación sirve para explorar:",
                options: ["Agudeza visual", "Campo visual periférico", "Colorimetría", "Motilidad extrínseca"],
                answer: "Campo visual periférico",
                explanation: "Se compara el campo del examinador con el del paciente."
            },
            {
                id: "semi-56",
                question: "La motilidad ocular extrínseca se evalúa pidiendo al paciente:",
                options: ["Seguir un objeto en las seis posiciones de la mirada", "Cerrar los ojos fuertemente", "Leer letras a 6 metros", "Fijar un punto durante 1 minuto"],
                answer: "Seguir un objeto en las seis posiciones de la mirada",
                explanation: "Explora los músculos rectos y oblicuos, así como los pares III, IV y VI."
            },
            {
                id: "semi-57",
                question: "La anisocoria fisiológica se caracteriza por:",
                options: ["Diferencia pupilar mayor de 2 mm", "Variación leve y constante sin patología", "Midriasis de un ojo con ptosis", "Miosis bilateral fija"],
                answer: "Variación leve y constante sin patología",
                explanation: "En la mayoría de las personas normales puede existir hasta 1 mm de diferencia."
            },
            {
                id: "semi-58",
                question: "¿Qué técnica se utiliza para observar el ángulo iridocorneal?",
                options: ["Gonioscopía", "Campimetría", "Paquimetría", "Topografía corneal"],
                answer: "Gonioscopía",
                explanation: "Es fundamental para clasificar glaucomas de ángulo abierto o cerrado."
            },
            {
                id: "semi-59",
                question: "En el examen del fondo de ojo, una hemorragia en llama indica lesión de:",
                options: ["Coroides", "Capa de fibras nerviosas retinianas", "Cuerpo ciliar", "Esclera posterior"],
                answer: "Capa de fibras nerviosas retinianas",
                explanation: "Se asocia con hipertensión arterial y daño microvascular."
            },
            {
                id: "semi-60",
                question: "El reflejo de acomodación se acompaña de:",
                options: ["Midriasis y divergencia", "Miosis y convergencia", "Solo convergencia", "Relajación del cristalino"],
                answer: "Miosis y convergencia",
                explanation: "La respuesta normal incluye contracción pupilar y convergencia ocular."
            },
            {
                id: "semi-61",
                question: "En un paciente con trauma ocular y pérdida de cámara anterior se debe sospechar:",
                options: ["Perforación corneal", "Pterigión", "Queratitis herpética", "Catarata traumática"],
                answer: "Perforación corneal",
                explanation: "El colapso de la cámara anterior es signo de herida penetrante."
            },
            {
                id: "semi-62",
                question: "El nistagmo fisiológico se puede observar en:",
                options: ["Estrabismo", "Seguimiento extremo lateral", "Parálisis del IV par", "Lesión de tronco encefálico"],
                answer: "Seguimiento extremo lateral",
                explanation: "Un pequeño movimiento rítmico al final de la mirada es normal."
            },
            {
                id: "semi-63",
                question: "La exploración de la fóvea central evalúa:",
                options: ["Visión periférica", "Visión central fina", "Adaptación a la oscuridad", "Colorimetría exclusivamente"],
                answer: "Visión central fina",
                explanation: "La fóvea contiene la mayor concentración de conos y define la AV máxima."
            },
            {
                id: "semi-64",
                question: "El edema de papila bilateral sin pérdida visual inicial se asocia a:",
                options: ["Neuritis óptica", "Hipertensión intracraneal", "Atrofia óptica primaria", "Oclusión venosa central"],
                answer: "Hipertensión intracraneal",
                explanation: "La presión elevada produce papiledema con visión inicialmente conservada."
            },
            {
                id: "semi-65",
                question: "En la prueba de Schirmer II se mide:",
                options: ["Secreción basal", "Secreción refleja tras irritación nasal", "Evaporación lagrimal", "Tiempo de ruptura de película"],
                answer: "Secreción refleja tras irritación nasal",
                explanation: "Evalúa la función refleja del componente acuoso lagrimal."
            },
            {
                id: "semi-66",
                question: "La miopía patológica se asocia frecuentemente a:",
                options: ["Retinopatía hipertensiva", "Desprendimiento de retina", "DMAE", "Catarata congénita"],
                answer: "Desprendimiento de retina",
                explanation: "El alargamiento del globo ocular aumenta la tracción vítrea retiniana."
            },
            {
                id: "semi-67",
                question: "El test de Hirschberg sirve para detectar:",
                options: ["Estrabismo mediante reflejo corneal", "Agudeza visual", "Acomodación", "Presbicia"],
                answer: "Estrabismo mediante reflejo corneal",
                explanation: "Observa el reflejo luminoso sobre ambas córneas; desplazamiento indica desviación."
            },
            {
                id: "semi-68",
                question: "La presencia de halos coloreados alrededor de las luces se asocia a:",
                options: ["Edema corneal", "Atrofia óptica", "Astigmatismo leve", "Neuritis óptica"],
                answer: "Edema corneal",
                explanation: "La dispersión de la luz por el edema epitelial produce halos."
            },
            {
                id: "semi-69",
                question: "La ‘inyección conjuntival difusa’ sin dolor ni alteración pupilar suele indicar:",
                options: ["Conjuntivitis", "Uveítis", "Glaucoma agudo", "Queratitis"],
                answer: "Conjuntivitis",
                explanation: "Predomina la congestión superficial y síntomas irritativos leves."
            },
            {
                id: "semi-70",
                question: "El test de color de Farnsworth-Munsell evalúa:",
                options: ["Visión periférica", "Sensibilidad cromática completa", "Agudeza visual cercana", "Defectos campimétricos"],
                answer: "Sensibilidad cromática completa",
                explanation: "Permite cuantificar anomalías de discriminación de colores."
            },
            {
                id: "semi-71",
                question: "La exploración de la presión digital del globo ocular se usa como:",
                options: ["Medición precisa de PIO", "Apreciación orientativa en ausencia de tonómetro", "Método para medir espesor corneal", "Valoración macular"],
                answer: "Apreciación orientativa en ausencia de tonómetro",
                explanation: "Sirve solo como estimación en urgencias o sin instrumental."
            },
            {
                id: "semi-72",
                question: "La hemianopsia bitemporal se produce por lesión de:",
                options: ["Nervio óptico", "Quiasma óptico", "Radiaciones ópticas", "Corteza occipital unilateral"],
                answer: "Quiasma óptico",
                explanation: "Afecta fibras nasales de ambos ojos, típicamente por adenoma hipofisario."
            },
            {
                id: "semi-73",
                question: "La exploración con luz oblicua permite evidenciar:",
                options: ["Cuerpo extraño superficial", "Campo visual periférico", "Desgarros retinianos", "Edema papilar"],
                answer: "Cuerpo extraño superficial",
                explanation: "La iluminación tangencial revela irregularidades corneales o conjuntivales."
            },
            {
                id: "semi-74",
                question: "El síntoma de fotopsias y miodesopsias en ancianos sin dolor sugiere:",
                options: ["Desprendimiento vítreo posterior", "Catarata subcapsular", "Glaucoma crónico", "DMAE"],
                answer: "Desprendimiento vítreo posterior",
                explanation: "El colapso del vítreo produce tracción retiniana y percepciones luminosas."
            },
            {
                id: "semi-75",
                question: "La córnea normal presenta en la lámpara de hendidura:",
                options: ["Estrías verticales y opacidades", "Transparencia total y superficie lisa", "Reflejos múltiples irregulares", "Color amarillento"],
                answer: "Transparencia total y superficie lisa",
                explanation: "Cualquier pérdida de transparencia indica edema o infiltrado."
            },
            {
                id: "semi-76",
                question: "La queratitis ulcerativa periférica puede acompañarse de:",
                options: ["Blefaritis crónica o rosácea", "Pterigión", "Conjuntivitis viral", "Papiledema"],
                answer: "Blefaritis crónica o rosácea",
                explanation: "Las reacciones inmunes marginales son frecuentes en estos contextos."
            },
            {
                id: "semi-77",
                question: "El reflejo rojo ausente con pupila blanca se denomina:",
                options: ["Anisocoria", "Leucocoria", "Miosis", "Nistagmo"],
                answer: "Leucocoria",
                explanation: "Puede deberse a catarata congénita o retinoblastoma."
            },
            {
                id: "semi-78",
                question: "La exploración del FO muestra ‘venas dilatadas y tortuosas con hemorragias difusas’, típico de:",
                options: ["Oclusión de arteria central", "Oclusión de vena central de la retina", "Retinosis pigmentaria", "Neuritis óptica"],
                answer: "Oclusión de vena central de la retina",
                explanation: "Produce aspecto de ‘tormenta de sangre y fuego’."
            },
            {
                id: "semi-79",
                question: "La agudeza visual cercana se evalúa con:",
                options: ["Cartilla de Snellen", "Cartilla de Jaeger", "Campímetro de Goldman", "Retinoscopía"],
                answer: "Cartilla de Jaeger",
                explanation: "Utiliza texto impreso a distancia de lectura (33–40 cm)."
            },
            {
                id: "semi-80",
                question: "La maniobra de oclusión alternante permite detectar:",
                options: ["Forias latentes", "Tropías manifiestas", "Nistagmo", "Anisocoria"],
                answer: "Forias latentes",
                explanation: "La desviación aparece solo durante la oclusión alterna."
            },
            {
                id: "semi-81",
                question: "El examen con luz azul de cobalto requiere el uso de:",
                options: ["Fluoresceína", "Fenilefrina", "Pilocarpina", "Atropina"],
                answer: "Fluoresceína",
                explanation: "Permite observar la tinción y fugas corneales."
            },
            {
                id: "semi-82",
                question: "La midriasis arreactiva con ptosis y anhidrosis facial caracteriza el síndrome de:",
                options: ["Adie", "Horner", "Argyll Robertson", "Marcus Gunn"],
                answer: "Horner",
                explanation: "Afecta la vía simpática con miosis, ptosis y anhidrosis."
            },
            {
                id: "semi-83",
                question: "El movimiento conjugado de ambos ojos hacia un mismo lado se denomina:",
                options: ["Vergencia", "Versión", "Torsión", "Ducción"],
                answer: "Versión",
                explanation: "Las versiones implican movimiento conjunto en igual dirección."
            },
            {
                id: "semi-84",
                question: "En la oftalmoscopía directa, una imagen pequeña y brillante del disco se asocia a:",
                options: ["Miopía", "Hipermetropía", "Astigmatismo", "Presbicia"],
                answer: "Hipermetropía",
                explanation: "El ojo corto produce imagen reducida del fondo."
            },
            {
                id: "semi-85",
                question: "La presión intraocular puede aumentar por obstrucción en:",
                options: ["Drenaje trabecular", "Canalículos lagrimales", "Conducto nasolagrimal", "Saco lagrimal"],
                answer: "Drenaje trabecular",
                explanation: "El cierre o bloqueo del trabéculo eleva la PIO (glaucoma)."
            },
            {
                id: "semi-86",
                question: "El test de Worth con lentes rojos y verdes evalúa:",
                options: ["Fusión binocular", "Agudeza visual", "Colorimetría", "Campo visual"],
                answer: "Fusión binocular",
                explanation: "Determina si el cerebro combina imágenes de ambos ojos."
            },
            {
                id: "semi-87",
                question: "La ecografía ocular modo B está indicada en:",
                options: ["Opacidad de medios o hemorragia vítrea", "Ametropías leves", "Control de PIO", "Exploración de lágrima"],
                answer: "Opacidad de medios o hemorragia vítrea",
                explanation: "Permite visualizar retina y vítreo cuando el FO no es visible."
            },
            {
                id: "semi-88",
                question: "El signo de Hutchinson (vesículas nasales en zóster oftálmico) indica:",
                options: ["Afectación del nervio óptico", "Compromiso del nervio nasociliar", "Infección bacteriana", "Blefaritis simple"],
                answer: "Compromiso del nervio nasociliar",
                explanation: "Predice posible afectación ocular en herpes zóster oftálmico."
            },
            {
                id: "semi-89",
                question: "El campo visual central se valora con:",
                options: ["Campimetría de Amsler", "Campimetría de Goldmann", "Prueba de confrontación", "Retinoscopía"],
                answer: "Campimetría de Amsler",
                explanation: "Mide distorsiones o escotomas centrales (maculopatías)."
            },
            {
                id: "semi-90",
                question: "La proptosis unilateral dolorosa con limitación de movimientos sugiere:",
                options: ["Celulitis orbitaria", "Exoftalmos tiroideo", "Pseudotumor orbitario", "Dacriocistitis"],
                answer: "Celulitis orbitaria",
                explanation: "Proceso infeccioso agudo que compromete músculos y grasa orbitaria."
            },
            {
                id: "par-001",
                question: "¿Qué prueba se realiza ante sospecha de obstrucción parcial del sistema de drenaje lagrimal?",
                options: ["Prueba de Schirmer", "Prueba de Jones con colorante", "Test de Seidel", "Gonioscopía"],
                answer: "Prueba de Jones con colorante",
                explanation: "La prueba de Jones (I/II) evalúa permeabilidad funcional del sistema nasolagrimal."
            },
            {
                id: "par-002",
                question: "Tratamiento de elección para dacriolitiasis u obstrucción crónica del saco lagrimal:",
                options: ["Antibiótico tópico", "Dacriocistorrinostomía (DCR)", "Puntoplastia", "Masaje de Crigler"],
                answer: "Dacriocistorrinostomía (DCR)",
                explanation: "La DCR crea un nuevo drenaje hacia cavidad nasal en obstrucción crónica."
            },
            {
                id: "par-008",
                question: "Agente causal típico de conjuntivitis vírica (comunitaria):",
                options: ["Enterovirus 70", "Adenovirus", "HSV-1", "VZV"],
                answer: "Adenovirus",
                explanation: "Causa más común de conjuntivitis vírica esporádica."
            },
            {
                id: "par-009",
                question: "Depósitos blanco-amarillentos subepiteliales en conjuntiva tarsal y fondo de saco:",
                options: ["Pannus", "Concreciones", "Folículos", "Papilas"],
                answer: "Concreciones",
                explanation: "Detritos epiteliales/queratina subepitelial."
            },
            {
                id: "par-010",
                question: "Neovascularización con degeneración subepitelial conjuntival se denomina:",
                options: ["Pannus", "Pingüécula", "Pterigión", "Foliculitis"],
                answer: "Pannus",
                explanation: "Crecimiento fibrovascular subepitelial con vasos superficiales."
            },
            {
                id: "par-024",
                question: "En diferenciación clínica: ¿qué dato orienta más a escleritis frente a epiescleritis?",
                options: ["Quemosis marcada", "Dolor a la palpación profundo e irradiado", "Hiperemia sectorial leve", "Respuesta rápida a lágrimas artificiales"],
                answer: "Dolor a la palpación profundo e irradiado",
                explanation: "El dolor intenso es típico de escleritis; epiescleritis suele ser leve."
            },
            {
                id: "par-025",
                question: "En escleritis necrotizante refractaria, biológico de elección reportado:",
                options: ["Infliximab", "Rituximab", "Adalimumab", "Etanercept"],
                answer: "Rituximab",
                explanation: "Utilizado en casos severos/necrotizantes asociados a autoinmunidad."
            },
            {
                id: "par-026",
                question: "¿Cuál es el principal factor de riesgo para pterigión?",
                options: ["Polvo doméstico", "Exposición a luz solar (UV)", "Uso de pantallas", "Diabetes mellitus"],
                answer: "Exposición a luz solar (UV)",
                explanation: "La radiación UV y ambientes áridos favorecen pterigión."
            },
            {
                id: "par-027",
                question: "Localización típica de la pingüécula:",
                options: ["Limbus temporal superior", "Limbus nasal", "Carúncula", "Fornix inferior"],
                answer: "Limbus nasal",
                explanation: "Lesión amarillenta elevada en conjuntiva bulbar nasal."
            },
            {
                id: "par-028",
                question: "Paciente con hemorragia subconjuntival recidivante: causa frecuente en jóvenes según banco:",
                options: ["Hipertensión arterial", "Uso de lentes de contacto", "Trastorno de coagulación", "Tos crónica"],
                answer: "Uso de lentes de contacto",
                explanation: "El trauma mecánico leve por LC aparece repetidamente en el banco."
            },
            {
                id: "par-029",
                question: "Órbita: ¿qué área del piso orbitario es más propensa a fractura por trauma?",
                options: ["Anterolateral del cigomático", "Posteromedial del maxilar", "Cuerpo del esfenoides", "Lámina papirácea etmoidal"],
                answer: "Posteromedial del maxilar",
                explanation: "Área más delgada y susceptible en ‘blow-out’."
            },
            {
                id: "par-030",
                question: "Lesión orbitária benigna más asociada a proptosis indolora en adulto:",
                options: ["Schwannoma", "Hemangioma cavernoso", "Meningioma", "Linfangioma"],
                answer: "Hemangioma cavernoso",
                explanation: "Tumor vascular intraconal típico del adulto."
            },
            {
                id: "par-031",
                question: "Trauma con hemorragia conjuntival y limitación de recto horizontal en niño: sospechar",
                options: ["Celulitis preseptal", "Fractura de piso de órbita", "Ruptura escleral", "Quiste dermoide"],
                answer: "Fractura de piso de órbita",
                explanation: "Atrapamiento muscular produce limitación de la mirada."
            },
            {
                id: "par-032",
                question: "Masa móvil, indolora, con distopía/proptosis en niño pequeño:",
                options: ["Dermolipoma", "Quiste dermoide", "Hemangioma cavernoso", "Mucocele"],
                answer: "Quiste dermoide",
                explanation: "Lesión congénita frecuente en unión sutural orbitária."
            },
            {
                id: "par-036",
                question: "Queratoconjuntivitis vernal: ¿en qué zona se observan ‘puntos de Horner-Trantas’?",
                options: ["Tarsal superior", "Límbica", "Fornix inferior", "Carúncula"],
                answer: "Límbica",
                explanation: "Cúmulos de eosinófilos/mucina a nivel del limbo corneal."
            },
            {
                id: "par-037",
                question: "Clasificación del ojo seco por deficiencia de glándulas de Meibomio:",
                options: ["Acuodeficiente", "Evaporativo", "Neurotrófico", "Inflamatorio"],
                answer: "Evaporativo",
                explanation: "Disfunción meibomiana reduce capa lipídica y aumenta evaporación."
            },
            {
                id: "par-039",
                question: "Tratamiento inicial de escleritis no necrosante según banco:",
                options: ["Corticoide sistémico inmediato", "AINES", "Antibiótico oral", "Ciclosporina tópica"],
                answer: "AINES",
                explanation: "Primera línea en escleritis no necrosante; escalado si refractaria."
            },
            {
                id: "par-040",
                question: "Conforme al banco, la ‘capa’ que se debe valorar con prioridad en ojo seco:",
                options: ["Acuosa", "Mucosa", "Lipídica", "Nenhuma"],
                answer: "Lipídica",
                explanation: "La disfunción meibomiana compromete especialmente la capa lipídica."
            }
        ]
    },
    {
        id: "optica-refraccion",
        title: "Óptica y Refracción",
        description: "Fundamentos de óptica geométrica, vergencias, potencia dióptrica, errores refractivos y técnicas clínicas para la prescripción.",
        duration: "91 casos",
        difficulty: "Intermedio",
        icon: GiSunglasses,
        theme: {
            "ring": "ring-violet-400/60",
            "gradient": "from-violet-400/15 via-fuchsia-500/5 to-transparent",
            "accent": "text-violet-300"
        },
        questions: [
            {
                id: "optref-1",
                question: "La dioptría (D) se define como:",
                options: ["1 dividido para la distancia focal en metros", "La curvatura corneal en mm", "El espesor del cristalino", "La razón entre objeto e imagen"],
                answer: "1 dividido para la distancia focal en metros",
                explanation: "D = 1/f (m); a mayor potencia, menor distancia focal."
            },
            {
                id: "optref-2",
                question: "Una lente convergente tiene distancia focal positiva y está representada por:",
                options: ["Potencia negativa (−D)", "Potencia positiva (+D)", "Potencia cero", "Dos focos negativos"],
                answer: "Potencia positiva (+D)",
                explanation: "Las lentes convexas convergen rayos y su potencia es +D."
            },
            {
                id: "optref-3",
                question: "La vergencia de un haz a 50 cm del foco (hacia la lente) es:",
                options: ["+2.00 D", "−2.00 D", "+0.50 D", "−0.50 D"],
                answer: "+2.00 D",
                explanation: "Vergencia L = 1/d (m); 0.5 m → +2 D si converge hacia el foco."
            },
            {
                id: "optref-4",
                question: "En el emétrope, los rayos paralelos enfocan:",
                options: ["Detrás de la retina", "Delante de la retina", "En la retina", "En el vítreo periférico"],
                answer: "En la retina",
                explanation: "Por definición, el sistema óptico emétrope enfoca en la retina sin acomodar."
            },
            {
                id: "optref-5",
                question: "La miopía se corrige con lentes:",
                options: ["Convexos (+)", "Cóncavos (−)", "Cilíndricos (+)", "Prismas base nasal"],
                answer: "Cóncavos (−)",
                explanation: "Desplazan el foco hacia atrás, hasta la retina."
            },
            {
                id: "optref-6",
                question: "La hipermetropía se caracteriza por enfocar rayos paralelos:",
                options: ["En la retina", "Delante de la retina", "Detrás de la retina", "En el plano pupilar"],
                answer: "Detrás de la retina",
                explanation: "Se corrige con lentes convexas (+) para adelantar el foco."
            },
            {
                id: "optref-7",
                question: "El astigmatismo se produce por:",
                options: ["Opacidad del cristalino", "Diferente curvatura en meridianos principales", "Aumento de la PIO", "Acomodación insuficiente"],
                answer: "Diferente curvatura en meridianos principales",
                explanation: "Cada meridiano tiene potencia distinta; requiere cilindro para corregir."
            },
            {
                id: "optref-8",
                question: "La presbicia es resultado de:",
                options: ["Acortamiento axial", "Rigidez del cristalino con la edad", "Aumento de la curvatura corneal", "Disminución de PIO"],
                answer: "Rigidez del cristalino con la edad",
                explanation: "Reduce acomodación; se corrige con adición positiva para cerca."
            },
            {
                id: "optref-9",
                question: "Una lente esférica de +5.00 D tiene distancia focal de:",
                options: ["+0.2 m", "+0.5 m", "−0.2 m", "−5 m"],
                answer: "+0.2 m",
                explanation: "f = 1/D → 1/5 = 0.2 m."
            },
            {
                id: "optref-10",
                question: "El eje del cilindro en una prescripción indica:",
                options: ["La potencia máxima del cilindro", "El meridiano sin potencia cilíndrica", "El meridiano de mayor potencia esférica", "La dirección del prisma"],
                answer: "El meridiano sin potencia cilíndrica",
                explanation: "El poder actúa 90° respecto al eje marcado."
            },
            {
                id: "optref-11",
                question: "En retinoscopía, las sombras ‘a favor’ (with) en un ojo sin cicloplejía suelen indicar:",
                options: ["Miopía alta", "Emetropía o hipermetropía", "Miopía baja", "Astigmatismo mixto"],
                answer: "Emetropía o hipermetropía",
                explanation: "El movimiento ‘with’ sugiere foco detrás de la retina sin lente de prueba."
            },
            {
                id: "optref-12",
                question: "La regla del 18 (aprox.) para adición presbítica sugiere que a 40 años:",
                options: ["Add +0.50", "Add +1.00", "Add +1.50", "Add +2.50"],
                answer: "Add +1.00",
                explanation: "Orientativa; la adición aumenta ~+0.25 D por cada 2–3 años tras los 40."
            },
            {
                id: "optref-13",
                question: "Un queratómetro mide principalmente:",
                options: ["Potencia total del ojo", "Curvatura corneal central", "Grosor corneal", "PIO"],
                answer: "Curvatura corneal central",
                explanation: "Estima K en mm o D, base para lentes de contacto y cálculo cilíndrico."
            },
            {
                id: "optref-14",
                question: "La equivalencia esférica (EE) de −2.00 −1.00 × 180 es:",
                options: ["−2.00 D", "−2.50 D", "−2.75 D", "−1.50 D"],
                answer: "−2.50 D",
                explanation: "EE = Esfera + (Cilindro/2) → −2 + (−1/2) = −2.5 D."
            },
            {
                id: "optref-15",
                question: "El cilindro cruzado de Jackson se usa para:",
                options: ["Afinar el eje y potencia del cilindro", "Medir la PIO", "Evaluar visión de colores", "Calcular distancia interpupilar"],
                answer: "Afinar el eje y potencia del cilindro",
                explanation: "Herramienta clave durante la refracción subjetiva."
            },
            {
                id: "optref-16",
                question: "En astigmatismo ‘a favor de la regla’ (WTR) el meridiano más curvo suele ser:",
                options: ["~180°", "~90°", "~45°", "~135°"],
                answer: "~90°",
                explanation: "La córnea es más curva verticalmente; cilindro negativo eje ~180°."
            },
            {
                id: "optref-17",
                question: "La potencia total aproximada del ojo humano es de:",
                options: ["+20 D", "+43 D", "+60 D", "+80 D"],
                answer: "+60 D",
                explanation: "Córnea ~+43 D y cristalino ~+17 D en estado relajado."
            },
            {
                id: "optref-18",
                question: "El vértice (vertex distance) es relevante al convertir monturas a LC cuando:",
                options: ["Potencias bajas (<±4.00 D)", "Potencias medias (±2.00 D)", "Potencias altas (>|±4.00| D)", "Solo en prismas"],
                answer: "Potencias altas (>|±4.00| D)",
                explanation: "La distancia vértice cambia la potencia efectiva percibida."
            },
            {
                id: "optref-19",
                question: "La regla de BVP (Back Vertex Power) se refiere a:",
                options: ["Potencia en vértice anterior", "Potencia efectiva en vértice posterior", "Índice de refracción de la lente", "Eje del cilindro"],
                answer: "Potencia efectiva en vértice posterior",
                explanation: "Usada para comparar potencias entre lentes y posiciones."
            },
            {
                id: "optref-20",
                question: "Una lente de −6.00 D colocada más cerca del ojo (menor vértice) produce en la retina:",
                options: ["Más efecto negativo", "Menos efecto negativo (aparenta menos miopía)", "Igual efecto", "Efecto positivo"],
                answer: "Menos efecto negativo (aparenta menos miopía)",
                explanation: "Disminuir vértice reduce potencia efectiva de lentes negativas."
            },
            {
                id: "optref-21",
                question: "La distancia nasopupilar (DNP) es crítica porque:",
                options: ["Ajusta la PIO", "Evita aberraciones cromáticas", "Centra ópticamente la lente con el eje visual", "Elimina el astigmatismo"],
                answer: "Centra ópticamente la lente con el eje visual",
                explanation: "Descentrar induce prismas y molestias."
            },
            {
                id: "optref-22",
                question: "La potencia de dos lentes en contacto es:",
                options: ["Suma de potencias", "Producto de potencias", "Promedio de potencias", "Resta de potencias"],
                answer: "Suma de potencias",
                explanation: "Ptotal ≈ P1 + P2 cuando están muy próximas."
            },
            {
                id: "optref-23",
                question: "Una lente cilíndrica actúa con máxima potencia:",
                options: ["A lo largo de su eje", "Perpendicular a su eje", "En todos los meridianos por igual", "En la oblicuidad 45°"],
                answer: "Perpendicular a su eje",
                explanation: "El eje marca el meridiano sin potencia cilíndrica."
            },
            {
                id: "optref-24",
                question: "En una receta ‘−3.00 −2.00 × 90’, el meridiano de 180° tiene potencia total de:",
                options: ["−3.00 D", "−5.00 D", "−2.00 D", "0.00 D"],
                answer: "−5.00 D",
                explanation: "El cilindro actúa 90° al eje: en 180° suma −2.00 a la esfera (−3.00)."
            },
            {
                id: "optref-25",
                question: "El ‘ciclo de refracción’ clínico estándar incluye, en orden lógico:",
                options: ["AV → subjetiva → objetiva → salud ocular", "Historia → objetiva → subjetiva → salud ocular → prescripción", "Subjetiva → historia → salud ocular → entrega", "Objetiva → entrega → historia → subjetiva"],
                answer: "Historia → objetiva → subjetiva → salud ocular → prescripción",
                explanation: "Secuencia habitual centrada en seguridad y precisión."
            },
            {
                id: "optref-26",
                question: "El ‘fogging’ en refracción subjetiva sirve para:",
                options: ["Relajar acomodación", "Estimular acomodación", "Medir PIO", "Alinear ejes visuales"],
                answer: "Relajar acomodación",
                explanation: "Sobrecorrige en positivo para evitar miopización acomodativa."
            },
            {
                id: "optref-27",
                question: "La ‘regla de los signos’ para espejos y lentes (óptica geométrica) establece que:",
                options: ["Foco de convergentes es negativo", "Foco de convergentes es positivo", "Todo foco es negativo", "Los objetos reales tienen vergencia positiva"],
                answer: "Foco de convergentes es positivo",
                explanation: "Convenciones útiles para trazado de rayos y ecuaciones."
            },
            {
                id: "optref-28",
                question: "El índice de refracción de una lente mayor implica generalmente:",
                options: ["Más espesor", "Menos espesor para igual potencia", "Igual espesor", "Coloración azulada constante"],
                answer: "Menos espesor para igual potencia",
                explanation: "Materiales Hi-Index permiten monturas más delgadas."
            },
            {
                id: "optref-29",
                question: "La aberración esférica aumenta cuando:",
                options: ["Se usa diafragma pequeño (pupila miótica)", "Aumenta la apertura (pupila grande)", "Se corrige con cilindro", "Se usa lente de baja potencia"],
                answer: "Aumenta la apertura (pupila grande)",
                explanation: "Rayos periféricos sufren más desviación que los centrales."
            },
            {
                id: "optref-30",
                question: "La dispersión cromática en lentes se reduce con:",
                options: ["Índice alto y bajo número de Abbe", "Índice bajo y alto número de Abbe", "Más curvatura", "Más espesor central"],
                answer: "Índice bajo y alto número de Abbe",
                explanation: "Mayor Abbe = menor dispersión; se percibe menos cromatismo lateral."
            },
            {
                id: "optref-31",
                question: "Una adición de cerca típica a los 55 años suele rondar:",
                options: ["+0.75 D", "+1.25 D", "+2.00 D", "+3.50 D"],
                answer: "+2.00 D",
                explanation: "Valores orientativos; se individualiza según demanda y prueba."
            },
            {
                id: "optref-32",
                question: "En un paciente con ‘círculo de mínima confusión’ descentrado, pensamos en:",
                options: ["Astigmatismo", "Hipermetropía simple", "Miopía axial", "Presbicia avanzada"],
                answer: "Astigmatismo",
                explanation: "El conoide de Sturm se corrige centrando con cilindro adecuado."
            },
            {
                id: "optref-33",
                question: "El cilindro negativo eje 180° corrige principalmente:",
                options: ["Astigmatismo WTR (vertical más curvo)", "Astigmatismo ATR (horizontal más curvo)", "Astigmatismo oblicuo", "Astigmatismo miópico simple"],
                answer: "Astigmatismo WTR (vertical más curvo)",
                explanation: "Se aplica potencia en 90°, aplanando el meridiano vertical."
            },
            {
                id: "optref-34",
                question: "Para convertir de forma ‘menos cilindro’ a ‘más cilindro’ se debe:",
                options: ["Sumar el cilindro a la esfera y rotar eje 90°", "Restar cilindro a la esfera", "Invertir solo el signo de la esfera", "Mantener eje y cambiar potencia esférica"],
                answer: "Sumar el cilindro a la esfera y rotar eje 90°",
                explanation: "Transposición: Esf’ = Esf + Cil; Cil’ cambia de signo; Eje’ = Eje ± 90°."
            },
            {
                id: "optref-35",
                question: "Una ‘marcha en cruces’ (astigmatismo) en el queratómetro indica:",
                options: ["Miopía pura", "Astigmatismo regular", "Astigmatismo irregular severo", "Hipermetropía pura"],
                answer: "Astigmatismo regular",
                explanation: "Los mires en perpendicular sugieren meridianos principales regulares."
            },
            {
                id: "optref-36",
                question: "Los prismas se especifican por potencia y base. Su efecto principal es:",
                options: ["Cambiar el tamaño de imagen", "Desviar el eje visual sin enfocar", "Modificar la PIO", "Aumentar la acomodación"],
                answer: "Desviar el eje visual sin enfocar",
                explanation: "Se usan en desequilibrios binoculares y forias/tropías."
            },
            {
                id: "optref-37",
                question: "En diplopía por exoforia descompensada, la prescripción típica es:",
                options: ["Prismas base temporal", "Prismas base nasal", "Cilindro oblicuo", "Add negativa"],
                answer: "Prismas base nasal",
                explanation: "Compensan la tendencia a divergencia (exodesviación)."
            },
            {
                id: "optref-38",
                question: "Al aumentar la distancia al objeto, la vergencia incidente en el ojo:",
                options: ["Aumenta", "Disminuye hacia 0 D", "Se hace negativa", "Permanece constante"],
                answer: "Disminuye hacia 0 D",
                explanation: "Rayos desde lejos llegan casi paralelos (0 D)."
            },
            {
                id: "optref-39",
                question: "La potencia efectiva cambia con vértice. Para +8.00 D alejando 5 mm del ojo:",
                options: ["Aumenta ligeramente", "Disminuye", "No cambia", "Se vuelve negativa"],
                answer: "Aumenta ligeramente",
                explanation: "Lentes positivas aumentan potencia efectiva al aumentar vértice."
            },
            {
                id: "optref-40",
                question: "El test de agujero estenopeico mejora AV cuando la causa es:",
                options: ["Opacidades densas del cristalino", "Errores refractivos", "Degeneración macular", "Neuropatía óptica"],
                answer: "Errores refractivos",
                explanation: "Reduce rayos periféricos y profundidad de campo aumenta."
            },
            {
                id: "optref-41",
                question: "Una corrección de −10.00 D en montura, al pasar a LC (vértice ≈ 0), requiere:",
                options: ["Más potencia negativa", "Menos potencia negativa", "Igual potencia", "Convertir a cilindro positivo"],
                answer: "Menos potencia negativa",
                explanation: "Reducir vértice hace la lente más ‘fuerte’; se baja la potencia en LC."
            },
            {
                id: "optref-42",
                question: "La anisometropía clínicamente significativa suele considerarse a partir de:",
                options: ["≥0.50 D de diferencia", "≥1.00 D", "≥2.00 D", "≥3.00 D"],
                answer: "≥2.00 D",
                explanation: "Por encima de 2 D aumenta riesgo de aniseiconia y supresión."
            },
            {
                id: "optref-43",
                question: "Para evaluar ‘dominancia ocular’ se usa típicamente:",
                options: ["Cartilla de Ishihara", "Prueba de orificio (Miles)", "Campimetría de Amsler", "OCT macular"],
                answer: "Prueba de orificio (Miles)",
                explanation: "Determina el ojo preferente para alineación y prescripción."
            },
            {
                id: "optref-44",
                question: "El ‘balance binocular’ en refracción subjetiva busca:",
                options: ["Mejorar solo el ojo dominante", "Igualar estímulo acomodativo en ambos ojos", "Eliminar forias", "Medir PIO con precisión"],
                answer: "Igualar estímulo acomodativo en ambos ojos",
                explanation: "Evita sobre/infra corrección monocular por acomodación desigual."
            },
            {
                id: "optref-45",
                question: "La fórmula de transposición a ‘menos cilindro’ implica:",
                options: ["Esf’ = Esf + Cil; Cil’ cambia de signo; Eje’ ± 90°", "Esf’ = Esf − Cil", "Cil’ = 0", "Eje’ = igual"],
                answer: "Esf’ = Esf + Cil; Cil’ cambia de signo; Eje’ ± 90°",
                explanation: "Misma regla que ‘más cilindro’, solo cambian signos y eje."
            },
            {
                id: "optref-46",
                question: "Una ametropía axial se debe principalmente a:",
                options: ["Variación de curvatura corneal", "Longitud axial anómala", "Índice del cristalino", "Grosor palpebral"],
                answer: "Longitud axial anómala",
                explanation: "Miopía axial: ojo más largo; hipermetropía axial: ojo más corto."
            },
            {
                id: "optref-47",
                question: "El poder corneal promedio (K) en adultos suele estar cerca de:",
                options: ["36–38 D", "40–42 D", "43–44 D", "46–48 D"],
                answer: "43–44 D",
                explanation: "Valores centrales habituales en población general."
            },
            {
                id: "optref-48",
                question: "La neutralización en retinoscopía se logra cuando la lente de prueba produce:",
                options: ["Movimiento ‘against’ residual", "Ausencia de movimiento (punto neutro)", "Movimiento ‘with’ marcado", "Reflejo invertido"],
                answer: "Ausencia de movimiento (punto neutro)",
                explanation: "Indica coincidencia del foco con el plano pupilar."
            },
            {
                id: "optref-49",
                question: "La add de cerca debe colocarse en:",
                options: ["Solo ojo dominante", "Ambos ojos de forma simétrica", "Únicamente en el ojo más hipermétrope", "En forma de prisma base inferior"],
                answer: "Ambos ojos de forma simétrica",
                explanation: "Para lectura confortable y balance binocular."
            },
            {
                id: "optref-50",
                question: "Para una demanda en cerca de 40 cm, la acomodación requerida es de:",
                options: ["1.00 D", "2.50 D", "3.00 D", "4.00 D"],
                answer: "2.50 D",
                explanation: "Demanda = 1/d (m): 1/0.40 ≈ 2.5 D."
            },
            {
                id: "optref-51",
                question: "La refracción es el cambio de dirección de la luz al pasar entre medios con distinto:",
                options: ["Color", "Índice de refracción", "Espesor", "Brillo"],
                answer: "Índice de refracción",
                explanation: "Según la ley de Snell, la luz se desvía al cambiar de medio óptico."
            },
            {
                id: "optref-52",
                question: "Cuando la luz pasa de un medio menos denso a uno más denso, se desvía:",
                options: ["Hacia la normal", "Lejos de la normal", "Paralela al límite", "No cambia"],
                answer: "Hacia la normal",
                explanation: "La velocidad disminuye y el rayo se acerca a la normal óptica."
            },
            {
                id: "optref-53",
                question: "El índice de refracción (n) del aire se considera aproximadamente:",
                options: ["1.00", "1.33", "1.52", "1.62"],
                answer: "1.00",
                explanation: "El aire tiene un n muy cercano a 1 en condiciones normales."
            },
            {
                id: "optref-54",
                question: "La ley de Snell se expresa matemáticamente como:",
                options: ["n₁ + n₂ = constante", "n₁·sen i = n₂·sen r", "i/r = n₂/n₁", "sen i – sen r = 0"],
                answer: "n₁·sen i = n₂·sen r",
                explanation: "Relaciona el ángulo de incidencia y de refracción entre medios ópticos."
            },
            {
                id: "optref-55",
                question: "La potencia refractiva de la córnea humana es aproximadamente:",
                options: ["+20 D", "+30 D", "+43 D", "+55 D"],
                answer: "+43 D",
                explanation: "La córnea aporta cerca de dos tercios del poder total del ojo."
            },
            {
                id: "optref-56",
                question: "El cristalino contribuye con una potencia de alrededor de:",
                options: ["+10 D", "+17 D", "+25 D", "+40 D"],
                answer: "+17 D",
                explanation: "Su poder varía ligeramente con la acomodación."
            },
            {
                id: "optref-57",
                question: "El punto remoto es el lugar donde el ojo enfoca sin acomodar:",
                options: ["En visión cercana", "Con esfuerzo acomodativo", "En estado de reposo", "Solo con lentes"],
                answer: "En estado de reposo",
                explanation: "Define la posición del foco sin participación del cristalino."
            },
            {
                id: "optref-58",
                question: "Un ojo hipermétrope no corregido utiliza la acomodación incluso para:",
                options: ["Ver lejos", "Ver de cerca", "Ver colores", "Controlar la PIO"],
                answer: "Ver lejos",
                explanation: "Debe aumentar su poder para llevar el foco a la retina."
            },
            {
                id: "optref-59",
                question: "El poder total de un sistema de dos lentes separadas depende de:",
                options: ["La suma simple de potencias", "La distancia entre lentes", "El espesor corneal", "El color del material"],
                answer: "La distancia entre lentes",
                explanation: "Debe incluir el término de separación para la potencia combinada."
            },
            {
                id: "optref-60",
                question: "La acomodación se produce por contracción del:",
                options: ["Músculo recto medial", "Músculo ciliar", "Iris", "Músculo oblicuo superior"],
                answer: "Músculo ciliar",
                explanation: "Aumenta la curvatura del cristalino permitiendo enfoque cercano."
            },
            {
                id: "optref-61",
                question: "La amplitud de acomodación disminuye con:",
                options: ["La edad", "La distancia", "La PIO baja", "El color del iris"],
                answer: "La edad",
                explanation: "Fenómeno fisiológico que conduce a la presbicia."
            },
            {
                id: "optref-62",
                question: "El rango acomodativo es la diferencia entre:",
                options: ["Punto cercano y punto lejano", "Dos potencias cilíndricas", "Ejes principales", "Distancia interpupilar"],
                answer: "Punto cercano y punto lejano",
                explanation: "Expresa el intervalo donde el ojo mantiene el enfoque nítido."
            },
            {
                id: "optref-63",
                question: "En un ojo miope de −3 D, el punto remoto se localiza a:",
                options: ["1 m", "50 cm", "33 cm", "∞"],
                answer: "33 cm",
                explanation: "1/3 D = 0.33 m: el foco está a esa distancia sin acomodar."
            },
            {
                id: "optref-64",
                question: "El fenómeno que impide ver objetos situados fuera del eje óptico se denomina:",
                options: ["Aberración cromática", "Aberración esférica", "Astigmatismo oblicuo", "Campo visual limitado"],
                answer: "Campo visual limitado",
                explanation: "Depende del diámetro pupilar y del sistema óptico ocular."
            },
            {
                id: "optref-65",
                question: "La vergencia de rayos que emergen divergentes de un objeto cercano es:",
                options: ["Positiva", "Negativa", "Nula", "Variable"],
                answer: "Negativa",
                explanation: "Rayos divergentes tienen vergencia negativa al llegar al ojo."
            },
            {
                id: "optref-66",
                question: "Una lente biconvexa tiene dos superficies:",
                options: ["Cóncavas", "Planas", "Convexas", "Asimétricas"],
                answer: "Convexas",
                explanation: "Ambas curvaturas convergen los rayos incidentes."
            },
            {
                id: "optref-67",
                question: "La potencia de una lente aumenta si:",
                options: ["Aumenta el radio de curvatura", "Disminuye el radio de curvatura", "Disminuye el índice del material", "Se reduce su espesor"],
                answer: "Disminuye el radio de curvatura",
                explanation: "Mayor curvatura implica mayor refracción de la luz."
            },
            {
                id: "optref-68",
                question: "El astigmatismo irregular se caracteriza por:",
                options: ["Ejes perpendiculares bien definidos", "Meridianos variables sin relación ortogonal", "Cilindro constante", "Visión normal con corrección esférica"],
                answer: "Meridianos variables sin relación ortogonal",
                explanation: "No puede corregirse completamente con lentes cilíndricas simples."
            },
            {
                id: "optref-69",
                question: "En un ojo afáquico (sin cristalino) el poder total disminuye en aproximadamente:",
                options: ["10 D", "17 D", "25 D", "40 D"],
                answer: "17 D",
                explanation: "Equivale al poder promedio aportado por el cristalino."
            },
            {
                id: "optref-70",
                question: "El fenómeno de dispersión cromática se debe a que:",
                options: ["El índice varía con la longitud de onda", "Las lentes son imperfectas", "La pupila se dilata", "Los rayos son paralelos"],
                answer: "El índice varía con la longitud de onda",
                explanation: "Provoca separación de colores (aberración cromática)."
            },
            {
                id: "optref-71",
                question: "El astigmatismo ‘contra la regla’ (ATR) presenta mayor curvatura en el meridiano:",
                options: ["Horizontal (180°)", "Vertical (90°)", "Oblicuo (45°)", "Nasal"],
                answer: "Horizontal (180°)",
                explanation: "El cilindro corrector negativo se coloca eje 90°."
            },
            {
                id: "optref-72",
                question: "El ojo emétrope tiene una longitud axial aproximada de:",
                options: ["20 mm", "22 mm", "24 mm", "26 mm"],
                answer: "24 mm",
                explanation: "Pequeñas variaciones generan ametropías axiales."
            },
            {
                id: "optref-73",
                question: "El cálculo del poder dióptrico del ojo se basa en:",
                options: ["Ley de Snell y distancias focales", "Reflexión especular", "Aberración cromática", "Magnificación angular"],
                answer: "Ley de Snell y distancias focales",
                explanation: "Determina la relación entre radios, índice y foco."
            },
            {
                id: "optref-74",
                question: "El astigmatismo mixto combina:",
                options: ["Miopía y astigmatismo regular", "Un foco miópico y otro hipermetrópico", "Solo curvaturas iguales", "Presbicia con miopía"],
                answer: "Un foco miópico y otro hipermetrópico",
                explanation: "Cada meridiano enfoca a distinto lado de la retina."
            },
            {
                id: "optref-75",
                question: "La lente correctora de un hipermétrope de +2 D acerca su punto remoto desde:",
                options: ["Infinito a 0.5 m", "0.5 m a infinito", "0.25 m a 1 m", "1 m a 0.25 m"],
                answer: "0.5 m a infinito",
                explanation: "El lente positivo traslada el foco hacia la retina en visión lejana."
            },
            {
                id: "optref-76",
                question: "El fenómeno de ‘convergencia acomodativa’ acompaña a:",
                options: ["Visión lejana", "Acomodación para cerca", "Miopía axial", "Uso de lentes bifocales"],
                answer: "Acomodación para cerca",
                explanation: "Al enfocar cerca, los ojos convergen por sinergia neuromuscular."
            },
            {
                id: "optref-77",
                question: "Una lente plana (sin curvatura) tiene potencia:",
                options: ["Positiva", "Negativa", "Cero", "Variable"],
                answer: "Cero",
                explanation: "No desvía los rayos; potencia óptica nula."
            },
            {
                id: "optref-78",
                question: "El círculo de mínima confusión se encuentra en:",
                options: ["Astigmatismo", "Miopía pura", "Hipermetropía", "Acomodación paralítica"],
                answer: "Astigmatismo",
                explanation: "Es el punto donde la imagen es menos borrosa entre los dos focos."
            },
            {
                id: "optref-79",
                question: "La potencia de una superficie corneal es inversamente proporcional a:",
                options: ["Su radio de curvatura", "El espesor corneal", "El índice del humor acuoso", "La PIO"],
                answer: "Su radio de curvatura",
                explanation: "Menor radio → mayor potencia óptica (P ≈ (n–1)/r)."
            },
            {
                id: "optref-80",
                question: "Las lentes progresivas combinan:",
                options: ["Dos distancias fijas", "Múltiples potencias continuas", "Cilindros cruzados", "Filtros UV"],
                answer: "Múltiples potencias continuas",
                explanation: "Permiten visión a todas las distancias sin saltos ópticos."
            },
            {
                id: "optref-81",
                question: "El queratómetro utiliza el principio de:",
                options: ["Espejo convexo", "Imagen especular doble", "Refracción por prisma", "Proyección difusa"],
                answer: "Espejo convexo",
                explanation: "Mide el tamaño de la imagen reflejada para calcular curvatura corneal."
            },
            {
                id: "optref-82",
                question: "Una lente de contacto blanda corrige principalmente:",
                options: ["Astigmatismo elevado irregular", "Errores esféricos moderados", "Anisometropías >5 D", "Estrabismo"],
                answer: "Errores esféricos moderados",
                explanation: "Se adapta a la superficie corneal y corrige miopía o hipermetropía."
            },
            {
                id: "optref-83",
                question: "En la refracción objetiva con autorrefractómetro se obtiene:",
                options: ["Potencia corneal", "Estimación automática de error refractivo", "Campo visual", "Agudeza visual real"],
                answer: "Estimación automática de error refractivo",
                explanation: "Usa principios de reflectometría para aproximar la corrección necesaria."
            },
            {
                id: "optref-84",
                question: "La retinoscopía requiere neutralizar el reflejo observado mediante:",
                options: ["Cambio del eje del cilindro", "Colocación de lentes de prueba", "Variar la distancia pupilar", "Dilatar la pupila"],
                answer: "Colocación de lentes de prueba",
                explanation: "Se ajusta la lente hasta eliminar el movimiento del reflejo."
            },
            {
                id: "optref-85",
                question: "La distancia de trabajo en retinoscopía debe restarse para obtener:",
                options: ["Potencia subjetiva final", "Poder total corneal", "Longitud axial", "Índice de refracción"],
                answer: "Potencia subjetiva final",
                explanation: "Se descuenta la vergencia correspondiente a la distancia del examinador."
            },
            {
                id: "optref-86",
                question: "La refracción manifiesta se realiza:",
                options: ["Bajo cicloplejía", "Con acomodación libre", "Solo en niños", "En oscuridad total"],
                answer: "Con acomodación libre",
                explanation: "Permite determinar la graduación funcional del paciente adulto."
            },
            {
                id: "optref-87",
                question: "El test de Duane mide la relación:",
                options: ["Acomodación/convergencia", "Cilindro/esfera", "Campo visual/fusión", "Color/percepción"],
                answer: "Acomodación/convergencia",
                explanation: "Evalúa la sinergia entre enfoque y convergencia binocular."
            },
            {
                id: "optref-88",
                question: "Una refracción bajo cicloplejía se utiliza para:",
                options: ["Relajar la acomodación", "Estimular convergencia", "Medir agudeza visual cercana", "Evaluar motilidad ocular"],
                answer: "Relajar la acomodación",
                explanation: "Permite detectar hipermetropía latente especialmente en niños."
            },
            {
                id: "optref-89",
                question: "El fenómeno de aniseiconía se refiere a:",
                options: ["Diferente tamaño de imagen retinal entre ambos ojos", "Diferente color percibido", "Desalineación ocular", "Falta de acomodación"],
                answer: "Diferente tamaño de imagen retinal entre ambos ojos",
                explanation: "Puede causar supresión o diplopía en anisometropías grandes."
            },
            {
                id: "optref-90",
                question: "El poder dióptrico del ojo disminuye cuando:",
                options: ["La córnea se aplana", "La pupila se contrae", "Aumenta la PIO", "El cristalino se engrosa"],
                answer: "La córnea se aplana",
                explanation: "Menor curvatura reduce el poder refractivo global."
            },
            {
                id: "optref-91",
                question: "Una lente bicóncava dispersa los rayos:",
                options: ["Hacia la normal", "Divergiéndolos", "Convergiéndolos", "Sin desviarlos"],
                answer: "Divergiéndolos",
                explanation: "Las lentes negativas separan los rayos incidentes paralelos."
            }
        ]
    },
    {
        id: "conjuntiva",
        title: "Conjuntiva y conjuntivitis",
        description: "Anatomía, histología y principales cuadros clínicos de inflamación conjuntival.",
        duration: "16 preguntas",
        difficulty: "Intermedio",
        icon: GiEyeTarget,
        theme: {
            ring: "ring-sky-400/60",
            gradient: "from-sky-400/15 via-cyan-500/5 to-transparent",
            accent: "text-sky-300"
        },
        questions: [
            {
                id: "conj-1",
                question: "La función principal de la conjuntiva es:",
                options: [
                    "Regular la presión intraocular",
                    "Proteger la superficie ocular e intervenir en la inmunidad",
                    "Dirigir la luz hacia la fóvea",
                    "Producir humor vítreo"
                ],
                answer: "Proteger la superficie ocular e intervenir en la inmunidad",
                explanation: "El capítulo describe que la conjuntiva tiene una función principalmente protectora y participa en la inmunidad pasiva y activa."
            },
            {
                id: "conj-2",
                question: "Desde el punto de vista anatómico, la conjuntiva SE DIVIDE en:",
                options: [
                    "Conjuntiva palpebral, fórnix y bulbar",
                    "Conjuntiva nasal, temporal y superior",
                    "Conjuntiva corneal y escleral",
                    "Conjuntiva anterior y posterior"
                ],
                answer: "Conjuntiva palpebral, fórnix y bulbar",
                explanation: "El texto señala tres porciones: conjuntiva palpebral, de fondo de saco o fórnix y bulbar."
            },
            {
                id: "conj-3",
                question: "Las empalizadas de Vogt se localizan en:",
                options: [
                    "Conjuntiva palpebral inferior",
                    "Limbus esclerocorneal",
                    "Carúncula",
                    "Conducto nasolagrimal"
                ],
                answer: "Limbus esclerocorneal",
                explanation: "En el limbo existen crestas radiales que forman las empalizadas de Vogt, descritas como posible reservorio de células madre corneales."
            },
            {
                id: "conj-4",
                question: "Las células caliciformes conjuntivales son más densas en:",
                options: [
                    "Zona nasal inferior y fondos de saco",
                    "Córnea central",
                    "Conjuntiva bulbar superior",
                    "Carúncula exclusivamente"
                ],
                answer: "Zona nasal inferior y fondos de saco",
                explanation: "El epitelio conjuntival contiene células caliciformes más densas en la zona nasal inferior y en los fondos de saco."
            },
            {
                id: "conj-5",
                question: "Las glándulas lagrimales accesorias de Krause y Wolfring se encuentran:",
                options: [
                    "En la córnea y cristalino",
                    "En la profundidad del estroma conjuntival",
                    "Solo en la carúncula",
                    "En el cuerpo ciliar"
                ],
                answer: "En la profundidad del estroma conjuntival",
                explanation: "El estroma conjuntival contiene las glándulas accesorias de Krause y Wolfring, cuya secreción es parte esencial de la película lagrimal."
            },
            {
                id: "conj-6",
                question: "Síntoma considerado sello distintivo de las enfermedades alérgicas conjuntivales:",
                options: [
                    "Dolor intenso",
                    "Prurito",
                    "Pérdida marcada de agudeza visual",
                    "Diplopía"
                ],
                answer: "Prurito",
                explanation: "El capítulo indica que el prurito es el sello distintivo de las enfermedades alérgicas."
            },
            {
                id: "conj-7",
                question: "La presencia de dolor significativo, fotofobia e intensa sensación de cuerpo extraño sugiere:",
                options: [
                    "Patología exclusiva de párpados",
                    "Afectación corneal",
                    "Alteración del nervio óptico",
                    "Problema puramente refractivo"
                ],
                answer: "Afectación corneal",
                explanation: "Se menciona que estos síntomas fuertes hacen sospechar compromiso corneal más que una conjuntivitis simple."
            },
            {
                id: "conj-8",
                question: "La secreción mucopurulenta es característica de:",
                options: [
                    "Ojo seco y alergia crónica",
                    "Conjuntivitis víricas agudas",
                    "Infección bacteriana aguda o por Chlamydia",
                    "Infección gonocócica exclusivamente"
                ],
                answer: "Infección bacteriana aguda o por Chlamydia",
                explanation: "El texto señala que la secreción mucopurulenta aparece típicamente en la infección bacteriana aguda o por clamidias."
            },
            {
                id: "conj-9",
                question: "Una secreción purulenta intensa en el ojo suele sugerir:",
                options: [
                    "Conjuntivitis alérgica",
                    "Infección gonocócica",
                    "Conjuntivitis por ojo seco",
                    "Uveítis anterior"
                ],
                answer: "Infección gonocócica",
                explanation: "Se indica que una secreción purulenta intensa sugiere infección gonocócica."
            },
            {
                id: "conj-10",
                question: "La hiperemia conjuntival bacteriana típica se describe como:",
                options: [
                    "Más intensa en el limbo",
                    "Difusa, rojo oscuro y más intensa lejos del limbo",
                    "Limitada al borde palpebral",
                    "Solo en cuadrante nasal"
                ],
                answer: "Difusa, rojo oscuro y más intensa lejos del limbo",
                explanation: "La hiperemia difusa, rojo oscuro y más intensa alejada del limbo es frecuente en infecciones bacterianas."
            },
            {
                id: "conj-11",
                question: "¿Qué afirma mejor sobre las seudomembranas conjuntivales?",
                options: [
                    "Al retirarlas siempre se desgarra el epitelio",
                    "Están formadas por exudados coagulados adheridos al epitelio inflamado",
                    "Solo aparecen en alergia leve",
                    "No dejan cicatriz nunca"
                ],
                answer: "Están formadas por exudados coagulados adheridos al epitelio inflamado",
                explanation: "Las seudomembranas son exudados coagulados adheridos al epitelio; pueden retirarse dejando el epitelio intacto."
            },
            {
                id: "conj-12",
                question: "Los folículos conjuntivales se describen clínicamente como:",
                options: [
                    "Lesiones rojas con vaso central prominente",
                    "Lesiones elevadas translúcidas tipo grano de arroz, sin vasos en su interior",
                    "Placas blanquecinas lineales cicatriciales",
                    "Depresiones en limbo llamadas fosetas de Herbert"
                ],
                answer: "Lesiones elevadas translúcidas tipo grano de arroz, sin vasos en su interior",
                explanation: "Se definen como múltiples lesiones delimitadas, elevadas, translúcidas, sin vasos en su interior, que los rodean o atraviesan."
            },
            {
                id: "conj-13",
                question: "A diferencia de los folículos, las papilas conjuntivales se caracterizan por:",
                options: [
                    "Ausencia de vasos sanguíneos",
                    "Un núcleo vascular central",
                    "Localizarse solo en fondos de saco",
                    "Ser siempre hallazgos normales"
                ],
                answer: "Un núcleo vascular central",
                explanation: "Las papilas presentan un núcleo vascular; las micropapilas forman un patrón en mosaico de puntos rojos elevados."
            },
            {
                id: "conj-14",
                question: "La adenopatía más típica asociada a conjuntivitis vírica es:",
                options: [
                    "Ganglio submandibular",
                    "Ganglio occipital",
                    "Ganglio preauricular",
                    "Ganglio cervical posterior"
                ],
                answer: "Ganglio preauricular",
                explanation: "El texto destaca que la conjuntivitis vírica suele asociarse a linfadenopatía preauricular."
            },
            {
                id: "conj-15",
                question: "En la conjuntivitis bacteriana aguda típica, un hallazgo frecuente es:",
                options: [
                    "Prurito intenso sin secreción",
                    "Párpados pegados al despertar por secreciones",
                    "Miosis dolorosa marcada",
                    "Pérdida severa de visión central"
                ],
                answer: "Párpados pegados al despertar por secreciones",
                explanation: "Se menciona que los párpados suelen estar pegados por secreción y cuesta abrirlos al despertar."
            },
            {
                id: "conj-16",
                question: "La estrategia SAFE para tracoma incluye, entre otros elementos:",
                options: [
                    "Solo uso prolongado de corticoides tópicos",
                    "Antibióticos aislados sin medidas de higiene",
                    "Cirugía para triquiasis, antibióticos, higiene facial y mejoras ambientales",
                    "Vacunación rutinaria eficaz para prevenir reinfección"
                ],
                answer: "Cirugía para triquiasis, antibióticos, higiene facial y mejoras ambientales",
                explanation: "La OMS propone la estrategia SAFE: Surgery, Antibiotics, Facial cleanliness y Environmental improvement."
            },
            {
                id: "conj-17",
                question: "El tejido linfoide asociado a la conjuntiva (TLAC) es fundamental para:",
                options: [
                    "Regular la producción de humor acuoso",
                    "Iniciar y regular la respuesta inmunitaria de la superficie ocular",
                    "Controlar la presión intraocular",
                    "Nutrir la córnea mediante vasos sanguíneos"
                ],
                answer: "Iniciar y regular la respuesta inmunitaria de la superficie ocular",
                explanation: "El TLAC está descrito como clave para iniciar y regular la respuesta inmunitaria en la superficie ocular."
            },
            {
                id: "conj-18",
                question: "¿Hacia qué ganglios drena principalmente la red linfática de la conjuntiva?",
                options: [
                    "Parotídeos y cervicales posteriores",
                    "Preauriculares y submandibulares",
                    "Occipitales y retrofaríngeos",
                    "Supraclaviculares únicamente"
                ],
                answer: "Preauriculares y submandibulares",
                explanation: "El texto indica que la densa red linfática drena a ganglios preauriculares y submandibulares, igual que los párpados."
            },
            {
                id: "conj-19",
                question: "El epitelio conjuntival se caracteriza por ser:",
                options: [
                    "Queratinizado, similar al de la piel",
                    "No queratinizado, con varias capas celulares",
                    "Monoestratificado plano",
                    "Cilíndrico ciliado pseudoestratificado"
                ],
                answer: "No queratinizado, con varias capas celulares",
                explanation: "Se describe como un epitelio no queratinizado con unas cinco capas celulares."
            },
            {
                id: "conj-20",
                question: "Aproximadamente, ¿de cuántas capas celulares está compuesto el epitelio conjuntival?",
                options: [
                    "Dos capas celulares",
                    "Tres capas celulares",
                    "Cinco capas celulares",
                    "Diez capas celulares"
                ],
                answer: "Cinco capas celulares",
                explanation: "El texto menciona que el epitelio tiene una altura de unas cinco capas celulares."
            },
            {
                id: "conj-21",
                question: "¿Cuál es la función principal de las células caliciformes conjuntivales?",
                options: [
                    "Producir componente lipídico de la lágrima",
                    "Segregar moco para la película lagrimal",
                    "Formar la cápsula de Tenon",
                    "Generar fibras de colágeno del estroma"
                ],
                answer: "Segregar moco para la película lagrimal",
                explanation: "Las células caliciformes se describen como productoras de moco, componente importante de la película lagrimal."
            },
            {
                id: "conj-22",
                question: "¿Dónde son más densas las células caliciformes de la conjuntiva?",
                options: [
                    "En la córnea central",
                    "En la zona nasal inferior y fondos de saco",
                    "En el limbo esclerocorneal exclusivamente",
                    "En la conjuntiva palpebral superior únicamente"
                ],
                answer: "En la zona nasal inferior y fondos de saco",
                explanation: "El libro indica que son más densas en la zona nasal inferior y en los fondos de saco conjuntivales."
            },
            {
                id: "conj-23",
                question: "Las glándulas lagrimales accesorias de Krause y Wolfring:",
                options: [
                    "Se ubican en la córnea y el limbo",
                    "Son parte de la coroides",
                    "Se localizan en la profundidad del estroma conjuntival",
                    "Solo se encuentran en la carúncula"
                ],
                answer: "Se localizan en la profundidad del estroma conjuntival",
                explanation: "Se describen en la profundidad del estroma conjuntival, contribuyendo de forma esencial a la película lagrimal."
            },
            {
                id: "conj-24",
                question: "La secreción acuosa en la inflamación conjuntival es típica de:",
                options: [
                    "Conjuntivitis víricas agudas o alérgicas agudas",
                    "Conjuntivitis por Chlamydia crónica",
                    "Queratitis bacterianas profundas",
                    "Tracoma cicatricial avanzado"
                ],
                answer: "Conjuntivitis víricas agudas o alérgicas agudas",
                explanation: "Se menciona que la secreción acuosa se observa en conjuntivitis víricas agudas y alérgicas agudas."
            },
            {
                id: "conj-25",
                question: "La secreción mucoide es característica de:",
                options: [
                    "Conjuntivitis bacteriana aguda",
                    "Conjuntivitis alérgicas crónicas y ojo seco",
                    "Conjuntivitis gonocócicas hiperagudas",
                    "Quemosis aguda por hipersensibilidad"
                ],
                answer: "Conjuntivitis alérgicas crónicas y ojo seco",
                explanation: "El texto indica que la secreción mucoide es típica de conjuntivitis alérgicas crónicas y del ojo seco."
            },
            {
                id: "conj-26",
                question: "La secreción purulenta moderada se observa típicamente en:",
                options: [
                    "Conjuntivitis alérgica estacional leve",
                    "Conjuntivitis bacteriana aguda",
                    "Conjuntivitis vírica adenovírica leve",
                    "Tracoma cicatricial"
                ],
                answer: "Conjuntivitis bacteriana aguda",
                explanation: "Se señala que la secreción purulenta moderada es típica de la conjuntivitis bacteriana aguda."
            },
            {
                id: "conj-27",
                question: "¿Qué patrón de hemorragias conjuntivales es más frecuente en conjuntivitis víricas?",
                options: [
                    "Hemorragias extensas y difusas siempre",
                    "Múltiples petequias pequeñas bien delimitadas",
                    "Grandes manchas subconjuntivales únicas",
                    "Hemorragias profundas perilímbicas"
                ],
                answer: "Múltiples petequias pequeñas bien delimitadas",
                explanation: "Se describe que en las conjuntivitis víricas las hemorragias suelen ser múltiples, pequeñas y bien delimitadas (petequias)."
            },
            {
                id: "conj-28",
                question: "En las conjuntivitis bacterianas graves, las hemorragias subconjuntivales suelen ser:",
                options: [
                    "Ausentes",
                    "Siempre puntiformes y escasas",
                    "Más extensas y difusas",
                    "Limitadas al limbo"
                ],
                answer: "Más extensas y difusas",
                explanation: "El texto indica que en las bacterianas graves las hemorragias son más extensas y difusas."
            },
            {
                id: "conj-29",
                question: "La quemosis conjuntival se define como:",
                options: [
                    "Atrofia de la conjuntiva bulbar",
                    "Edema conjuntival que se ve como tumefacción translúcida",
                    "Hemorragia subconjuntival en sábana",
                    "Infiltrado celular profundo de la coroides"
                ],
                answer: "Edema conjuntival que se ve como tumefacción translúcida",
                explanation: "Se describe como una tumefacción translúcida debido al edema conjuntival."
            },
            {
                id: "conj-30",
                question: "La quemosis aguda suele indicar con más frecuencia:",
                options: [
                    "Reacción de hipersensibilidad, por ejemplo al polen",
                    "Desprendimiento de retina",
                    "Neuropatía óptica isquémica",
                    "Glaucoma crónico simple"
                ],
                answer: "Reacción de hipersensibilidad, por ejemplo al polen",
                explanation: "Se menciona que la quemosis aguda suele indicar una reacción de hipersensibilidad, como al polen."
            },
            {
                id: "conj-31",
                question: "Una causa sistémica mencionada de quemosis subaguda o crónica es:",
                options: [
                    "Hipotensión arterial",
                    "Síndrome nefrótico con descenso de la presión oncótica plasmática",
                    "Hiperglucemia",
                    "Hipertiroidismo sin afectación ocular"
                ],
                answer: "Síndrome nefrótico con descenso de la presión oncótica plasmática",
                explanation: "Entre las causas se incluye el descenso de la presión oncótica plasmática, como en el síndrome nefrótico."
            },
            {
                id: "conj-32",
                question: "Las membranas verdaderas conjuntivales se diferencian de las seudomembranas porque:",
                options: [
                    "No están adheridas al epitelio",
                    "Afectan a las capas superficiales del epitelio y este se desgarra al retirarlas",
                    "Nunca dejan cicatriz",
                    "Solo aparecen en conjuntivitis alérgicas leves"
                ],
                answer: "Afectan a las capas superficiales del epitelio y este se desgarra al retirarlas",
                explanation: "El texto indica que las membranas verdaderas afectan las capas superficiales epiteliales y al arrancarlas se desgarra el epitelio."
            },
            {
                id: "conj-33",
                question: "Entre las causas de membranas o seudomembranas conjuntivales se incluye:",
                options: [
                    "Conjuntivitis adenovírica grave y conjuntivitis gonocócica",
                    "Únicamente conjuntivitis alérgica leve",
                    "Solo ojo seco avanzado",
                    "Desprendimiento vítreo posterior"
                ],
                answer: "Conjuntivitis adenovírica grave y conjuntivitis gonocócica",
                explanation: "Se citan como posibles causas la conjuntivitis adenovírica grave, la gonocócica y otras infecciones bacterianas, conjuntivitis leñosa y síndrome de Stevens-Johnson."
            },
            {
                id: "conj-34",
                question: "La infiltración conjuntival crónica se reconoce clínicamente por:",
                options: [
                    "Hipopión en cámara anterior",
                    "Pérdida de detalle de los vasos normales de la conjuntiva tarsal",
                    "Midriasis paralítica",
                    "Depósitos lipídicos en la córnea"
                ],
                answer: "Pérdida de detalle de los vasos normales de la conjuntiva tarsal",
                explanation: "Se describe la infiltración como pérdida de detalle de los vasos de la conjuntiva tarsal, sobre todo en el párpado superior."
            },
            {
                id: "conj-35",
                question: "La cicatrización subconjuntival grave, como en el tracoma, puede asociarse a:",
                options: [
                    "Aumento de células caliciformes",
                    "Entropión cicatricial por pérdida de células caliciformes y glándulas accesorias",
                    "Hipertrofia de la cápsula de Tenon",
                    "Aumento de la producción de lágrima"
                ],
                answer: "Entropión cicatricial por pérdida de células caliciformes y glándulas accesorias",
                explanation: "Se menciona que la cicatrización grave se asocia a pérdida de células caliciformes y glándulas lagrimales accesorias, pudiendo originar entropión cicatricial."
            },
            {
                id: "conj-36",
                question: "Los folículos conjuntivales aparecen con mayor frecuencia en todas las siguientes situaciones, EXCEPTO:",
                options: [
                    "Conjuntivitis víricas",
                    "Conjuntivitis por Chlamydia",
                    "Síndrome oculoglandular de Parinaud",
                    "Catarata senil"
                ],
                answer: "Catarata senil",
                explanation: "Se relacionan con conjuntivitis víricas, por Chlamydia, síndrome de Parinaud e hipersensibilidad a fármacos tópicos, no con catarata."
            },
            {
                id: "conj-37",
                question: "Respecto a los folículos conjuntivales, es correcto que:",
                options: [
                    "Siempre son patológicos a cualquier edad",
                    "Los folículos pequeños pueden ser hallazgo normal en la infancia (foliculosis)",
                    "Nunca se observan en fondos de saco",
                    "Solo se localizan en la conjuntiva bulbar"
                ],
                answer: "Los folículos pequeños pueden ser hallazgo normal en la infancia (foliculosis)",
                explanation: "El texto indica que los folículos pequeños son un hallazgo normal en la infancia (foliculosis)."
            },
            {
                id: "conj-38",
                question: "Las papilas conjuntivales pueden aparecer únicamente en:",
                options: [
                    "Conjuntiva bulbar en cualquier zona",
                    "Conjuntiva palpebral y conjuntiva bulbar del limbo",
                    "Carúncula y pliegue semilunar",
                    "Sólo en la conjuntiva tarsal inferior"
                ],
                answer: "Conjuntiva palpebral y conjuntiva bulbar del limbo",
                explanation: "Se especifica que las papilas solo pueden aparecer en la conjuntiva palpebral y en la conjuntiva bulbar del limbo."
            },
            {
                id: "conj-39",
                question: "Clínicamente, las micropapilas conjuntivales forman:",
                options: [
                    "Unas líneas blanquecinas radiadas",
                    "Un patrón en mosaico de puntos rojos elevados",
                    "Pequeñas vesículas llenas de líquido",
                    "Pequeños nódulos amarillos subepiteliales"
                ],
                answer: "Un patrón en mosaico de puntos rojos elevados",
                explanation: "Se describe que las micropapilas forman un patrón en mosaico de puntos rojos elevados por su canal vascular central."
            },
            {
                id: "conj-40",
                question: "Las papilas gigantes se definen como lesiones papilares de tamaño:",
                options: [
                    "<0,5 mm",
                    "0,5-1 mm",
                    ">1 mm",
                    ">5 mm"
                ],
                answer: ">1 mm",
                explanation: "El texto indica que las papilas gigantes son mayores de 1 mm."
            },
            {
                id: "conj-41",
                question: "Entre las causas de papilas conjuntivales se incluye:",
                options: [
                    "Únicamente queratitis herpética",
                    "Conjuntivitis bacterianas, alérgicas, blefaritis crónica y uso de lentes de contacto",
                    "Degeneraciones de la retina",
                    "Neuritis óptica"
                ],
                answer: "Conjuntivitis bacterianas, alérgicas, blefaritis crónica y uso de lentes de contacto",
                explanation: "Se menciona que las papilas pueden deberse a conjuntivitis bacterianas y alérgicas, blefaritis crónica, uso de lentes de contacto, queratoconjuntivitis límbica superior y síndrome de laxitud palpebral."
            },
            {
                id: "conj-42",
                question: "La causa más común de adenopatía asociada a conjuntivitis es:",
                options: [
                    "Infección vírica",
                    "Conjuntivitis alérgica leve",
                    "Degeneraciones conjuntivales",
                    "Ojo seco crónico"
                ],
                answer: "Infección vírica",
                explanation: "El texto señala que la causa más común de adenopatía en conjuntivitis son las infecciones víricas."
            },
            {
                id: "conj-43",
                question: "En la conjuntivitis bacteriana aguda, las bacterias aisladas con más frecuencia son:",
                options: [
                    "Pseudomonas aeruginosa y E. coli",
                    "Streptococcus pneumoniae, Staphylococcus aureus, Haemophilus influenzae y Moraxella catarrhalis",
                    "Neisseria gonorrhoeae y N. meningitidis exclusivamente",
                    "Treponema pallidum y Mycobacterium tuberculosis"
                ],
                answer: "Streptococcus pneumoniae, Staphylococcus aureus, Haemophilus influenzae y Moraxella catarrhalis",
                explanation: "Se mencionan estos cuatro como los gérmenes aislados con mayor frecuencia en conjuntivitis bacteriana aguda."
            },
            {
                id: "conj-44",
                question: "La conjuntivitis bacteriana aguda se transmite principalmente por:",
                options: [
                    "Herencia autosómica dominante",
                    "Contacto directo con secreciones infectadas",
                    "Vectores artrópodos exclusivamente",
                    "Aerosoles respiratorios a larga distancia"
                ],
                answer: "Contacto directo con secreciones infectadas",
                explanation: "El capítulo indica que es causada por contacto directo con secreciones infectadas."
            },
            {
                id: "conj-45",
                question: "Sin tratamiento, aproximadamente ¿qué porcentaje de conjuntivitis bacterianas agudas se resuelve en menos de 5 días?",
                options: [
                    "10%",
                    "30%",
                    "60%",
                    "100%"
                ],
                answer: "60%",
                explanation: "Se señala que alrededor del 60% de los casos se resuelven sin tratamiento en menos de 5 días."
            },
            {
                id: "conj-46",
                question: "Respecto a la afectación de ambos ojos en la conjuntivitis bacteriana aguda, es cierto que:",
                options: [
                    "Siempre es estrictamente unilateral",
                    "Suele ser bilateral, aunque un ojo puede afectarse 1-2 días antes",
                    "Nunca pasa de un ojo al otro",
                    "Solo afecta simultáneamente ambos ojos desde el inicio"
                ],
                answer: "Suele ser bilateral, aunque un ojo puede afectarse 1-2 días antes",
                explanation: "Se describe que generalmente es bilateral, pero un ojo puede verse afectado uno o dos días antes."
            },
            {
                id: "conj-47",
                question: "¿Cuál de los siguientes hallazgos sugiere fuertemente conjuntivitis gonocócica o meningocócica?",
                options: [
                    "Secreción acuosa leve",
                    "Secreción mucosa transparente",
                    "Secreción purulenta hiperaguda muy abundante",
                    "Ausencia total de secreción"
                ],
                answer: "Secreción purulenta hiperaguda muy abundante",
                explanation: "La secreción purulenta hiperaguda se menciona como sugestiva de conjuntivitis gonocócica o meningocócica."
            },
            {
                id: "conj-48",
                question: "En los casos graves de conjuntivitis bacteriana aguda, se recomienda realizar tinción de Gram urgente para descartar principalmente:",
                options: [
                    "Infección por virus herpes",
                    "Infección gonocócica o meningocócica",
                    "Retinopatía diabética",
                    "Degeneración macular asociada a la edad"
                ],
                answer: "Infección gonocócica o meningocócica",
                explanation: "Se indica que en casos graves deben tomarse muestras para Gram y descartar gonococos o meningococos."
            },
            {
                id: "conj-49",
                question: "Según el texto, los antibióticos tópicos en conjuntivitis bacteriana aguda suelen indicarse:",
                options: [
                    "Una vez al día durante 3 días",
                    "Cuatro veces al día durante al menos 1 semana",
                    "Solo cuando hay úlcera corneal",
                    "Únicamente en neonatos"
                ],
                answer: "Cuatro veces al día durante al menos 1 semana",
                explanation: "Se menciona que a menudo se prescriben 4 veces al día durante no menos de 1 semana."
            },
            {
                id: "conj-50",
                question: "Algunos autores evitan el uso sistemático de cloranfenicol tópico debido a:",
                options: [
                    "Riesgo de queratitis ulcerativa",
                    "Riesgo de anemia aplásica",
                    "Ineficacia frente a bacterias gramnegativas",
                    "Aumento marcado de la PIO"
                ],
                answer: "Riesgo de anemia aplásica",
                explanation: "El texto indica que algunos médicos evitan su uso sistemático por el riesgo de anemia aplásica."
            },
            {
                id: "conj-51",
                question: "En conjuntivitis bacteriana, el uso de lentes de contacto debe:",
                options: [
                    "Continuarse normalmente durante el tratamiento",
                    "Suspenderse hasta al menos 48 horas después de la resolución completa",
                    "Sustituirse por lentes rígidas",
                    "Limitarse solo al ojo no afectado"
                ],
                answer: "Suspenderse hasta al menos 48 horas después de la resolución completa",
                explanation: "Se recomienda suspender las lentes hasta 48 horas después de la resolución completa y no usarlas mientras haya tratamiento antibiótico."
            },
            {
                id: "conj-52",
                question: "Una medida básica para reducir el contagio en conjuntivitis infecciosa es:",
                options: [
                    "Uso de parche ocular continuo",
                    "Lavado frecuente de manos y no compartir toallas",
                    "Evitar la luz intensa",
                    "Aplicar corticoides sistémicos profilácticos"
                ],
                answer: "Lavado frecuente de manos y no compartir toallas",
                explanation: "El texto resalta el lavado de manos y evitar compartir toallas como medidas para disminuir el contagio."
            },
            {
                id: "conj-53",
                question: "Chlamydia trachomatis existe en dos formas principales:",
                options: [
                    "Esporo y micelio",
                    "Cuerpo elemental extracelular y cuerpo reticular intracelular",
                    "Coco y bacilo polimorfo",
                    "Toxina A y toxina B"
                ],
                answer: "Cuerpo elemental extracelular y cuerpo reticular intracelular",
                explanation: "Se describe un cuerpo elemental extracelular resistente e infectivo y un cuerpo reticular intracelular replicativo."
            },
            {
                id: "conj-54",
                question: "La conjuntivitis por Chlamydia del adulto afecta aproximadamente a qué porcentaje de jóvenes sexualmente activos en países occidentales:",
                options: [
                    "0,5-1%",
                    "2-4%",
                    "5-20%",
                    "50-70%"
                ],
                answer: "5-20%",
                explanation: "El texto señala una afectación del 5-20% de jóvenes sexualmente activos."
            },
            {
                id: "conj-55",
                question: "El periodo de incubación típico de la conjuntivitis por Chlamydia del adulto es de aproximadamente:",
                options: [
                    "1-2 días",
                    "1 semana",
                    "1 mes",
                    "3 meses"
                ],
                answer: "1 semana",
                explanation: "Se describe un periodo de incubación aproximado de 1 semana."
            },
            {
                id: "conj-56",
                question: "Un hallazgo típico en la conjuntivitis por Chlamydia del adulto es:",
                options: [
                    "Folículos grandes, especialmente en el fondo de saco inferior",
                    "Papilas gigantes exclusivas del limbo",
                    "Ausencia total de folículos",
                    "Solo hiperemia perilímbica sin secreción"
                ],
                answer: "Folículos grandes, especialmente en el fondo de saco inferior",
                explanation: "Se mencionan folículos grandes más evidentes en el fondo de saco inferior, también pudiendo afectar la conjuntiva tarsal superior."
            },
            {
                id: "conj-57",
                question: "Un signo corneal característico descrito en la conjuntivitis por Chlamydia crónica es:",
                options: [
                    "Anillo de Kayser-Fleischer",
                    "Pannus corneal superior",
                    "Desprendimiento seroso macular",
                    "Maculopatía bullosa"
                ],
                answer: "Pannus corneal superior",
                explanation: "En casos crónicos se menciona la presencia de pannus corneal superior."
            },
            {
                id: "conj-58",
                question: "En el estudio de la conjuntivitis por Chlamydia, la inmunofluorescencia directa sirve para:",
                options: [
                    "Medir la PIO",
                    "Detectar cuerpos elementales libres con alta sensibilidad y especificidad",
                    "Valorar campo visual",
                    "Determinar espesor corneal"
                ],
                answer: "Detectar cuerpos elementales libres con alta sensibilidad y especificidad",
                explanation: "Se indica que la inmunofluorescencia directa detecta cuerpos elementales con sensibilidad y especificidad cercanas al 90%."
            },
            {
                id: "conj-59",
                question: "Según el texto, el tratamiento sistémico de elección habitual para conjuntivitis por Chlamydia del adulto es:",
                options: [
                    "Amoxicilina sola por 3 días",
                    "Azitromicina 1 g, repetida a la semana",
                    "Prednisona oral en pauta corta",
                    "Ceftriaxona intramuscular única"
                ],
                answer: "Azitromicina 1 g, repetida a la semana",
                explanation: "Se menciona azitromicina 1 g repetida a la semana como tratamiento de elección, pudiéndose repetir más dosis en algunos casos."
            },
            {
                id: "conj-60",
                question: "Respecto a la conducta sexual en un paciente con conjuntivitis por Chlamydia en tratamiento, es correcto que:",
                options: [
                    "Puede mantener relaciones sin restricciones",
                    "Debe mantener abstinencia hasta completar el tratamiento",
                    "Solo debe evitar contacto ocular directo",
                    "Basta con usar lágrimas artificiales"
                ],
                answer: "Debe mantener abstinencia hasta completar el tratamiento",
                explanation: "Se recomienda abstinencia sexual hasta completar el tratamiento (p. ej., 1 semana tras azitromicina), además de medidas de higiene."
            },
            {
                id: "conj-61",
                question: "En todo caso confirmado de conjuntivitis por Chlamydia del adulto es obligatorio:",
                options: [
                    "Realizar vitrectomía diagnóstica",
                    "Derivar a urólogo o ginecólogo para descartar otras ITS",
                    "Iniciar inmediatamente corticoides sistémicos",
                    "Practicar queratoplastia penetrante"
                ],
                answer: "Derivar a urólogo o ginecólogo para descartar otras ITS",
                explanation: "El texto indica que debe derivarse al paciente para descartar otras infecciones de transmisión sexual y controlar contactos."
            },
            {
                id: "conj-62",
                question: "Tras el tratamiento de la conjuntivitis por Chlamydia se recomienda repetir pruebas para descartar infección persistente a los:",
                options: [
                    "2-3 días",
                    "6-12 semanas",
                    "6 meses",
                    "2 años"
                ],
                answer: "6-12 semanas",
                explanation: "Se aconseja repetir estudios a las 6-12 semanas para descartar infección persistente."
            },
            {
                id: "conj-63",
                question: "En un adulto con conjuntivitis por Chlamydia, una consideración clave (QUID) señalada en el texto es:",
                options: [
                    "Evitar cualquier tipo de antibiótico",
                    "Confirmar siempre la presencia de glaucoma concomitante",
                    "Excluir otras infecciones de transmisión sexual",
                    "No informar a la pareja para evitar ansiedad"
                ],
                answer: "Excluir otras infecciones de transmisión sexual",
                explanation: "El QUID destaca que en un adulto con conjuntivitis por Chlamydia deben excluirse otras ITS."
            },
            {
                id: "conj-64",
                question: "El tracoma se describe como:",
                options: [
                    "La principal causa de ceguera irreversible evitable en el mundo",
                    "Una rara enfermedad solo presente en países desarrollados",
                    "Una degeneración macular hereditaria",
                    "Una entidad exclusiva de ancianos institucionalizados"
                ],
                answer: "La principal causa de ceguera irreversible evitable en el mundo",
                explanation: "Se afirma que el tracoma es la principal causa de ceguera irreversible evitable a nivel mundial."
            },
            {
                id: "conj-65",
                question: "El tracoma se asocia principalmente a:",
                options: [
                    "Alta renta per cápita y excelente higiene",
                    "Pobreza, hacinamiento e higiene deficiente con ciclos de reinfección",
                    "Uso de lentes de contacto blandas",
                    "Cirugía refractiva previa"
                ],
                answer: "Pobreza, hacinamiento e higiene deficiente con ciclos de reinfección",
                explanation: "El texto relaciona tracoma con pobreza, hacinamiento, mala higiene y ciclos de reinfección comunitaria."
            },
            {
                id: "conj-66",
                question: "En la clasificación de tracoma de la OMS, el grado TT hace referencia a:",
                options: [
                    "Inflamación tracomatosa folicular",
                    "Inflamación tracomatosa intensa",
                    "Cicatrización conjuntival tracomatosa",
                    "Triquiasis tracomatosa (pestañas contactan con el globo ocular)"
                ],
                answer: "Triquiasis tracomatosa (pestañas contactan con el globo ocular)",
                explanation: "La tabla de la OMS define TT como triquiasis tracomatosa: al menos una pestaña contacta con el globo ocular."
            }
        ]
    }
]
