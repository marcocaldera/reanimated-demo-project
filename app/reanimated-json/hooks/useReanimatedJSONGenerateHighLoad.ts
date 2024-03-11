import { useEffect } from 'react';
import {
  SharedValue,
  useDerivedValue,
  useSharedValue,
} from 'react-native-reanimated';
import { ARRAY_LENGTH, INTERVAL_MS } from '../../config';

type UseSkiaGenerateHighLoad = {
  bigArray: SharedValue<number[]>;
};

export const useReanimatedJSONGenerateHighLoad =
  (): UseSkiaGenerateHighLoad => {
    const bigArray = useSharedValue<string>(JSON.stringify([]));

    useEffect(() => {
      const intervalId = setInterval(() => {
        bigArray.value = JSON.stringify([
          ...Array.from({ length: ARRAY_LENGTH }, Math.random),
        ]);
      }, INTERVAL_MS);

      return () => {
        clearInterval(intervalId);
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const parsedBigArray: SharedValue<number[]> = useDerivedValue(
      () => JSON.parse(bigArray?.value),
      [bigArray],
    );

    return { bigArray: parsedBigArray };
  };
