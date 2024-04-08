'use client'
import React, { useState, useEffect } from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import Icon from '../Icon';

interface ModelProps {
  isOpen?: boolean;
  isClose?: () => void;
  body?: any;
  cls?: string;
  headTitle?: string;
}

const Model: React.FC<ModelProps> = ({ isOpen, isClose, body, cls, headTitle }) => {

  return (
    <>
      {isOpen && (
        <div className="w-full h-screen fixed top-0 left-0 flex items-center justify-center z-10 modelcon">
          <div className={`${cls} flex flex-col gap-2 w-[400px] shadow-xl bg-white _border p-5`}>
            <div className="relative flex flex-row items-center justify-between _borderb py-2">
              <h1 className="capitalize text-xl font-bold">{headTitle}</h1>
              <Icon icon={<IoCloseSharp className="text-[20px]" />} onClick={isClose} />
            </div>
            <div className='w-full h-full'>
              {body}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Model;
