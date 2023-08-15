export enum LEVELS{
    "Facil",
    "Media",
    "Dificil",
    "Urgente"
}

export interface ITask{
    title:string;
    description:string;
    completed:boolean;
    level:LEVELS;
}