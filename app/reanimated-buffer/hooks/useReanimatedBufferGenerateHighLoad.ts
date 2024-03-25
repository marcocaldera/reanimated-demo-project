import { useEffect } from 'react';
import { SharedValue, useSharedValue } from 'react-native-reanimated';
import { ARRAY_LENGTH, INTERVAL_MS } from '../../config';

type UseSkiaGenerateHighLoad = {
  bigArray: SharedValue<ArrayBuffer>;
};

export const useReanimatedBufferGenerateHighLoad =
  (): UseSkiaGenerateHighLoad => {
    const initialBuffer = new ArrayBuffer(ARRAY_LENGTH * 8);
    const bigArray = useSharedValue(initialBuffer);

    useEffect(() => {
      const intervalId = setInterval(() => {
        const buffer = new ArrayBuffer(ARRAY_LENGTH * 8);
        const view = new Float64Array(buffer);
        for (var i = 0; i < ARRAY_LENGTH; i++) {
          view[i] = Math.random();
        }
        bigArray.value = buffer;
      }, INTERVAL_MS);

      return () => {
        clearInterval(intervalId);
      };
    }, []);

    return { bigArray };
  };
