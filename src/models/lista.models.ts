import { ListaItem } from "./lista.item.models";

export class Lista{
    id: number;
    titulo: string;
    createdIn: Date;
    finishIn: Date;
    finish: boolean;
    items:ListaItem[];
    
    constructor(titulo: string) {
        this.titulo = titulo;
        this.finish = false;
        this.createdIn = new Date();
        this.items = [];
        this.id = new Date().getTime();
        
    }

}