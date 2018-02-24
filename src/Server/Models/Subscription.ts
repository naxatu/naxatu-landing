import {
    Table,
    Model,
    DataType,
    Column,
    CreatedAt,
    UpdatedAt
} from 'sequelize-typescript';

@Table({
    timestamps: true,
})
export default class Subscription extends Model<Subscription> {
    @Column(DataType.STRING)
    public email!: string;

    @CreatedAt
    public createdAt!: Date;

    @UpdatedAt
    public updatedAt!: Date;
}
