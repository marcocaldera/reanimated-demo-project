import { useEffect } from 'react';
import { ARRAY_LENGTH, INTERVAL_MS } from '../../config';
import {
  UseWorkletValueOutput,
  WorkletModules,
  requireInWorklet,
  useWorkletValue,
} from './useWorkletValue';

type UseWorkletAssignGenerateHighLoad = {
  bigArray: UseWorkletValueOutput<number[]>;
};

export const useWorkletAssignGenerateHighLoad =
  (): UseWorkletAssignGenerateHighLoad => {
    const bigArray = useWorkletValue<number[]>();
    // const random = requireInWorklet(WorkletModules.RANDOM_ARRAY);

    useEffect(() => {
      const intervalId = setInterval(() => {
        'worklet';

        bigArray().value = [
          ...Array.from({ length: ARRAY_LENGTH }, Math.random),
        ];

        console.log('bigArray length', bigArray().value[0]);
        // console.log('happening in useWorkletAssignGenerateHighLoad');
      }, INTERVAL_MS);

      return () => {
        clearInterval(intervalId);
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return { bigArray };
  };
