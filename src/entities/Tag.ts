import { Expose } from "class-transformer";
import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity("TAGS")
export class Tag {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date;

    @Expose({ name: "nameCustom"})
    nameCustom(): string {
        return `#${this.name}`;
    }

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}
