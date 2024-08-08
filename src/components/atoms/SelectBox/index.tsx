import React from 'react';
import { S } from './SelectBox.style';

interface OptionElement {
  name: string;
  value: string;
}

interface Props {
  placeHolder: string;
  options: OptionElement[];
  onChange: () => void;
}

export default function SelectBox({ placeHolder, options, onChange }: Props) {
  const placeHolderRef = React.useRef(placeHolder);
  const [isShowOption, setIsShowOption] = React.useState(false);

  const handleClickShowOptions = () => {
    setIsShowOption((prev) => !prev);
  };

  const handleClickOptionElement = (optionElement: OptionElement) => {
    placeHolderRef.current = optionElement.name;
    setIsShowOption(false);
    onChange();
  };

  return (
    <S.SelectBox>
      <div className="select-box" onClick={handleClickShowOptions}>
        {placeHolderRef.current}
      </div>
      {isShowOption && (
        <div className="select-box__option-list">
          {options.map((optionElement) => (
            <div className="select-box__option-list--element" onClick={() => handleClickOptionElement(optionElement)}>
              {optionElement.name}
            </div>
          ))}
        </div>
      )}
    </S.SelectBox>
  );
}
