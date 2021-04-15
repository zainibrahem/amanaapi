import React from 'react';
import {Catsli} from './category.style';

type Props = {
    Label?: string;
  };
  
  const CatsLi: React.FC<Props> = ({ Label }) => {
      return (
         <Catsli>{Label}</Catsli>
      );
  }
  export default CatsLi;