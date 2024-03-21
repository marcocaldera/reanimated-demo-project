import React from 'react';
import {
  Canvas,
  Skia,
  Text,
  useComputedValue,
} from '@shopify/react-native-skia';
import { useWorkletAssignGenerateHighLoad } from './hooks/useWorkletAssignGnerateHighLoad';
import { SafeAreaView } from 'react-native-safe-area-context';
import { UseWorkletValueOutput } from './hooks/useWorkletValue';
import Animated, {
  useAnimatedProps,
  useDerivedValue,
} from 'react-native-reanimated';
import { View } from 'react-native';

const elementsNeeded = [...Array(20)];

export const WorkletAssign = () => {
  const { bigArray } = useWorkletAssignGenerateHighLoad();

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
  bigArray: UseWorkletValueOutput<number[]>;
}) => {
  const val = bigArray().value?.[index]?.toString() || '-';
  // console.log('val', val);
  const text = useDerivedValue(() => {
    console.log('val', val);
    return val;
  }, [bigArray, index]);

  return <Text x={0} y={(index + 1) * 20} font={Skia.Font()} text={text} />;
  // return <Text x={0} y={(index + 1) * 20} font={Skia.Font()} text={text} />;
};
