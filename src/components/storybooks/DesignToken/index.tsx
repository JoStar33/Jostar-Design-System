import { colors } from '@/styles/Theme';
import { S } from './DesignToken.style';
import Text from '@/components/atoms/Text';

export default function DesignToken() {
  const colorsArray = Object.entries(colors);
  return (
    <S.DesignToken>
      <div className="token-items">
        <Text variant="h3" style={{ fontWeight: 600 }}>
          Colors Name
        </Text>
        <div className="token-items__color-info-wrapper">
          {colorsArray.map((element, index) => (
            <span>{`${index + 1}. ${element[0]}`}</span>
          ))}
        </div>
      </div>
      <div className="token-items">
        <Text variant="h3" style={{ fontWeight: 600 }}>
          Colors
        </Text>
        <div className="token-items__wrapper">
          {colorsArray.map((element, index) => (
            <div className="token-items__color-box" style={{ backgroundColor: element[1] }}>
              {index + 1}
            </div>
          ))}
        </div>
      </div>
    </S.DesignToken>
  );
}
