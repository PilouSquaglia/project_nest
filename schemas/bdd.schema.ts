import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type DemoDocument = Demo & Document;

@Schema()
export class Demo {
    @Prop({ required: true })
    property_1: string;

    @Prop({ required: true })
    property_2: number;

    @Prop()
    property_3: string;

    @Prop({ required: true })
    property_4: boolean;
}

export const DemoSchema = SchemaFactory.createForClass(Demo);