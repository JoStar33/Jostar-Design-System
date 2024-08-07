import { flexCenter } from '@/styles/Common';
import { colors } from '@/styles/Theme';
import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

export interface Tab {
  name: string;
  value: string;
}

interface Props {
  tabList: Tab[];
  activeHandler: (element: Tab) => void;
}
/**
 *
 * @param tabList Tab 인터페이스 배열.
 * @param activeHandler 탭 클릭시 실행될 함수.
 * @returns
 */
export default function Tabs({ tabList, activeHandler }: Props) {
  const [activeTab, setActiveTab] = React.useState<Tab>(() => tabList[0]);

  const computedTabStyle = (element: Tab): React.CSSProperties => {
    const isActive = activeTab.value === element.value;
    return {
      color: isActive ? colors.white : colors.black,
    };
  };

  const handleClickTab = (element: Tab) => {
    setActiveTab(element);
    activeHandler(element);
  };

  return (
    <S.Tabs layout layoutRoot>
      {tabList.map((tabElement) => (
        <motion.div className="tabs-element" onClick={() => handleClickTab(tabElement)}>
          <span className="tabs-element__text" style={computedTabStyle(tabElement)}>
            {tabElement.name}
          </span>
          {activeTab.value === tabElement.value && (
            <motion.div
              className="tabs-element__cover"
              initial={false}
              layoutId="highlight"
              layout="preserve-aspect"
              transition={{ duration: 0.3 }}
            />
          )}
        </motion.div>
      ))}
    </S.Tabs>
  );
}

const S = {
  Tabs: styled(motion.div)`
    display: flex;
    gap: 10px;
    .tabs-element {
      cursor: pointer;
      -webkit-user-drag: none;
      user-select: none;
      padding: 10px;
      ${flexCenter}
      position: relative;
      &__text {
        z-index: 3;
      }
      &__cover {
        position: absolute;
        top: 0px;
        width: 100%;
        height: 100%;
        border-radius: 5px;
        background-color: ${(props) => props.theme.colors.modernBlack};
        left: 0px;
      }
    }
  `,
};
