import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from 'uuid';
import { Tag } from "./Tag";
import { User } from "./User";


@Entity("COMPLIMENTS")
export class Compliments {
    @PrimaryColumn()
    readonly id: string;

    @Column({ name: "user_sender" })
    senderUserId: string;

    @JoinColumn({ name: "user_sender" })
    @ManyToOne(() => User)
    senderUser: User;

    @Column({ name: "user_receiver" })
    receiverUserId: string;

    @JoinColumn({ name: "user_receiver" })
    @ManyToOne(() => User)
    receiverUser: User;

    @Column({ name: "tag_id" })
    tagId: string;

    @JoinColumn({ name: "tag_id" })
    @ManyToOne(() => Tag)
    tag: Tag;

    @Column()
    message: string;

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }

}
