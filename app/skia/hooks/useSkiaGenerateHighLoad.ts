import { SkiaMutableValue, useValue } from '@shopify/react-native-skia';
import { useEffect } from 'react';
import { ARRAY_LENGTH, INTERVAL_MS } from '../../config';

type UseSkiaGenerateHighLoad = {
  bigArray: SkiaMutableValue<number[]>;
};

export const useSkiaGenerateHighLoad = (): UseSkiaGenerateHighLoad => {
  const bigArray = useValue<number[]>([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      bigArray.current = [...Array.from({ length: ARRAY_LENGTH }, Math.random)];
    }, INTERVAL_MS);

    return () => {
      clearInterval(intervalId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { bigArray };
};
