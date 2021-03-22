import { Rubro } from "./rubro.model";

export interface Producto{
    id: number;
    codigo: string;
    denominacion: string;
    precio: number;
    rubro: Rubro;
}