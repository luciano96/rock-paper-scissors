import type { FC, PropsWithChildren } from "react";

import type { PropTypes } from "./Move.types";
import clsx from "clsx";

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
  return (
    <>
      <div className="flex items-center justify-center desktop:order-2">
        {isWin && (
          <>
            <span
              className={clsx(`[--ripple-delay:0]`, {
                "ripple-span": isWin,
              })}
            />
            <span
              className={clsx(`[--ripple-delay:1]`, {
                "ripple-span": isWin,
              })}
            />
            <span
              className={clsx(`[--ripple-delay:2]`, {
                "ripple-span": isWin,
              })}
            />
          </>
        )}
        {children}
      </div>
      <p className="w-full text-center text-2xl desktop:text-4xl text-gray-50 desktop:order-1">
        {text}
      </p>
    </>
  );
};

export default Move;
