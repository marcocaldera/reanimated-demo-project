import React from 'react';
import {
  Canvas,
  Skia,
  SkiaMutableValue,
  Text,
  useComputedValue,
} from '@shopify/react-native-skia';
import { useSkiaGenerateHighLoad } from './hooks/useSkiaGenerateHighLoad';
import { SafeAreaView } from 'react-native-safe-area-context';

const elementsNeeded = [...Array(20)];

export const SkiaFast = () => {
  const { bigArray } = useSkiaGenerateHighLoad();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Canvas style={{ flex: 1 }}>
        {elementsNeeded.map((_, index) => (
          <TextItem key={index} index={index} bigArray={bigArray} />
        ))}
      </Canvas>
    </SafeAreaView>
  );
};

const TextItem = ({
  index,
  bigArray,
}: {
  index: number;
  bigArray: SkiaMutableValue<number[]>;
}) => {
  const text = useComputedValue(
    () => bigArray?.current?.[index]?.toString() || '-',
    [bigArray, index],
  );

  return <Text x={0} y={(index + 1) * 20} font={Skia.Font()} text={text} />;
};
