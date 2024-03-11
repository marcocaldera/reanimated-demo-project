import React from 'react';
import { Canvas, Skia, Text } from '@shopify/react-native-skia';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SharedValue, useDerivedValue } from 'react-native-reanimated';
import { useReanimatedJSONGenerateHighLoad } from './hooks/useReanimatedJSONGenerateHighLoad';

const elementsNeeded = [...Array(20)];

export const ReanimatedJSON = () => {
  const { bigArray } = useReanimatedJSONGenerateHighLoad();

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
    () => bigArray?.value?.[index]?.toString() || '-',
    [bigArray, index],
  );

  return <Text x={0} y={(index + 1) * 20} font={Skia.Font()} text={text} />;
};
