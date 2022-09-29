import { Express } from "express";
import { ModuleDefaultClass } from "../common";
import { RouterApiSpec, RouterProps } from './types';
class RouterModule implements ModuleDefaultClass {
  private schema: { [x: string]: RouterApiSpec } = {};
  private routeFunctions: { [x: string]: (api: RouterApiSpec) => any } = {};

  constructor({ path, routeFunctions }: RouterProps) {
    const apiSchemaJson = require(path);
    this.schema = Object.freeze(apiSchemaJson);
    this.routeFunctions = routeFunctions;
  };

  public init(app: Express, args?: any): void {
    const _schema = Object.entries(this.schema);

    const info: { method: string; url: string, success: boolean }[] = [];

    _schema.forEach(([key, api]) => {
      let isRegistered = false;
      if (typeof this.routeFunctions[key] === 'function') {
        app[api.method](api.url, this.routeFunctions[key](api));
        isRegistered = true;
      }

      info.push({
        method: api.method.toLocaleUpperCase(),
        url: api.url,
        success: isRegistered,
      });
    })
    console.table(info);
  }
}
export { RouterModule };