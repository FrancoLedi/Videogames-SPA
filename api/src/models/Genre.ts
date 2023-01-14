import {Model, Column, Table, DataType} from 'sequelize-typescript';

@Table({
  timestamps: false
})
export class Genre extends Model<Genre> {

  @Column({
    type: DataType.STRING, 
    allowNull: false})
    name!: string;
    
};
