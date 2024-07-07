import React from "react";

interface Props {
  message: string;
  onClose: () => void; 
}

const AlertWarning = ({ message, onClose }: Props) => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-1000 bg-gray-700 bg-opacity-50">
      <div className="flex w-full max-w-md bg-white rounded-lg shadow-lg p-6 dark:bg-[#1B1B24] dark:bg-opacity-30">
        <div className="mr-5.5 mt-[5px] flex h-8 w-full max-w-8 items-center justify-center rounded-md bg-[#FFB800]">
          <svg
            width="16"
            height="16"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10 1.6665C10.6762 1.6665 11.3292 1.89004 12.6352 2.3371L13.1126 2.5005C15.6181 3.35813 16.8708 3.78695 17.1854 4.23518C17.5 4.6834 17.5 6.01573 17.5 8.68038V9.99264C17.5 14.691 13.9675 16.9711 11.7512 17.9392C11.15 18.2019 10.8494 18.3332 10 18.3332C9.15062 18.3332 8.85001 18.2019 8.2488 17.9392C6.03247 16.9711 2.5 14.691 2.5 9.99264V8.68038C2.5 6.01573 2.5 4.6834 2.8146 4.23518C3.12919 3.78695 4.38194 3.35813 6.88743 2.5005L7.36477 2.3371C8.67082 1.89004 9.32384 1.6665 10 1.6665ZM10 10.6248C10.3452 10.6248 10.625 10.345 10.625 9.99984V6.6665C10.625 6.32133 10.3452 6.0415 10 6.0415C9.65482 6.0415 9.375 6.32133 9.375 6.6665V9.99984C9.375 10.345 9.65482 10.6248 10 10.6248ZM10 12.4998C10.4602 12.4998 10.8333 12.9601 10.8333 13.3332C10.8333 13.7062 10.4602 14.1665 10 14.1665C9.53976 14.1665 9.16667 13.7062 9.16667 13.3332C9.16667 12.9601 9.53976 12.4998 10 12.4998Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="w-full pt-2">
          <p className="w-full max-w-[740px] text-[#D0915C]">
            {message}
          </p>
          
          <div className="mt-4 flex justify-end">
            <button
              onClick={onClose} 
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlertWarning;
