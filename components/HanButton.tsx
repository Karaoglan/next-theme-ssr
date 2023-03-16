import { Button } from '@chakra-ui/react';
import { HanButtonParams } from '@/type';

export const HanButton = ({ buttonText }: HanButtonParams) => {
  return <Button color="primary">{buttonText}</Button>;
};
