import { ShallowWrapper } from "enzyme";

export function find(id: string) {
  return `[testID="${id}"]`;
}

export function testId(id: string) {
  return find(id);
}

export function findWhere(wrapper: ShallowWrapper<any>, id: string) {
  return wrapper.findWhere(node => node.prop("testID") === id);
}

export function flushPromises() {
  return new Promise(setImmediate);
}

export type WithTestID = {
  testID?: string;
}