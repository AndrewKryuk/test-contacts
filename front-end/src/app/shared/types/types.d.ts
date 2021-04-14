declare type JsonObject<T> = { [k in keyof T]: T[k] } & Record<string, any>;

declare type InstanceClass<ClassName = any> = new (...args: any[]) => ClassName;

declare type InstanceClassWithArgs<ClassName = any, Args extends any[] = []> = new (...args: Args) => ClassName;

declare type OneOfArray<T> = T extends (infer R)[] ? R : T;


declare interface BootableClass {
  fromJson(data: JsonObject<this>): void;
}
