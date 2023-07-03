import type { FC, PropsWithChildren } from "react";

import type { PropTypes } from "./Move.types";
import clsx from "clsx";

const rippleClassNameBuilder = (isWin: boolean) => (i: string) => {
  return `[--ripple-delay:${i}] ` + clsx({
    "ripple-span": isWin,
  });
};

/**
 * ## Usage
 *
 * ```js
 * import Move from '~/components/move';
 *
 * <Move />
 * ```
 */
const Move: FC<PropsWithChildren<PropTypes>> = ({
  children,
  text,
  isWin = false,
}) => {
  const classNameBuilder = rippleClassNameBuilder(isWin);

  return (
    <>
      <p className="w-full text-center text-4xl text-gray-50">{text}</p>
      <div className={`flex items-center justify-center ${clsx({})}`}>
        {isWin && (
          <>
            <span className={classNameBuilder('0')} />
            <span className={classNameBuilder('1')} />
            <span className={classNameBuilder('2')} />
          </>
        )}
        {children}
      </div>
    </>
  );
};

export default Move;
