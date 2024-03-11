import { useEffect } from 'react';
import { SharedValue, useSharedValue } from 'react-native-reanimated';
import { ARRAY_LENGTH, INTERVAL_MS } from '../../config';

type UseSkiaGenerateHighLoad = {
  bigArray: SharedValue<number[]>;
};

export const useReanimatedGenerateHighLoad = (): UseSkiaGenerateHighLoad => {
  const bigArray = useSharedValue<number[]>([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      bigArray.value = [...Array.from({ length: ARRAY_LENGTH }, Math.random)];
    }, INTERVAL_MS);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return { bigArray };
};
