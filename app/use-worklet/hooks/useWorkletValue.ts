/* eslint no-underscore-dangle: 0, @typescript-eslint/no-explicit-any: 0 */
import { useCallback, useRef } from 'react';
import { ARRAY_LENGTH } from '../../config';

export enum WorkletModules {
  RANDOM_ARRAY = 'RANDOM_ARRAY',
}

type RandomModule = {
  get(): number[];
};

interface Global {
  __workletModules: {
    [moduleName in WorkletModules]?: () => never;
  };
  workletValues: Record<string, unknown> | never;
}

const randomArrayModule = (): RandomModule => {
  'worklet';

  function get() {
    return [...Array.from({ length: ARRAY_LENGTH }, Math.random)];
  }

  return {
    get,
  };
};

const requireWorkletModule = (moduleName: WorkletModules, module: any) => {
  'worklet';

  if (!(global as unknown as Global).__workletModules) {
    (global as unknown as Global).__workletModules = {};
  }

  if (!(global as unknown as Global).__workletModules[moduleName]) {
    (global as unknown as Global).__workletModules[moduleName] = module();
  }

  return (global as unknown as Global).__workletModules[moduleName];
};

export const requireInWorklet = (moduleName: WorkletModules): RandomModule => {
  'worklet';

  if (moduleName === WorkletModules.RANDOM_ARRAY) {
    return requireWorkletModule(
      moduleName,
      randomArrayModule,
    ) as unknown as RandomModule[];
  }

  throw new Error(`Cannot resolve UI module ${moduleName}`);
};

let workletId = Number.MIN_SAFE_INTEGER;

export type UseWorkletValueOutput<Type = any> = () => {
  value: Type;
};

// Used to hold complex values returned from `requireInWorklet`
export function useWorkletValue<Type>(): UseWorkletValueOutput<Type> {
  const workletModule = useRef<string>();

  if (!workletModule.current) {
    workletModule.current = `workletModule_${workletId++}`;
  }

  return useCallback(() => {
    'worklet';

    if (!(global as unknown as Global).workletValues) {
      (global as unknown as Global).workletValues = {};
    }

    return {
      get value() {
        return (global as unknown as Global).workletValues[
          workletModule.current as string
        ];
      },
      set value(value) {
        (global as unknown as Global).workletValues[
          workletModule.current as string
        ] = value;
      },
    };
  }, []);
}
