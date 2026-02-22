export interface Tool {
  name: string;
  description: string;
  schema: any;
  execute: (input: any) => Promise<string>;
}
