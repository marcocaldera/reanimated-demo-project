import React from 'react';
import { Canvas, Skia, Text } from '@shopify/react-native-skia';
import { useReanimatedGenerateHighLoad } from './hooks/useReanimatedGenerateHighLoad';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SharedValue, useDerivedValue } from 'react-native-reanimated';

const elementsNeeded = [...Array(20)];

export const Reanimated = () => {
  const { bigArray } = useReanimatedGenerateHighLoad();

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
  bigArray: SharedValue<number[]>;
}) => {
  const text = useDerivedValue(
    () => bigArray.value?.[index]?.toString() || '-',
    [bigArray, index],
  );

  return <Text x={0} y={(index + 1) * 20} font={Skia.Font()} text={text} />;
};
