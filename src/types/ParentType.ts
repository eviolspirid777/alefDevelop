import { type Child } from "@/types/ChildType";

export type Parent = {
    name: string,
    username?: string,
    age: string,
    children: Child[]
}