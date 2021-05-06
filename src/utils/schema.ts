import { normalize, schema } from "normalizr";

const setJsonData = (alias: string) => new schema.Entity(alias, {}, { idAttribute: "id" });

export const normalizedData = (rawData: any, alias: string) => normalize(rawData, [setJsonData(alias)]);
