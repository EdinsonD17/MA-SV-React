import { Wrench, Zap, Cpu, Car } from 'lucide-react';

export const servicesData = [
    {
        id: 1,
        title: "Mantenimiento Preventivo",
        description: "Cambio de aceite, filtros, frenos, suspensión y revisión general para alargar la vida de su motor.",
        icon: Wrench
    },
    {
        id: 2,
        title: "Diagnóstico Electrónico",
        description: "Escaneo computarizado avanzado, revisión de sensores, actuadores y solución de fallas electrónicas.",
        icon: Cpu
    },
    {
        id: 3,
        title: "Reparación Mecánica",
        description: "Expertos en motor, transmisión manual y automática, sistemas de dirección y suspensión.",
        icon: Car
    },
    {
        id: 4,
        title: "Electricidad y Accesorios",
        description: "Alternadores, baterías, reparación de arranque, aire acondicionado, alarmas y sensores.",
        icon: Zap
    }
];
