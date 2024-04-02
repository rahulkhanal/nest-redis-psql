import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "demo" })
export class appEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    name: string

    @Column()
    class: number

    @Column()
    subject: string

    @Column()
    isMale: boolean
}