import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy } from 'lucide-react';
import FadeIn from './common/FadeIn';

const AccountItem = ({ bank, account, name }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(`${bank} ${account}`);
    alert('계좌번호가 복사되었습니다.');
  };

  return (
    <div className="flex justify-between items-center bg-white p-4 rounded mb-2 border border-gray-100">
      <div className="text-sm">
        <div className="font-bold text-gray-700">
          {bank} {account}
        </div>
        <div className="text-gray-500">예금주: {name}</div>
      </div>
      <button
        onClick={handleCopy}
        className="px-3 py-1 text-xs border border-gray-300 rounded hover:bg-gray-100 flex items-center gap-1"
      >
        <Copy size={12} /> 복사
      </button>
    </div>
  );
};

const MoneyGift = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-16 px-6 bg-brand">
      <FadeIn>
        <h3 className="text-xl font-serif text-center mb-8 text-accent">
          마음 전하실 곳
        </h3>
        <div className="max-w-md mx-auto text-center">
          <p className="text-sm text-gray-600 mb-6">
            참석이 어려우신 분들을 위해
            <br />
            계좌번호를 기재하였습니다.
            <br />
            너그러운 마음으로 양해 부탁드립니다.
          </p>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-accent text-white px-8 py-3 rounded-full shadow hover:bg-opacity-90 transition-all w-full max-w-xs"
          >
            {isOpen ? '계좌번호 닫기' : '계좌번호 보기'}
          </button>

          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              className="mt-6 text-left overflow-hidden"
            >
              <div className="mb-4">
                <p className="text-xs text-gray-500 mb-2 ml-1">신랑측</p>
                <AccountItem
                  bank="국민은행"
                  account="123-456-789012"
                  name="차승범"
                />
                <AccountItem
                  bank="국민은행"
                  account="123-456-789012"
                  name="차아빠"
                />
                <AccountItem
                  bank="국민은행"
                  account="123-456-789012"
                  name="차엄마"
                />
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-2 ml-1">신부측</p>
                <AccountItem
                  bank="우리은행"
                  account="1002-333-444555"
                  name="조주영"
                />
                <AccountItem
                  bank="우리은행"
                  account="1002-333-444555"
                  name="조아빠"
                />
                <AccountItem
                  bank="우리은행"
                  account="1002-333-444555"
                  name="조엄마"
                />
              </div>
            </motion.div>
          )}
        </div>
      </FadeIn>
    </section>
  );
};

export default MoneyGift;
