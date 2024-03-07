const world = 'world';

export function hello(who: string = world): string {
    const t = {
        "name" : "this is a test"
    } as TestingClass
    console.log(t.name);
  return `Hello ${who}! `;
}

export type TestingClass = {
    name: string;
}
