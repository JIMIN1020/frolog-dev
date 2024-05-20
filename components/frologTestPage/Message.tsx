import { ICONS } from 'constants/icon';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

function Message({ loading }: { loading: boolean }) {
  return (
    <MessageContainer
      key={loading ? 'loading' : 'completed'}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 1 }}
    >
      <LQuote
        src={ICONS.singUp.leftq}
        alt='Left quote'
        width={20}
        height={20}
      />
      {loading ? (
        <Msg>조금만 기다려주세요!</Msg>
      ) : (
        <Msg>
          00님의 <br />
          독서 성향은...
        </Msg>
      )}
      <RQuote
        src={ICONS.singUp.rightq}
        alt='Right quote'
        width={20}
        height={20}
      />
    </MessageContainer>
  );
}

export default Message;

const MessageContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  text-align: center;
`;

const Msg = styled.p`
  font-size: ${({ theme }) => theme.fontSize.lg};
  line-height: 1.7;
  padding: 0 20px;
  width: 264px;
`;

const LQuote = styled(Image)`
  width: 24px;
  height: 24px;
  margin-right: 11px;
`;

const RQuote = styled(Image)`
  width: 24px;
  height: 24px;
  margin-left: 11px;
`;
