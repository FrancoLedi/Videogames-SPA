import {Model, Column, Table, DataType} from 'sequelize-typescript';

  @Table({
    timestamps: false
  })
  export class Videogame extends Model<Videogame> {

    @Column({
      type: DataType.UUID, 
      primaryKey: true, 
      allowNull: false, 
      defaultValue: DataType.UUIDV4})
      id!: string;
    
    @Column({
      type: DataType.STRING, 
      allowNull: false})
      name!: string;

    @Column({
      type: DataType.STRING, 
      allowNull: true})
      img!: string;
    
    @Column({
      type: DataType.TEXT, 
      allowNull: false})
      description!: string;

    @Column ({
      type: DataType.STRING,
      allowNull: true})
      released!: string;

    @Column ({
      type: DataType.FLOAT,
      allowNull: true})
      rating!: number;

    @Column ({
      type: DataType.STRING,
      allowNull: false})
      platforms!: string[];
    @Column ({
      type: DataType.BOOLEAN,
      allowNull: false,
      defaultValue: true})
      createdInDb!: boolean;
  }

